'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import { ResumeModal } from './About';
// import ResumeModal from './ResumeModal';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const container = useRef(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('.hero-reveal', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out',
    })
      .from('.hero-image', {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: 'expo.out',
      }, '-=0.5')
      .from('.floating-card', {
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.7)',
      }, '-=1');

    // Parallax effect on image
    gsap.to('.hero-image', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden"
      id="home"
    >
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-96 h-96 bg-accent-gold/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="mt-15 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Hero Content */}
        <div className="z-10">
          <span className="text-lg mb-2 block text-gray-300 hero-reveal">Hey, I'm</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 hero-reveal">
            Kazi <span className="text-accent-blue">Jamshed Alam</span>
            {/* 👋 */}
          </h1>
          {/* <h2 className="text-xl md:text-2xl text-accent-blue mb-8 hero-reveal">I am a Web Developer</h2> */}
          <h2 className="text-xl md:text-2xl text-[#36BCF7] mb-8 hero-reveal">I am a
            
  <img src="https://readme-typing-svg.herokuapp.com?color=36BCF7&size=30&left=true&vCenter=true&width=600&lines=Full+Stack+Web+Developer+(MERN Stack)"/>
  </h2>

          

          <div className="space-y-2 mb-10 text-gray-300 hero-reveal">
            <p className="flex items-center gap-2">
              {/* <i className="fas fa-lightbulb text-accent-blue"></i>  */}
              {/* Turning Ideas into Stunning Websites */}
              Building responsive and scalable web applications with React, Next.js, Node.js, Express, and MongoDB.
            </p>
            {/* <p className="flex items-center gap-2">
              <i className="fas fa-check-circle text-accent-blue"></i> Available for projects and collaborations
            </p> */}
          </div>
          <div className="flex flex-wrap gap-4 hero-reveal">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-accent-blue text-dark-bg font-bold px-8 py-3 rounded-lg hover:bg-white transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(78,222,163,0.3)]"
            >
              Say Hello <i className="far fa-paper-plane"></i>
            </motion.a>

            {/* <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf" 
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-8 py-3 rounded-xl transition-all"
            >
              Download Resume <i className="fas fa-file-download text-cyan-400"></i>
            </motion.a> */}

            <motion.button
                        onClick={() => {
                          setIsResumeOpen(true);
                          // Trigger download
                          const link = document.createElement('a');
                          link.href = '/resume.pdf';
                          link.download = '/resume.pdf';
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-8 py-3 rounded-xl transition-all cursor-pointer"
                      >
                        Resume <i className="fas fa-eye text-cyan-400"></i>
                        <i className="fas fa-file-download text-cyan-400"></i>
                      </motion.button>


            <div className="flex items-center gap-4 ml-2">
              {[
                { icon: 'fab fa-linkedin-in', href: 'https://linkedin.com/in/kazijamshedalam', color: 'text-cyan-400' },
                { icon: 'fab fa-github', href: 'https://github.com/kazij317-code', color: 'text-cyan-400' },
                // { icon: 'fab fa-twitter', href: 'https://twitter.com/kazijamshedalam' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.2)' }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center transition-colors"
                >
                  <i className={`${social.icon} ${social.color}`}></i>
                </motion.a>
              ))}
            </div>
          </div>
          <motion.a
            href="#footer"
            whileHover={{ scale: 1.1, color: '#22d3ee' }}
            className="mt-16 inline-flex items-center text-sm text-gray-400 cursor-pointer transition-colors"
          >
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center"
            >
              <i className="fas fa-mouse mr-2"></i> Scroll Down <i className="fas fa-arrow-down ml-1"></i>
            </motion.span>
          </motion.a>
        </div>

        {/* Hero Image/Visual */}
        <div className="relative flex justify-center items-center">
          {/* Main Portrait */}
          <div className="hero-image relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-white/10 p-2 overflow-hidden bg-gradient-to-br from-card-bg to-dark-bg shadow-2xl">
            <img
              alt="Kazi Jamshed Alam"
              // w-full h-full 
              className="object-cover rounded-full"
              src="/profile.jpg"
            />
          </div>

          {/* Floating Stats */}
          {/* <div className="floating-card absolute -right-4 top-10 glass-card p-4 rounded-2xl animate-float">
            <div className="flex items-center gap-3">
              <div className="bg-accent-gold/20 p-2 rounded-lg">
                <i className="fas fa-briefcase text-accent-gold"></i>
              </div>
              <div>
                <p className="text-white font-bold">150+</p>
                <p className="text-[10px] uppercase tracking-wider text-gray-300">Projects Finished</p>
              </div>
            </div>
          </div>

          <div className="floating-card absolute -left-10 top-1/2 glass-card p-4 rounded-2xl animate-float" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-3">
              <div className="bg-accent-blue/20 p-2 rounded-lg">
                <i className="fas fa-award text-accent-blue"></i>
              </div>
              <div>
                <p className="text-white font-bold">3+</p>
                <p className="text-[10px] uppercase tracking-wider text-gray-300">Years Exp.</p>
              </div>
            </div>
          </div>

          <div className="floating-card absolute bottom-10 right-0 glass-card p-4 rounded-2xl animate-float" style={{ animationDelay: '2s' }}>
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-lg">
                <i className="fas fa-headset text-white"></i>
              </div>
              <div>
                <p className="text-white font-bold">120+</p>
                <p className="text-[10px] uppercase tracking-wider text-gray-300">Problem Solving</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <ResumeModal
              isOpen={isResumeOpen} 
              onClose={() => setIsResumeOpen(false)} 
            />
    </section>
  );
};

export default Hero;
