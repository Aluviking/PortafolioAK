import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Compass, Palette, Shield, Code, Zap, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const pillars = [
    {
      icon: Compass,
      title: 'Infraestructura Web',
      description:
        'Liderazgo de proyectos integrales de construcción web con enfoque en seguridad cibernética, gestión de servidores e implementación de medidas avanzadas contra ataques.',
      color: 'from-metal-700 to-metal-800',
    },
    {
      icon: Palette,
      title: 'Dirección Creativa',
      description:
        'Creación de contenido para medios de comunicación, publicidad y diseño gráfico. Especializado en community management y campañas digitales optimizadas para SEO.',
      color: 'from-metal-700 to-metal-800',
    },
    {
      icon: Shield,
      title: 'Seguridad ISO 27001',
      description:
        'Cumplimiento de normativas ISO 27001, implementación de medidas avanzadas contra ataques cibernéticos y optimización del rendimiento web.',
      color: 'from-metal-700 to-metal-800',
    },
  ];

  const expertise = [
    { icon: Code, label: 'Clean Code', value: '95%' },
    { icon: Zap, label: 'Performance', value: '90%' },
    { icon: Users, label: 'Team Leadership', value: '88%' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="relative py-8 md:py-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-metal-950 via-metal-900 to-metal-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-4">
            Sobre <span className="gradient-text-premium">mí</span>
          </h2>
          <p className="text-xl text-metal-300 max-w-3xl mx-auto leading-relaxed">
            Director Creativo en Artes Visuales con experiencia sólida en construcción web,
            desarrollo de marcas y seguridad cibernética. Especializado en infraestructura web
            bajo normativas ISO 27001.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Card */}
              <div className="glass-premium rounded-2xl p-6 h-full border border-white/10 hover:border-white/20 transition-all duration-500 card-hover-premium">
                {/* Icon with Gradient Background */}
                <div className="relative mb-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${pillar.color} rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}
                  />
                  <div className={`relative inline-flex p-4 bg-gradient-to-r ${pillar.color} rounded-xl shadow-lg`}>
                    <pillar.icon className="w-8 h-8 text-white drop-shadow-lg" />
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-metal-300 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-white/40 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-premium rounded-2xl p-6 lg:p-8 border border-white/10"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-display font-bold">
                Experiencia que
                <span className="gradient-text-premium"> transforma</span>
              </h3>
              <p className="text-metal-300 leading-relaxed text-lg">
                Con 8 años liderando proyectos de infraestructura web y desarrollo
                de marcas, mi experiencia abarca desde la gestión de servidores hasta la
                creación de campañas digitales con alto impacto.
              </p>
              <p className="text-metal-300 leading-relaxed">
                Mi enfoque estratégico integra seguridad cibernética, marketing digital con
                inteligencia artificial y optimización SEO para aumentar la visibilidad en
                motores de búsqueda como Google.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  'Infraestructura Web',
                  'ISO 27001',
                  'Marketing Digital',
                  'SEO & SEM',
                  'Community Management',
                  'Gestión de Servidores',
                ].map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="px-4 py-2 glass-premium border border-white/10 rounded-full text-sm text-white hover:bg-white/5 hover:border-white/20 transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Right: Expertise Bars */}
            <div className="space-y-6">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.2 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 glass-premium rounded-lg border border-white/10">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-white">{item.label}</span>
                    </div>
                    <span className="text-white font-bold">{item.value}</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: item.value } : {}}
                      transition={{ duration: 1.5, delay: 0.8 + index * 0.2, ease: 'easeOut' }}
                      className="h-full bg-white rounded-full relative"
                    >
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-white blur-sm opacity-50" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
