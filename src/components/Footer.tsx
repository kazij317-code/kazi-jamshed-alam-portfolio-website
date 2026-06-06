'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  const socials = [
    { icon: 'fab fa-github', href: 'https://github.com/kazij317-code' },
    { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/kazi-jamshed-alam' },
    // { icon: 'fas fa-envelope', href: 'mailto:kazij317@gmail.com' },
    {
  icon: "fas fa-envelope",
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=kazij317@gmail.com"
}
  ];

  return (
    <footer id="footer" className="py-20 border-t border-white/10 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Kazi Jamshed Alam</h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Frontend Developer | MERN Stack Developer passionate about creating beautiful and functional web experiences.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a href="#about" className="hover:text-accent-gold transition-colors text-gray-400 hover:translate-x-1 inline-block">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-accent-gold transition-colors text-gray-400 hover:translate-x-1 inline-block">
                  Skills
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-accent-gold transition-colors text-gray-400 hover:translate-x-1 inline-block">
                  Education
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-accent-gold transition-colors text-gray-400 hover:translate-x-1 inline-block">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent-gold transition-colors text-gray-400 hover:translate-x-1 inline-block">
                  Projects
                </a>
              </li>
              {/* <li>
                <a href="#services" className="hover:text-accent-gold transition-colors text-gray-400 hover:translate-x-1 inline-block">
                  Services
                </a>
              </li> */}
              <li>
                <a href="#contact" className="hover:text-accent-gold transition-colors text-gray-400 hover:translate-x-1 inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Connect With Me</h3>
            <div className="flex items-center justify-between gap-4">
              {/* <div className="flex gap-6">
                {socials.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, color: '#22d3ee' }}
                    className="text-2xl text-white transition-colors"
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </div> */}

              {/* ---------------- */}
                <div className="flex gap-6">
  {socials.map((social, i) => (
    <motion.a
      key={i}
      href={social.href}
      target={social.href.startsWith("http") ? "_blank" : undefined}
      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
      whileHover={{ y: -5, color: "#22d3ee" }}
      className="text-2xl text-white transition-colors"
    >
      <i className={social.icon}></i>
    </motion.a>
  ))}
</div>

              {/* ----------------- */}

              <motion.a
                href="#home"
                whileHover={{ scale: 1.1, color: '#22d3ee' }}
                className="inline-flex items-center text-xs text-gray-400 cursor-pointer transition-colors group"
              >
                <motion.span
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex items-center gap-2"
                >
                  <i className="fa-solid fa-computer-mouse"></i>
                  <span>Scroll Up</span>
                  <i className="fas fa-arrow-up group-hover:text-accent-gold transition-colors"></i>
                </motion.span>
              </motion.a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 order-2 md:order-1">
            © {new Date().getFullYear()} Kazi Jamshed Alam. All rights reserved. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
