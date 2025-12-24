import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Eye, Star } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: 'Plataforma Corporativa SaaS',
      description:
        'Sistema completo de gestión empresarial con arquitectura microservicios, autenticación avanzada y controles de seguridad ISO 27001.',
      image: '/img/banner.jpg',
      tags: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
      category: 'Full Stack',
      github: '#',
      live: '#',
      featured: true,
    },
    {
      title: 'Dashboard Analítica en Tiempo Real',
      description:
        'Dashboard interactivo con visualizaciones de datos en tiempo real, WebSockets y optimización de rendimiento.',
      image: '/img/perfil.png',
      tags: ['Next.js', 'D3.js', 'Socket.io', 'Redis'],
      category: 'Frontend',
      github: '#',
      live: '#',
      featured: true,
    },
    {
      title: 'Sistema de Gestión de Seguridad',
      description:
        'Plataforma de auditoría y gestión de controles de seguridad con reportes automatizados y seguimiento de vulnerabilidades.',
      image: '/img/footer.jpg',
      tags: ['Python', 'Django', 'PostgreSQL', 'Celery'],
      category: 'Security',
      github: '#',
      live: '#',
      featured: false,
    },
    {
      title: 'E-Commerce Premium',
      description:
        'Tienda online de alto rendimiento con pasarela de pagos, gestión de inventario y panel administrativo completo.',
      image: '/img/image.png',
      tags: ['React', 'Stripe', 'MongoDB', 'Express'],
      category: 'Full Stack',
      github: '#',
      live: '#',
      featured: false,
    },
    {
      title: 'Aplicación Móvil FinTech',
      description:
        'App móvil de gestión financiera personal con sincronización bancaria y análisis predictivo de gastos.',
      image: '/img/banner.jpg',
      tags: ['React Native', 'TypeScript', 'Firebase'],
      category: 'Mobile',
      github: '#',
      live: '#',
      featured: true,
    },
    {
      title: 'Sistema de Design System',
      description:
        'Librería de componentes reutilizables con documentación completa y playground interactivo.',
      image: '/img/perfil.png',
      tags: ['React', 'Storybook', 'Tailwind', 'TypeScript'],
      category: 'UI/UX',
      github: '#',
      live: '#',
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="projects" className="relative py-8 md:py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-metal-950 via-metal-900 to-metal-950" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass-premium rounded-full border border-white/10 mb-6">
            <Star className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-metal-300">Portafolio</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-4">
            Proyectos <span className="gradient-text-premium">Destacados</span>
          </h2>
          <p className="text-xl text-metal-300 max-w-3xl mx-auto">
            Selección de trabajos híbridos — diseño, código y seguridad en cada proyecto
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`group relative ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative h-full glass-premium rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 card-hover-premium">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="px-3 py-1 glass-premium border border-white/20 rounded-full text-xs font-bold text-white shadow-premium">
                      Destacado
                    </div>
                  </div>
                )}

                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-metal-950 via-metal-950/50 to-transparent z-10" />

                  {/* Image */}
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Hover Overlay with Links */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-metal-950/80 backdrop-blur-sm z-20 flex items-center justify-center space-x-4"
                  >
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 glass-premium hover:bg-white/10 rounded-full border border-white/20 transition-all"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 glass-premium border border-white/20 hover:bg-white/10 rounded-full transition-all"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </motion.a>
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 glass-premium backdrop-blur-sm border border-white/20 rounded-full text-xs font-semibold text-white">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-metal-100 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-metal-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 glass-premium border border-white/10 rounded-full text-xs text-metal-300 hover:text-white hover:border-white/20 transition-all cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <div className="pt-2">
                    <a
                      href={project.live}
                      className="inline-flex items-center space-x-2 text-sm font-semibold text-white hover:text-metal-200 transition-colors group/link"
                    >
                      <Eye className="w-4 h-4 text-white" />
                      <span>Ver proyecto</span>
                      <ExternalLink className="w-3 h-3 text-white group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Bottom Glow Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center space-x-2 button-premium group"
          >
            <span>Ver todos los proyectos</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
