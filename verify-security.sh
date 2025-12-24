#!/bin/bash

echo "🔒 Verificación de Seguridad Pre-Commit"
echo "========================================="
echo ""

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

ERRORS=0

# 1. Verificar archivos .env
echo "📁 Verificando archivos .env..."
if git ls-files | grep -q "\.env$\|\.env\.local$\|\.env\.production$"; then
    echo -e "${RED}❌ ERROR: Archivos .env encontrados en staging${NC}"
    git ls-files | grep "\.env"
    ERRORS=$((ERRORS+1))
else
    echo -e "${GREEN}✅ No hay archivos .env en staging${NC}"
fi
echo ""

# 2. Buscar credenciales en código
echo "🔍 Buscando credenciales en código..."
if git diff --cached --name-only | xargs grep -l -i "password\|api[_-]key\|secret\|private[_-]key" 2>/dev/null; then
    echo -e "${YELLOW}⚠️  ADVERTENCIA: Posibles credenciales encontradas${NC}"
    echo "Revisa manualmente los archivos arriba"
    ERRORS=$((ERRORS+1))
else
    echo -e "${GREEN}✅ No se encontraron credenciales obvias${NC}"
fi
echo ""

# 3. Verificar npm audit
echo "📦 Auditando dependencias..."
if npm audit --production --audit-level=high > /dev/null 2>&1; then
    echo -e "${GREEN}✅ No hay vulnerabilidades críticas o altas${NC}"
else
    echo -e "${RED}❌ ERROR: Vulnerabilidades encontradas${NC}"
    npm audit --production --audit-level=high
    ERRORS=$((ERRORS+1))
fi
echo ""

# 4. Verificar que node_modules no se incluya
echo "📂 Verificando node_modules..."
if git ls-files | grep -q "node_modules/"; then
    echo -e "${RED}❌ ERROR: node_modules/ en staging${NC}"
    ERRORS=$((ERRORS+1))
else
    echo -e "${GREEN}✅ node_modules/ no incluido${NC}"
fi
echo ""

# 5. Verificar archivos grandes
echo "📏 Verificando tamaño de archivos..."
LARGE_FILES=$(git diff --cached --name-only | while read file; do
    if [ -f "$file" ]; then
        SIZE=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
        if [ "$SIZE" -gt 1048576 ]; then  # 1MB
            echo "$file ($((SIZE/1024))KB)"
        fi
    fi
done)

if [ -n "$LARGE_FILES" ]; then
    echo -e "${YELLOW}⚠️  ADVERTENCIA: Archivos grandes encontrados:${NC}"
    echo "$LARGE_FILES"
else
    echo -e "${GREEN}✅ No hay archivos excesivamente grandes${NC}"
fi
echo ""

# Resultado final
echo "========================================="
if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}✅ VERIFICACIÓN COMPLETA: Seguro para commit${NC}"
    exit 0
else
    echo -e "${RED}❌ VERIFICACIÓN FALLIDA: $ERRORS errores encontrados${NC}"
    echo "Por favor, corrige los errores antes de commitear"
    exit 1
fi
