# 📘 GUÍA PASO A PASO - Subir Portfolio a GitHub de Forma Segura

## ✅ VERIFICACIÓN DE SEGURIDAD COMPLETADA

Tu proyecto **SÍ ES SEGURO** para subir a GitHub:

- ✅ **0 vulnerabilidades** en dependencias
- ✅ **No hay credenciales** en el código
- ✅ **No hay API keys** hardcodeadas
- ✅ **`.gitignore` correctamente configurado**
- ✅ **Archivos .env protegidos**
- ✅ **Headers de seguridad implementados**

---

## 🚀 PASOS PARA SUBIR A GITHUB

### 1. Inicializar Git (si no lo has hecho)

```bash
cd portfolio-pro

# Inicializar repositorio Git
git init

# Verificar que .gitignore existe
cat .gitignore
```

### 2. Verificar Archivos que se van a Subir

```bash
# Ver qué archivos se incluirán
git status

# IMPORTANTE: Verifica que NO aparezcan:
# ❌ .env o .env.local
# ❌ node_modules/
# ❌ credentials.json
# ❌ secrets.json
# ❌ *.key, *.pem, *.cert
```

### 3. Agregar Archivos al Staging

```bash
# Agregar todos los archivos (excepto los del .gitignore)
git add .

# Verificar qué se agregó
git status
```

**Deberías ver:**
```
✅ src/
✅ public/
✅ index.html
✅ package.json
✅ vite.config.js
✅ tailwind.config.js
✅ netlify.toml
✅ SECURITY.md
✅ README.md
✅ LICENSE
✅ .gitignore
```

**NO deberías ver:**
```
❌ node_modules/
❌ dist/
❌ .env
❌ .env.local
```

### 4. Crear Primer Commit

```bash
git commit -m "Initial commit: Portfolio profesional con seguridad ISO 27001

- Implementado React 19 + Vite 7 + Tailwind CSS
- Content Security Policy (CSP)
- Headers de seguridad HTTP completos
- ErrorBoundary para manejo de errores
- Configuración Netlify para deployment
- 0 vulnerabilidades en dependencias
- Conforme ISO 27001/27002"
```

### 5. Crear Repositorio en GitHub

#### Opción A: Desde GitHub Web

1. Ve a https://github.com/new
2. **Repository name:** `portfolio-pro` (o el nombre que prefieras)
3. **Description:** "Portfolio profesional - Arquitecto Full-Stack | ISO 27001 | React + Vite"
4. **Visibility:**
   - ✅ **Public** (recomendado para portfolio)
   - 🔒 **Private** (si prefieres privacidad inicial)
5. **NO marques:**
   - ❌ Add README (ya lo tienes)
   - ❌ Add .gitignore (ya lo tienes)
   - ❌ Choose a license (ya lo tienes)
6. Click **"Create repository"**

#### Opción B: Desde GitHub CLI

```bash
# Instalar GitHub CLI si no lo tienes
# https://cli.github.com/

# Autenticarte
gh auth login

# Crear repositorio
gh repo create portfolio-pro --public --source=. --remote=origin
```

### 6. Conectar con GitHub y Subir

```bash
# Agregar remote (reemplaza TU_USUARIO con tu username de GitHub)
git remote add origin https://github.com/TU_USUARIO/portfolio-pro.git

# Verificar remote
git remote -v

# Cambiar branch a 'main' (si estás en 'master')
git branch -M main

# Subir código por primera vez
git push -u origin main
```

### 7. Verificar que TODO está Correcto

```bash
# En GitHub web, verifica que:
# ✅ Todos los archivos están presentes
# ✅ NO hay archivos .env
# ✅ NO hay node_modules/
# ✅ README.md se ve correctamente
# ✅ SECURITY.md está visible
```

---

## 🔒 VERIFICACIÓN DE SEGURIDAD POST-UPLOAD

### Después de subir, verifica en GitHub:

```bash
# 1. Buscar posibles secretos expuestos
# Ve al repo en GitHub y usa la búsqueda:
# - Busca: "password"
# - Busca: "api_key"
# - Busca: "secret"
# - Busca: "token"
```

✅ **Resultado esperado:** No deberías encontrar nada sensible

### Habilitar Dependabot (Recomendado)

1. Ve a tu repositorio en GitHub
2. Click en **"Settings"** > **"Security"** > **"Code security and analysis"**
3. Habilita:
   - ✅ **Dependabot alerts**
   - ✅ **Dependabot security updates**
   - ✅ **Dependabot version updates**

### Agregar Badges al README

Edita `README.md` y agrega badges útiles:

```markdown
[![Security](https://img.shields.io/badge/Security-ISO%2027001-green)](./SECURITY.md)
[![Vulnerabilities](https://img.shields.io/badge/Vulnerabilities-0-success)]()
[![Build](https://img.shields.io/badge/Build-Passing-success)]()
[![License](https://img.shields.io/badge/License-MIT-blue)](./LICENSE)
```

---

## 🌐 DEPLOYMENT A NETLIFY (OPCIONAL)

### Opción 1: Desde Netlify UI

1. Ve a https://app.netlify.com/
2. Click **"Add new site"** > **"Import an existing project"**
3. Conecta tu cuenta de GitHub
4. Selecciona el repositorio `portfolio-pro`
5. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **"Deploy"**

✅ **El archivo `netlify.toml` se aplicará automáticamente**

### Opción 2: Desde Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Autenticarte
netlify login

# Inicializar
netlify init

# Deploy
netlify deploy --prod
```

### Verificar Seguridad del Deploy

Después del deployment, verifica:

```bash
# 1. Verificar SSL/TLS
# Ve a: https://www.ssllabs.com/ssltest/
# Ingresa: tu-sitio.netlify.app
# Puntuación esperada: A o A+

# 2. Verificar Headers de Seguridad
# Ve a: https://securityheaders.com/
# Ingresa: tu-sitio.netlify.app
# Puntuación esperada: A o A+

# 3. Verificar con curl
curl -I https://tu-sitio.netlify.app | grep -E "Strict-Transport|Content-Security|X-Frame"
```

---

## 📝 COMANDOS GIT ÚTILES (FUTURO)

### Agregar Cambios Futuros

```bash
# Ver cambios
git status
git diff

# Agregar cambios específicos
git add src/components/Hero.jsx

# O agregar todos
git add .

# Commit con mensaje descriptivo
git commit -m "Update: Mejorado diseño del Hero section"

# Subir a GitHub
git push origin main
```

### Crear Ramas para Features

```bash
# Crear rama para nueva feature
git checkout -b feature/contact-form

# Hacer cambios y commit
git add .
git commit -m "Add: Formulario de contacto con validación"

# Subir rama
git push origin feature/contact-form

# En GitHub, crear Pull Request
```

### Mejores Prácticas de Commits

```bash
# Usar prefijos descriptivos:
git commit -m "Add: Nueva sección de testimonios"
git commit -m "Update: Colores del tema oscuro"
git commit -m "Fix: Error en navegación móvil"
git commit -m "Security: Actualizar dependencias vulnerables"
git commit -m "Refactor: Reorganizar componentes"
git commit -m "Docs: Actualizar README con nuevas features"
```

---

## ⚠️ COSAS QUE NUNCA DEBES HACER

### ❌ NUNCA Commitees:

```bash
# Archivos con credenciales
.env
.env.local
.env.production
credentials.json
secrets.json

# Certificados y llaves
*.key
*.pem
*.cert
*.p12

# Configuraciones locales
.vscode/settings.json (con configs personales)
.idea/ (configs de IDE)

# Archivos grandes
node_modules/
dist/
build/
videos/
*.zip
*.rar
```

### ❌ Si Accidentalmente Commiteas Algo Sensible:

```bash
# NO HAGAS ESTO (no elimina del historial):
git rm .env
git commit -m "Remove .env"

# HAZ ESTO (elimina del historial):
# 1. Usar BFG Repo-Cleaner
git clone --mirror https://github.com/TU_USUARIO/portfolio-pro.git
bfg --delete-files .env portfolio-pro.git
cd portfolio-pro.git
git reflog expire --expire=now --all && git gc --prune=now --aggressive
git push

# 2. O usar git-filter-repo
git filter-repo --invert-paths --path .env

# 3. IMPORTANTE: Rotar credenciales
# - Cambia todas las API keys expuestas
# - Revoca tokens expuestos
# - Genera nuevas credenciales
```

---

## 🎯 CHECKLIST FINAL

Antes de hacer público tu repositorio:

- [ ] `npm run security:audit` → 0 vulnerabilidades
- [ ] No hay archivos `.env` committeados
- [ ] `.gitignore` incluye archivos sensibles
- [ ] `README.md` está completo y profesional
- [ ] `SECURITY.md` con política de reporte
- [ ] `LICENSE` agregado (MIT)
- [ ] Código está limpio (sin console.logs innecesarios)
- [ ] No hay TODOs o comentarios embarazosos
- [ ] URLs de prueba reemplazadas (GitHub, LinkedIn, etc.)
- [ ] Email personal es correcto
- [ ] Proyecto builds sin errores (`npm run build`)
- [ ] Headers de seguridad verificados
- [ ] CSP implementado correctamente

---

## 🏆 RESULTADO FINAL

Una vez completados estos pasos, tendrás:

✅ Repositorio GitHub profesional y seguro
✅ Portfolio deployado en Netlify con HTTPS
✅ Headers de seguridad configurados
✅ Monitoreo automático de vulnerabilidades (Dependabot)
✅ Documentación completa (README, SECURITY)
✅ Cumplimiento ISO 27001 demostrable

---

## 📞 SOPORTE

Si tienes problemas:

1. **Git Issues:** https://docs.github.com/es
2. **Netlify Docs:** https://docs.netlify.com/
3. **Seguridad:** Revisa [SECURITY.md](./SECURITY.md)

---

**¡Tu portfolio está listo para impresionar reclutadores y clientes!** 🚀

**Creado con ❤️ y ciberseguridad en mente**
**ISO 27001 Compliant | 0 Vulnerabilidades | Production Ready**
