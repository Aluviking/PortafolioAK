import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Award, Calendar, Shield, Lock, BarChart3, Users } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const timeline = [
    {
      type: 'work',
      year: '2025 - Presente',
      title: 'Web Master & Marketing con Inteligencia Artificial',
      company: 'Universitaria de Colombia',
      description:
        'Gestión integral de infraestructura web, desarrollo de estrategias de marketing digital con IA, optimización SEO y creación de campañas publicitarias para aumentar visibilidad en buscadores.',
      icon: Briefcase,
      color: 'from-metal-700 to-metal-800',
      achievements: [
        'Optimización de sitio web institucional con IA',
        'Campañas digitales con aumento de 60% en visibilidad',
        'Implementación de estrategias SEO avanzadas',
      ],
    },
    {
      type: 'work',
      year: '2024 - 2025',
      title: 'Coordinador Web Master y Jefe de Ciberseguridad',
      company: 'Pinturas Tito Pabón',
      description:
        'Coordinación de infraestructura web corporativa y liderazgo del departamento de ciberseguridad. Implementación de protocolos de seguridad, gestión de servidores y optimización de plataformas digitales.',
      icon: Shield,
      color: 'from-metal-700 to-metal-800',
      achievements: [
        'Implementación de sistema de seguridad integral',
        'Reducción del 50% en incidentes de seguridad',
        'Modernización completa de infraestructura web',
      ],
    },
    {
      type: 'work',
      year: '2022 - 2023',
      title: 'Especialista en Marketing Digital y Desarrollo Web',
      company: 'Ecoleed',
      description:
        'Desarrollo de estrategias de marketing digital, creación de contenido para redes sociales, administración de sitios web y optimización SEO para campañas publicitarias.',
      icon: Briefcase,
      color: 'from-metal-700 to-metal-800',
      achievements: [
        'Aumento del 120% en tráfico web orgánico',
        'Desarrollo de campañas digitales con ROI superior al 180%',
        'Gestión integral de presencia digital de la marca',
      ],
    },
    {
      type: 'education',
      year: '2024',
      title: 'Scrum Fundamentals Certified',
      company: 'SCRUMstudy',
      description:
        'Certificación en metodologías ágiles Scrum, gestión de proyectos, roles y responsabilidades del equipo, sprints y ceremonias ágiles para desarrollo de software.',
      icon: GraduationCap,
      color: 'from-metal-700 to-metal-800',
    },
    {
      type: 'work',
      year: '2018 - Presente',
      title: 'Desarrollador Freelance',
      company: 'Proyectos Internacionales',
      description:
        'Desarrollo de soluciones web y móviles para clientes en América Latina y Europa. Especialización en React, Node.js y diseño UI/UX.',
      icon: Briefcase,
      color: 'from-metal-700 to-metal-800',
      achievements: [
        '+50 proyectos completados exitosamente',
        'Clientes en 8 países diferentes',
        'Rating promedio 4.9/5.0',
      ],
    },
    {
      type: 'education',
      year: '2017 - 2024',
      title: 'Historia del Arte',
      company: 'Universidad Autónoma de México',
      description:
        'Formación integral en historia del arte, teoría estética, análisis de obras y movimientos artísticos. Investigación en arte contemporáneo y cultura visual.',
      icon: GraduationCap,
      color: 'from-metal-700 to-metal-800',
    },
  ];

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="experience" className="relative py-8 md:py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-metal-950">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-4">
            Experiencia <span className="gradient-text-premium">&amp; Trayectoria</span>
          </h2>
          <p className="text-xl text-metal-300 max-w-3xl mx-auto">
            Mi recorrido profesional combinando tecnología, seguridad y creatividad
          </p>
        </motion.div>

        {/* Timeline - Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={itemVariants}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              <div className="h-full">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-premium rounded-xl p-5 h-full border border-white/10 hover:border-white/20 transition-all duration-500 group card-hover-premium flex flex-col"
                >
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-lg blur-lg opacity-50`} />
                    <div className={`relative inline-flex p-3 bg-gradient-to-r ${item.color} rounded-lg shadow-lg`}>
                      <item.icon className="w-6 h-6 text-white drop-shadow-lg" />
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 bg-gradient-to-r ${item.color} rounded-full mb-3 shadow-lg self-start`}>
                    <Calendar className="w-3 h-3 text-white drop-shadow-md" />
                    <span className="text-xs font-bold text-white drop-shadow-md">{item.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  {/* Company */}
                  <p className="text-white text-sm font-semibold mb-2">{item.company}</p>

                  {/* Description */}
                  <p className="text-metal-300 text-sm leading-relaxed mb-3 flex-grow">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  {item.achievements && (
                    <div className="space-y-1.5 pt-3 border-t border-white/10">
                      {item.achievements.map((achievement, achIndex) => (
                        <div
                          key={achIndex}
                          className="flex items-start space-x-2 text-xs text-metal-300"
                        >
                          <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${item.color} mt-1.5 flex-shrink-0`} />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8"
        >
          <div className="glass-premium rounded-2xl p-6 lg:p-8 border border-white/10">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-center mb-6">
              Certificaciones <span className="gradient-text-premium">&amp; Reconocimientos</span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Certificación ISO 27001',
                  issuer: 'Certmind',
                  year: '2024',
                  icon: Shield,
                },
                {
                  name: 'Auditor Interno ISO 27001',
                  issuer: 'Certmind',
                  year: '2024',
                  icon: Lock,
                },
                {
                  name: 'Google Advanced Data Analytics',
                  issuer: 'Google - Coursera',
                  year: '2024',
                  icon: BarChart3,
                },
                {
                  name: 'Scrum Fundamentals Certified',
                  issuer: 'SCRUMstudy',
                  year: '2024',
                  icon: Users,
                },
                {
                  name: 'Diplomado en Ciberseguridad',
                  issuer: 'Universidad de la Sabana',
                  year: '2020 - 2023',
                  icon: GraduationCap,
                },
                {
                  name: 'Historia del Arte',
                  issuer: 'Universidad Autónoma de México',
                  year: '2017 - 2024',
                  icon: Award,
                },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-premium rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all text-center card-hover-premium"
                >
                  <cert.icon className="w-12 h-12 mx-auto mb-3 text-white" />
                  <h4 className="font-display font-bold text-white mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-metal-400 mb-1">{cert.issuer}</p>
                  <p className="text-xs text-white font-semibold">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
