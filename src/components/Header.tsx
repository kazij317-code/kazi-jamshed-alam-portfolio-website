'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' }, 
{ name: 'Experience', href: '#experience' },  
    // { name: 'Services', href: '#services' }, 
    { name: 'Projects', href: '#projects' },
    { name: 'Contact Me', href: '#contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full z-[100] px-4 md:px-6 py-4 transition-all duration-300">
      <nav 
        className={`max-w-6xl mx-auto flex items-center justify-between glass-card px-6 md:px-8 py-3 rounded-full transition-all duration-500 ${
          scrolled ? 'bg-dark-bg/90 py-2 scale-95 shadow-2xl border-accent-blue/20' : ''
        }`}
      >
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-white font-bold text-lg md:text-xl group flex items-center gap-2">
            <div className="w-10 h-10 relative overflow-hidden group-hover:scale-110 transition-transform">
              <img 
                src="/logo.jpg" 
                alt="KJA Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <li>
            <Link href="#home" className="text-accent-blue hover:opacity-80 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
              </svg>
            </Link>
          </li>
          {navLinks.map((link) => (
            <li key={link.name}>
              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <a
  href={link.href}
  className="hover:text-accent-blue transition-colors text-gray-200"
>
  {link.name}
</a>
              </motion.div>
            </li>
          ))}
          {/* <li className="relative group">
            <button className="hover:text-accent-blue transition-colors flex items-center text-gray-200">
              More <i className="fas fa-chevron-down ml-1 text-[10px]"></i>
            </button>
            <div className="absolute right-0 top-full mt-4 w-48 glass-card rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <Link href="#testimonials" className="block px-4 py-2 hover:bg-white/10 text-gray-200">Testimonials</Link>
              <Link href="#qualification" className="block px-4 py-2 hover:bg-white/10 text-gray-200">Qualification</Link>
            </div>
          </li> */}
        </ul>

        {/* Hamburger Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[110]"
          aria-label="Toggle Menu"
        >
          <motion.span 
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white rounded-full transition-transform"
          />
          <motion.span 
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white rounded-full transition-opacity"
          />
          <motion.span 
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white rounded-full transition-transform"
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[105] md:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-dark-bg/60 backdrop-blur-md" onClick={toggleMenu} />
            
            {/* Menu Content */}
            <div className="absolute right-0 top-0 bottom-0 w-3/4 max-w-xs bg-dark-bg border-l border-white/10 p-12 flex flex-col shadow-2xl">
              <div className="mb-12">
                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Menu</span>
              </div>
              <ul className="flex flex-col gap-8 text-2xl font-bold">
                {[{ name: 'Home', href: '#home' }, ...navLinks].map((link, i) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <a
  href={link.href}
  onClick={toggleMenu}
  className="hover:text-accent-blue transition-colors text-white"
>
  {link.name}
</a>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-auto pt-12 border-t border-white/5">
                <p className="text-sm text-gray-500 mb-4">Connect</p>
                <div className="flex gap-4">
                  {['fab fa-github', 'fab fa-linkedin', 'fab fa-twitter'].map((icon) => (
                    <a key={icon} href="#" className="text-xl text-white/60 hover:text-white transition-colors">
                      <i className={icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
