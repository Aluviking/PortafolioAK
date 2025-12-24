import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorCount: 0,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for monitoring
    // In production, send to error tracking service (Sentry, LogRocket, etc.)
    const isDevelopment = import.meta.env.DEV;

    if (isDevelopment) {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    } else {
      // In production, only log sanitized error without sensitive data
      console.error('Application error:', {
        message: error.message,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
      });
    }

    // Update state with error details
    this.setState({
      error,
      errorInfo,
      errorCount: this.state.errorCount + 1,
    });

    // TODO: Send to error tracking service
    // Example: Sentry.captureException(error);
  }

  handleReload = () => {
    // Clear error state and reload page
    window.location.reload();
  };

  handleGoHome = () => {
    // Clear error state and navigate to home
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      const isDevelopment = import.meta.env.DEV;

      return (
        <div className="min-h-screen bg-metal-950 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full"
          >
            <div className="glass-premium rounded-2xl p-8 border border-white/10 text-center">
              {/* Error Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 mb-6"
              >
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </motion.div>

              {/* Error Title */}
              <h1 className="text-3xl font-display font-bold text-white mb-4">
                Algo salió mal
              </h1>

              {/* Error Description */}
              <p className="text-metal-300 text-lg mb-8">
                Lo sentimos, hemos encontrado un error inesperado. Por favor, intenta
                recargar la página o vuelve al inicio.
              </p>

              {/* Development Error Details */}
              {isDevelopment && this.state.error && (
                <div className="mb-8 text-left">
                  <div className="glass-premium rounded-lg p-4 border border-red-500/20 bg-red-500/5">
                    <h3 className="text-sm font-bold text-red-400 mb-2">
                      Error Details (Development Only):
                    </h3>
                    <pre className="text-xs text-metal-400 overflow-auto max-h-40 whitespace-pre-wrap break-words">
                      {this.state.error.toString()}
                      {'\n\n'}
                      {this.state.errorInfo?.componentStack}
                    </pre>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={this.handleReload}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-metal-950 rounded-lg font-semibold hover:bg-metal-100 transition-colors"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Recargar Página
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={this.handleGoHome}
                  className="inline-flex items-center justify-center px-6 py-3 glass-premium border border-white/20 text-white rounded-lg font-semibold hover:border-white/40 transition-colors"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Ir al Inicio
                </motion.button>
              </div>

              {/* Error Count (for debugging) */}
              {isDevelopment && this.state.errorCount > 1 && (
                <p className="text-xs text-metal-500 mt-6">
                  Errores consecutivos: {this.state.errorCount}
                </p>
              )}

              {/* Support Info */}
              <p className="text-sm text-metal-400 mt-8">
                Si el problema persiste, contacta a{' '}
                <a
                  href="mailto:kelseyartoficial@gmail.com"
                  className="text-white hover:underline"
                >
                  soporte técnico
                </a>
              </p>
            </div>

            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
