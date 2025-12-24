import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2,
  Palette,
  Database,
  Cloud,
  Shield,
  Smartphone,
  Terminal,
  GitBranch,
  Package,
  Layout,
  Server,
  Folder,
  FileCode,
  Container,
  Layers,
  Box,
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      name: 'Frontend Development',
      skills: [
        { name: 'React & Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML/CSS', level: 98 },
      ],
      icon: Code2,
      color: 'from-metal-700 to-metal-800',
    },
    {
      name: 'Backend Development',
      skills: [
        { name: 'Node.js & Express', level: 88 },
        { name: 'Python & Django', level: 85 },
        { name: 'REST APIs', level: 92 },
        { name: 'GraphQL', level: 80 },
      ],
      icon: Terminal,
      color: 'from-metal-700 to-metal-800',
    },
    {
      name: 'Database & Cloud',
      skills: [
        { name: 'PostgreSQL & MongoDB', level: 87 },
        { name: 'AWS & Azure', level: 82 },
        { name: 'Docker & Kubernetes', level: 85 },
        { name: 'CI/CD Pipelines', level: 88 },
      ],
      icon: Cloud,
      color: 'from-metal-700 to-metal-800',
    },
    {
      name: 'Design & Security',
      skills: [
        { name: 'UI/UX Design', level: 90 },
        { name: 'Figma & Adobe XD', level: 92 },
        { name: 'Penetration Testing', level: 88 },
        { name: 'ISO 27001', level: 85 },
      ],
      icon: Shield,
      color: 'from-metal-700 to-metal-800',
    },
  ];

  const tools = [
    { name: 'React', icon: Code2 },
    { name: 'TypeScript', icon: FileCode },
    { name: 'Node.js', icon: Server },
    { name: 'Python', icon: Terminal },
    { name: 'AWS', icon: Cloud },
    { name: 'Docker', icon: Container },
    { name: 'Git', icon: GitBranch },
    { name: 'Figma', icon: Layout },
    { name: 'PostgreSQL', icon: Database },
    { name: 'MongoDB', icon: Database },
    { name: 'Tailwind', icon: Palette },
    { name: 'Next.js', icon: Layers },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    <section id="skills" className="relative py-8 md:py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-metal-950">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
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
            Habilidades <span className="gradient-text-premium">&amp; Expertise</span>
          </h2>
          <p className="text-xl text-metal-300 max-w-3xl mx-auto">
            Stack tecnológico completo — desde diseño visual hasta arquitectura de
            sistemas seguros
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-premium rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 group card-hover-premium"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity`}
                  />
                  <div
                    className={`relative p-3 bg-gradient-to-r ${category.color} rounded-lg shadow-lg`}
                  >
                    <category.icon className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  {category.name}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-metal-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-white">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.5,
                          delay: 0.5 + catIndex * 0.2 + skillIndex * 0.1,
                          ease: 'easeOut',
                        }}
                        className="h-full bg-white rounded-full relative overflow-hidden"
                      >
                        {/* Animated Shine Effect */}
                        <motion.div
                          animate={{
                            x: ['-100%', '200%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: 'easeInOut',
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-premium rounded-2xl p-6 lg:p-8 border border-white/10"
        >
          <h3 className="text-2xl lg:text-3xl font-display font-bold text-center mb-6">
            Herramientas <span className="gradient-text-premium">&amp; Tecnologías</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative"
              >
                <div className="glass-premium rounded-xl p-6 text-center border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer card-hover-premium">
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 rounded-xl transition-all duration-300" />

                  <div className="relative">
                    <tool.icon className="w-8 h-8 mx-auto mb-2 text-white transition-colors" />
                    <div className="text-xs font-medium text-metal-400 group-hover:text-white transition-colors">
                      {tool.name}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center space-x-3 px-6 py-3 glass-premium rounded-full border border-white/10">
            <Shield className="w-5 h-5 text-white" />
            <span className="text-sm font-medium text-metal-300">
              Certificado:{' '}
              <span className="text-white font-bold">
                ISO 27001 Lead Auditor
              </span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
