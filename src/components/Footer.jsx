import { motion } from 'framer-motion';
import { Code2, Heart, Github, Linkedin, Mail, Palette, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    {
      title: 'Navegación',
      links: [
        { name: 'Inicio', href: '#home' },
        { name: 'Sobre mí', href: '#about' },
        { name: 'Habilidades', href: '#skills' },
        { name: 'Proyectos', href: '#projects' },
        { name: 'Experiencia', href: '#experience' },
        { name: 'Contacto', href: '#contact' },
      ],
    },
    {
      title: 'Expertise',
      links: [
        { name: 'Desarrollo Full-Stack', href: '#skills' },
        { name: 'Seguridad ISO 27001', href: '#experience' },
        { name: 'Marketing con IA', href: '#about' },
        { name: 'Auditoría & Consultoría', href: '#experience' },
      ],
    },
    {
      title: 'Conecta',
      links: [
        { name: 'GitHub', href: 'https://github.com' },
        { name: 'LinkedIn', href: 'https://linkedin.com' },
        { name: 'ArtStation', href: 'https://www.artstation.com' },
        { name: 'Email', href: 'mailto:kelseyartoficial@gmail.com' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Palette, href: 'https://www.artstation.com', label: 'ArtStation' },
    { icon: Mail, href: 'mailto:kelseyartoficial@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative bg-metal-950 border-t border-white/10 overflow-hidden">
      {/* Fondo Llamativo con Gradientes y Efectos */}
      <div className="absolute inset-0">
        {/* Gradiente Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-metal-900 via-metal-950 to-metal-900" />

        {/* Círculos de Luz Animados */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />

        {/* Patrón de Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]" />

        {/* Gradiente Superior para Transición Suave */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="section-container relative z-10">
        {/* Main Footer Content - Centrado */}
        <div className="py-8 border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.a
                href="#home"
                whileHover={{ scale: 1.02 }}
                className="inline-flex flex-col items-center space-y-3"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-lg blur-xl opacity-50" />
                  <div className="relative glass-premium p-3 rounded-lg border border-white/10">
                    <img
                      src="/img/logo.png"
                      alt="Logo"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold gradient-text-premium">
                    Eric Alexander Castañeda Kelsy
                  </h3>
                  <p className="text-base text-metal-400 mt-1">Arquitecto Tecnológico</p>
                </div>
              </motion.a>

              <p className="text-base text-metal-300 leading-relaxed max-w-2xl mx-auto mt-4">
                Construyendo el futuro digital con código limpio, diseño elegante y
                seguridad robusta. Transformando ideas en productos excepcionales.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 glass-premium rounded-lg border border-white/10 hover:border-white/20 transition-all group"
                >
                  <social.icon className="w-5 h-5 text-white transition-colors" />
                </motion.a>
              ))}
            </motion.div>

            {/* Links Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-6"
            >
              {footerLinks.map((section, index) => (
                <div key={index}>
                  <h4 className="font-display font-bold text-white mb-3 text-base">
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="text-metal-300 hover:text-white transition-colors duration-300 text-sm inline-flex items-center group"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {link.name}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="text-metal-300 text-sm text-center">
            <p className="flex items-center justify-center space-x-2 flex-wrap">
              <span>© 2025 Eric Alexander Castañeda Kelsy</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <span>Hecho con</span>
                <Heart className="w-4 h-4 text-white fill-white" />
                <span>y</span>
                <Code2 className="w-4 h-4 text-white" />
              </span>
            </p>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-white text-metal-950 rounded-lg hover:shadow-premium transition-all group"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
