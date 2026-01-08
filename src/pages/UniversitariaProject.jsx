import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, ExternalLink, Code, Palette, Shield, Zap, CheckCircle2, Globe } from 'lucide-react';
import { getAssetPath } from '../utils/paths';

const UniversitariaProject = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    getAssetPath('img/Universitaria de bogota.png'),
    getAssetPath('img/Universitaria de bogota 1.png'),
    getAssetPath('img/Universitaria de bogota 2.png'),
    getAssetPath('img/Universitaria de bogota 3.png'),
    getAssetPath('img/Universitaria de bogota 4.png'),
  ];

  const technologies = [
    {
      name: 'React & Next.js',
      description: 'Framework moderno para aplicaciones web de alto rendimiento',
      icon: Code,
    },
    {
      name: 'Tailwind CSS',
      description: 'Sistema de diseño responsivo y escalable',
      icon: Palette,
    },
    {
      name: 'Node.js & MongoDB',
      description: 'Backend robusto con base de datos NoSQL',
      icon: Zap,
    },
    {
      name: 'AWS Cloud',
      description: 'Infraestructura escalable y segura en la nube',
      icon: Shield,
    },
  ];

  const features = [
    'Diseño responsivo optimizado para todos los dispositivos',
    'Sistema de gestión de contenidos (CMS) personalizado',
    'Optimización SEO para mejorar posicionamiento',
    'Integración con sistemas de gestión académica',
    'Panel administrativo intuitivo',
    'Carga rápida y rendimiento optimizado',
    'Accesibilidad WCAG 2.1 nivel AA',
    'Sistema de analíticas y métricas',
  ];

  const stats = [
    { label: 'Mejora en Rendimiento', value: '95%' },
    { label: 'Tiempo de Carga', value: '< 2s' },
    { label: 'Score Lighthouse', value: '98/100' },
    { label: 'Usuarios Activos', value: '+10K' },
  ];

  return (
    <div className="min-h-screen bg-metal-950">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 glass-premium border-b border-white/10"
      >
        <div className="section-container py-4 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}
            className="inline-flex items-center space-x-2 text-white hover:text-metal-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Volver al portafolio</span>
          </a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="button-premium-outline flex items-center space-x-2"
          >
            <Globe className="w-4 h-4" />
            <span>Visitar sitio</span>
          </motion.a>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-metal-900 to-metal-950" />

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass-premium rounded-full border border-white/10 mb-6">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-metal-300">Proyecto Institucional</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6">
              <span className="block text-white">Universitaria de Bogotá</span>
              <span className="block gradient-text-premium">Sitio Web Institucional</span>
            </h1>

            <p className="text-xl text-metal-300 leading-relaxed mb-8">
              Desarrollo completo del nuevo sitio web institucional utilizando tecnologías de{' '}
              <span className="text-white font-semibold">alto impacto y valor moderno</span>. Una plataforma
              robusta, escalable y optimizada para brindar la mejor experiencia a estudiantes, docentes y
              personal administrativo.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-premium rounded-xl p-4 border border-white/10"
                >
                  <div className="text-3xl font-bold gradient-text-premium mb-1">{stat.value}</div>
                  <div className="text-sm text-metal-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden glass-premium border border-white/10 shadow-premium-lg"
          >
            <img
              src={images[0]}
              alt="Universitaria de Bogotá - Vista Principal"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-metal-950/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-metal-900/50" />
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
              Tecnologías <span className="gradient-text-premium">de Alto Impacto</span>
            </h2>
            <p className="text-xl text-metal-300 max-w-3xl mx-auto">
              Stack tecnológico moderno que garantiza rendimiento, escalabilidad y seguridad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-premium rounded-xl p-6 border border-white/10 card-hover-premium"
              >
                <div className="w-12 h-12 glass-premium rounded-lg flex items-center justify-center mb-4 border border-white/20">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-metal-400 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
              Características <span className="gradient-text-premium">Principales</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start space-x-3 glass-premium p-4 rounded-lg border border-white/10"
              >
                <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-metal-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-metal-900/50" />
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
              Galería de <span className="gradient-text-premium">Pantallas</span>
            </h2>
            <p className="text-xl text-metal-300">
              Explora las diferentes secciones del proyecto
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(image)}
                className="relative group cursor-pointer rounded-xl overflow-hidden glass-premium border border-white/10 card-hover-premium"
              >
                <img
                  src={image}
                  alt={`Captura ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-metal-950/0 group-hover:bg-metal-950/80 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-premium rounded-3xl p-12 border border-white/10 text-center"
          >
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              ¿Listo para tu <span className="gradient-text-premium">próximo proyecto</span>?
            </h2>
            <p className="text-xl text-metal-300 mb-8 max-w-2xl mx-auto">
              Transformemos tu visión en una plataforma digital de alto impacto
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = '';
                  setTimeout(() => { window.location.hash = 'contact'; }, 100);
                }}
                className="button-premium"
              >
                Iniciar proyecto
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = '';
                  setTimeout(() => {
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className="button-premium-outline"
              >
                Ver más proyectos
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-metal-950/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
        >
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="Vista ampliada"
            className="max-w-full max-h-[90vh] rounded-xl shadow-premium-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 w-12 h-12 glass-premium border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all"
          >
            ✕
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default UniversitariaProject;
