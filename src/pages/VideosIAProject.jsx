import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowLeft, Play, Film, Megaphone, Sparkles, CheckCircle2, Video, Clapperboard, X } from 'lucide-react';
import { getAssetPath } from '../utils/paths';

const VideosIAProject = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Cerrar modal con tecla ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && selectedVideo) {
        setSelectedVideo(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedVideo]);

  // Todos los videos en una sola galería
  const allVideos = [
    {
      title: 'FIVE X',
      thumbnail: getAssetPath('img/FIVE X.jpeg'),
      videoUrl: getAssetPath('img/FIVE X.mp4'),
      description: 'Mi primer video con IA - El proyecto que inició este viaje creativo',
      category: 'Destacado',
      featured: true,
    },
    {
      title: 'Película IA',
      thumbnail: getAssetPath('img/la carga.jpg'),
      videoUrl: getAssetPath('img/Pelicula iA.mp4'),
      description: 'Película generada completamente con inteligencia artificial',
      category: 'Cine con IA',
      isVertical: true,
    },
    {
      title: 'Video para Universidad - IA Interactiva',
      thumbnail: null, // Sin miniatura específica, usará el video
      videoUrl: getAssetPath('img/Video IA PARA UNIVERSIDAD 2.mp4'),
      description: 'IA que interactúa con la gente en una página web',
      category: 'Videos Promocionales',
    },
    {
      title: 'Campaña Universitaria de Bogotá',
      thumbnail: null, // Sin miniatura específica, usará el video
      videoUrl: getAssetPath('img/Video IA PARA UNIVERSIDAD.mp4'),
      description: 'Video promocional para campaña de la Universitaria de Bogotá',
      category: 'Videos Promocionales',
    },
    {
      title: 'Pinturas Tito Pabón - Concepto Refill',
      thumbnail: null, // Sin miniatura específica, usará el video
      videoUrl: getAssetPath('img/Videos promo.mp4'),
      description: 'Modelo 3D con concepto Refill de máquina de pintura que reduce la huella ambiental',
      category: 'Videos Promocionales',
    },
  ];

  const stats = [
    { label: 'Videos Producidos', value: '5' },
    { label: 'Proyectos IA', value: '4' },
    { label: 'Categorías', value: '2' },
    { label: 'Primer Video', value: 'FIVE X' },
  ];

  const technologies = [
    {
      name: 'IA Generativa',
      description: 'Herramientas de IA para generación de guiones',
      icon: Sparkles,
    },
    {
      name: 'Producción',
      description: 'Técnicas avanzadas de producción audiovisual',
      icon: Clapperboard,
    },
    {
      name: 'Edición',
      description: 'Software profesional de edición de video',
      icon: Video,
    },
    {
      name: 'Guion IA',
      description: 'Sistemas de generación de narrativas',
      icon: Film,
    },
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
            href="#galeria"
            className="button-premium-outline flex items-center space-x-2"
          >
            <Play className="w-4 h-4" />
            <span>Ver Galería</span>
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
              <Film className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-metal-300">Videos IA</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6">
              <span className="block text-white">Proyectos Audiovisuales</span>
              <span className="block gradient-text-premium">con Inteligencia Artificial</span>
            </h1>

            <p className="text-xl text-metal-300 leading-relaxed mb-8">
              Un viaje creativo que comenzó con{' '}
              <span className="text-white font-semibold">FIVE X</span>, mi primer video con IA,
              marcando el inicio de una nueva era en la producción audiovisual.
              He explorado el poder de la inteligencia artificial para crear desde{' '}
              <span className="text-white font-semibold">guiones cinematográficos completos</span> hasta{' '}
              <span className="text-white font-semibold">videos promocionales innovadores</span>,
              combinando narrativas únicas con tecnología de vanguardia.
              Cada proyecto representa un experimento en las infinitas posibilidades que ofrece la IA
              para revolucionar la forma en que contamos historias y creamos contenido visual impactante.
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
              Herramientas <span className="gradient-text-premium">y Tecnologías</span>
            </h2>
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

      {/* Video Gallery Section */}
      <section id="galeria" className="py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
              Galería de <span className="gradient-text-premium">Videos</span>
            </h2>
            <p className="text-xl text-metal-300">
              Explora mis proyectos audiovisuales creados con IA
            </p>
          </motion.div>

          {/* Video destacado FIVE X */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative group cursor-pointer rounded-2xl overflow-hidden glass-premium border-2 border-white/20 shadow-premium-lg">
              <div className="relative h-[500px]">
                <img
                  src={allVideos[0].thumbnail}
                  alt={allVideos[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-metal-950/90 via-metal-950/40 to-transparent" />

                {/* Badge Destacado */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="px-4 py-2 glass-premium border border-white/30 rounded-full text-sm font-bold text-white shadow-premium backdrop-blur-md">
                    ⭐ Video Destacado
                  </div>
                </div>

                {/* Play Button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  onClick={() => setSelectedVideo(allVideos[0])}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-24 h-24 glass-premium rounded-full flex items-center justify-center border-4 border-white/40 shadow-premium backdrop-blur-md group-hover:border-white/60 transition-all"
                  >
                    <Play className="w-12 h-12 text-white ml-2" fill="white" />
                  </motion.div>
                </motion.div>

                {/* Video Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <div className="mb-3">
                    <span className="px-3 py-1 glass-premium backdrop-blur-sm border border-white/20 rounded-full text-xs font-semibold text-white">
                      {allVideos[0].category}
                    </span>
                  </div>
                  <h3 className="text-4xl font-display font-bold text-white mb-3">
                    {allVideos[0].title}
                  </h3>
                  <p className="text-lg text-metal-200 max-w-2xl">
                    {allVideos[0].description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Otros videos en grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allVideos.slice(1).map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group cursor-pointer ${video.isVertical ? 'md:row-span-2' : ''}`}
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative rounded-xl overflow-hidden glass-premium border border-white/10 card-hover-premium h-full">
                  <div className={`relative ${video.isVertical ? 'h-[600px]' : 'h-80'}`}>
                    {video.thumbnail ? (
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <video
                        src={video.videoUrl}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        preload="metadata"
                        muted
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-metal-950/90 via-metal-950/30 to-transparent" />

                    {/* Play Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        className="w-20 h-20 glass-premium rounded-full flex items-center justify-center border-3 border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md"
                      >
                        <Play className="w-10 h-10 text-white ml-1" fill="white" />
                      </motion.div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 glass-premium backdrop-blur-sm border border-white/20 rounded-full text-xs font-semibold text-white">
                        {video.category}
                      </span>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-metal-100 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-metal-300 text-sm leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
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
              Capacidades <span className="gradient-text-premium">Completas con IA</span>
            </h2>
            <p className="text-xl text-metal-300 max-w-3xl mx-auto">
              Aprovecho el poder de la inteligencia artificial en cada etapa del proceso creativo,
              desde la conceptualización hasta la entrega final, transformando ideas en experiencias audiovisuales únicas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {[
              'Guiones cinematográficos generados con IA',
              'Storyboards automáticos y visualización previa',
              'Generación de personajes y escenarios con IA',
              'Producción audiovisual de alta calidad',
              'Edición inteligente con algoritmos avanzados',
              'Efectos visuales y animaciones con IA',
              'Color grading automático profesional',
              'Voiceover y síntesis de voz realista',
              'Música y soundscapes generativos',
              'Subtítulos y traducciones multiidioma',
              'Optimización para múltiples plataformas',
              'Formatos vertical, horizontal y cuadrado',
              'Videos promocionales para redes sociales',
              'Contenido personalizado por audiencia',
              'Análisis predictivo de engagement',
              'Iteración rápida con feedback de IA',
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="flex items-start space-x-3 glass-premium p-4 rounded-lg border border-white/10 hover:border-white/20 transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-metal-300 text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
              Mi Proceso <span className="gradient-text-premium">Creativo con IA</span>
            </h2>
            <p className="text-xl text-metal-300 max-w-3xl mx-auto">
              Un flujo de trabajo optimizado que combina creatividad humana con el poder de la inteligencia artificial
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '01',
                title: 'Concepto & Guion',
                description: 'Desarrollo de la idea inicial usando IA para generar guiones, narrativas y conceptos visuales únicos. Iteración rápida hasta lograr la historia perfecta.',
                icon: Film,
              },
              {
                step: '02',
                title: 'Producción & Creación',
                description: 'Generación de contenido visual, personajes, escenarios y elementos con herramientas de IA. Producción audiovisual con tecnología de vanguardia.',
                icon: Video,
              },
              {
                step: '03',
                title: 'Post-Producción & Entrega',
                description: 'Edición inteligente, efectos visuales, color grading y música con IA. Optimización para cada plataforma y formato de distribución.',
                icon: Sparkles,
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative glass-premium rounded-2xl p-8 border border-white/10 group card-hover-premium"
              >
                <div className="absolute top-6 right-6 text-7xl font-bold text-white/5 group-hover:text-white/10 transition-all">
                  {process.step}
                </div>

                <div className="relative">
                  <div className="w-16 h-16 glass-premium rounded-xl flex items-center justify-center mb-6 border border-white/20 group-hover:scale-110 transition-transform">
                    <process.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{process.title}</h3>
                  <p className="text-metal-300 leading-relaxed">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="glass-premium rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                El Poder de la IA en la Creación Audiovisual
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-metal-300">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">¿Por qué usar IA?</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                      <span>Reducción de tiempo de producción en un 70%</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                      <span>Posibilidades creativas ilimitadas</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                      <span>Iteración rápida y experimentación sin límites</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                      <span>Consistencia en estilo y calidad</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Resultados Comprobados</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                      <span>+5 proyectos completados con IA</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                      <span>100% de clientes satisfechos</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                      <span>Contenido viral en redes sociales</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                      <span>ROI aumentado en campañas digitales</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-metal-900/50" />
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-premium rounded-3xl p-12 border border-white/10 text-center"
          >
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              ¿Interesado en <span className="gradient-text-premium">videos con IA</span>?
            </h2>
            <p className="text-xl text-metal-300 mb-8 max-w-2xl mx-auto">
              Descubre el futuro de la creación de contenido audiovisual
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                onClick={(e) => { e.preventDefault(); window.location.hash = '#contact'; }}
                className="button-premium"
              >
                Contactar
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}
                className="button-premium-outline"
              >
                Ver más proyectos
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-metal-950/98 backdrop-blur-xl z-[9999] flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative w-full max-w-7xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Mejorado */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedVideo(null);
              }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute -top-14 right-0 w-14 h-14 bg-red-500/90 hover:bg-red-600 border-2 border-white/30 rounded-full flex items-center justify-center text-white transition-all z-[10000] shadow-lg"
              style={{ cursor: 'pointer' }}
            >
              <X className="w-7 h-7" strokeWidth={3} />
            </motion.button>

            {/* Video Info Header */}
            <div className="glass-premium border border-white/10 rounded-t-2xl p-6 mb-0">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className="px-3 py-1 glass-premium border border-white/20 rounded-full text-xs font-semibold text-white mb-3 inline-block">
                    {selectedVideo.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedVideo.title}</h3>
                  <p className="text-metal-300">{selectedVideo.description}</p>
                </div>
                {/* Close button alternativo dentro del header */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedVideo(null);
                  }}
                  className="ml-4 w-10 h-10 glass-premium border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-red-500/20 hover:border-red-500/50 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Player */}
            <div className="relative rounded-b-2xl overflow-hidden shadow-premium-lg bg-black">
              <video
                className="w-full h-auto"
                controls
                autoPlay
                controlsList="nodownload"
                style={{ maxHeight: '75vh' }}
                onClick={(e) => e.stopPropagation()}
              >
                <source src={selectedVideo.videoUrl} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </motion.div>

          {/* Instrucción para cerrar */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-white/60 text-sm">
              Presiona <kbd className="px-2 py-1 bg-white/10 rounded border border-white/20">ESC</kbd> o haz clic fuera del video para cerrar
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default VideosIAProject;
