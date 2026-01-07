import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield, BarChart3, Users } from 'lucide-react';

const Hero = () => {
  const stats = [
    { value: '8', label: 'Años de Experiencia' },
    { value: '+50', label: 'Proyectos Completados' },
    { value: 'ISO 27001', label: 'Auditor Certificado' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        damping: 12,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-metal-950">
        {/* Gradient Orbs - More Subtle */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [45, 0, 45],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-4 py-2 glass-premium rounded-full border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-metal-300">Disponible para proyectos</span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                <span className="block text-white">Eric Alexander</span>
                <span className="block gradient-text-premium shadow-text-premium">
                  Castañeda Kelsy
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-metal-300 leading-relaxed max-w-xl"
            >
              <span className="text-white font-bold">Arquitecto Full-Stack</span> especializado en{' '}
              <span className="text-white font-semibold">Seguridad ISO 27001</span> +{' '}
              <span className="text-white font-semibold">Marketing con IA</span>.
              Combino desarrollo web de alto rendimiento con ciberseguridad empresarial
              y estrategias de growth impulsadas por inteligencia artificial.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="button-premium flex items-center space-x-2 group"
              >
                <span>Ver Proyectos</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="button-premium-outline flex items-center space-x-2 group"
              >
                <span>Contactar</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass-premium rounded-xl p-4 text-center card-hover-premium"
                >
                  <div className="text-2xl lg:text-3xl font-bold gradient-text-premium">
                    {stat.value}
                  </div>
                  <div className="text-xs lg:text-sm text-metal-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Certifications Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-4"
            >
              {[
                { name: 'ISO 27001 Auditor', org: 'Certmind', icon: Shield },
                { name: 'Google Analytics', org: 'Coursera', icon: BarChart3 },
                { name: 'Scrum Fundamentals', org: 'SCRUMstudy', icon: Users },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 glass-premium rounded-lg border border-white/20 flex items-center space-x-2 card-hover-premium"
                >
                  <cert.icon className="w-4 h-4 text-white" />
                  <div className="text-left">
                    <div className="text-xs font-bold text-white leading-tight">{cert.name}</div>
                    <div className="text-[10px] text-metal-400">{cert.org}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Profile Card */}
          <motion.div
            variants={itemVariants}
            animate={floatingAnimation}
            className="relative max-w-md mx-auto lg:max-w-lg"
          >
            <div className="relative glass-premium rounded-3xl p-6 border border-white/10 overflow-hidden group card-hover-premium">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Profile Image Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />

                <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-white/10">
                  <img
                    src="/img/perfil.png"
                    alt="Eric Alexander Castañeda Kelsy"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-metal-950/80 via-transparent to-transparent" />
                </div>
              </div>

              {/* Info Card */}
              <div className="relative mt-4 space-y-3">
                <div className="text-center">
                  <h3 className="text-xl font-display font-bold text-white">
                    Eric Alexander
                  </h3>
                  <p className="text-sm text-metal-400">Arquitecto Tecnológico</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {['UI/UX Design', 'Full Stack', 'Ciberseguridad', 'DevOps'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium glass-premium border border-white/10 rounded-full text-metal-300 hover:text-white hover:border-white/20 transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Location & Email */}
                <div className="pt-3 border-t border-white/10 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-metal-400">Ubicación:</span>
                    <span className="text-white font-medium">Bogotá, Colombia</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-metal-400">Email:</span>
                    <span className="text-white font-medium truncate ml-2">
                      kelseyartoficial@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
