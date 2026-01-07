import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Github, Linkedin, Palette, Phone } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kelseyartoficial@gmail.com',
      href: 'mailto:kelseyartoficial@gmail.com',
      color: 'from-metal-700 to-metal-800',
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Bogotá, Colombia',
      href: '#',
      color: 'from-metal-700 to-metal-800',
    },
    {
      icon: Phone,
      label: 'Disponibilidad',
      value: 'Lun - Vie, 9AM - 6PM',
      href: '#',
      color: 'from-metal-700 to-metal-800',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Aluviking', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/eric-castañeda-kelsy-1586142b3', label: 'LinkedIn' },
    { icon: Palette, href: 'https://www.artstation.com/kelseyart_oficial', label: 'ArtStation' },
    { icon: Mail, href: 'mailto:kelseyartoficial@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="relative py-8 md:py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-metal-950">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-white/5" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
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
            Hablemos de tu <span className="gradient-text-premium">Proyecto</span>
          </h2>
          <p className="text-xl text-metal-300 max-w-3xl mx-auto">
            ¿Tienes una idea? Conversemos sobre cómo puedo ayudarte a hacerla realidad
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-premium rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group card-hover-premium text-center"
                >
                  <div className="relative mb-4 mx-auto">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity`}
                    />
                    <div
                      className={`relative inline-flex p-4 bg-gradient-to-r ${info.color} rounded-lg shadow-lg`}
                    >
                      <info.icon className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-metal-400 mb-1">{info.label}</div>
                    <div className="font-semibold text-white text-sm">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <h4 className="text-lg font-display font-bold text-white mb-4">
                Sígueme en Redes
              </h4>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 glass-premium rounded-xl border border-white/10 hover:border-white/20 transition-all group"
                  >
                    <social.icon className="w-6 h-6 text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
