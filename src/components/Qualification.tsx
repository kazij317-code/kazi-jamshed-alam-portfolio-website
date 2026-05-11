'use client';

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  { 
    title: 'SSC', 
    subtitle: 'Cumilla High School', 
    date: '1995', 
    side: 'left' 
  },
  { 
    title: 'HSC', 
    subtitle: 'Cumilla Victoria Government College', 
    date: '1998', 
    side: 'right' 
  },
  { 
    title: 'B.Sc. (Honors) in Physics', 
    subtitle: 'Cumilla Victoria Government College', 
    date: '2004', 
    side: 'left' 
  },
];

const experienceData = [
  // { 
  //   title: 'Full Stack Developer', 
  //   subtitle: 'Tech Innovators Inc.', 
  //   date: '2024 - Present', 
  //   side: 'left' 
  // },
  // { 
  //   title: 'Frontend Intern', 
  //   subtitle: 'Web Craft Solutions', 
  //   date: '2023 - 2024', 
  //   side: 'right' 
  // },
  // { 
  //   title: 'Freelance Web Developer', 
  //   subtitle: 'Upwork / Fiverr', 
  //   date: '2021 - 2023', 
  //   side: 'left' 
  // },
  { 
    title: 'Executive-IT', 
    subtitle: 'Regional Passport Office, Narayanganj', 
    date: 'May 2018 - August 2025', 
    side: 'left' 
  },
  { 
    title: 'Supervisor', 
    subtitle: 'iPeople Ltd. [Associated with Malaysian based company IRIS JV]', 
    date: 'August 2014 - April 2018', 
    side: 'right' 
  },
  { 
    title: 'Supervisor', 
    subtitle: 'iPeople Ltd. (IRIS JV)', 
    date: 'July 2012 - February 2014', 
    side: 'left' 
  },
  { 
    title: 'Enrollment Executive', 
    subtitle: 'iPeople Ltd. (IRIS JV)', 
    date: 'April 2010 - June 2012', 
    side: 'right' 
  },
  { 
    title: 'Documentation Engineer', 
    subtitle: 'Speed Communication (Telecom & Network Engineering)', 
    date: 'April 2008 - February 2009', 
    side: 'left' 
  },
  { 
    title: 'Executive Officer', 
    subtitle: 'Sky-Land Computers', 
    date: 'January 2004 - January 2008', 
    side: 'right' 
  }
];

const Qualification = () => {
  const container = useRef(null);
  const [activeTab, setActiveTab] = useState('education');

useEffect(() => {
  const handleHashChange = () => {
    if (window.location.hash === '#experience') {
      setActiveTab('experience');

      setTimeout(() => {
        const section = document.getElementById('qualification');
        section?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }

    if (window.location.hash === '#education') {
      setActiveTab('education');

      setTimeout(() => {
        const section = document.getElementById('qualification');
        section?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  handleHashChange();

  window.addEventListener('hashchange', handleHashChange);

  return () => {
    window.removeEventListener('hashchange', handleHashChange);
  };
}, []);

  useGSAP(() => {
    gsap.from('.qual-item', {
      x: (i) => (i % 2 === 0 ? -50 : 50),
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
    });
  }, { scope: container, dependencies: [activeTab] });

  const currentData = activeTab === 'education' ? educationData : experienceData;

  return (
    <section 
      ref={container}
      className="py-24 px-6 bg-white/5" 
      id="qualification"
    >
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-2">Qualification</h2>
        <p className="text-gray-400 text-sm">My Personal Journey</p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center gap-12 mb-12">
          <button 
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 font-bold pb-2 transition-all duration-300 border-b-2 ${
              activeTab === 'education' 
                ? 'text-white border-accent-gold' 
                : 'text-gray-400 border-transparent hover:text-white'
            }`}
          >
            <i className="fas fa-graduation-cap"></i> Education
          </button>
          <button 
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 font-bold pb-2 transition-all duration-300 border-b-2 ${
              activeTab === 'experience' 
                ? 'text-white border-accent-gold' 
                : 'text-gray-400 border-transparent hover:text-white'
            }`}
          >
            <i className="fas fa-briefcase"></i> Experience
          </button>
        </div>

        {/* Timeline */}
        <div className="space-y-0 relative before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-white/30">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {currentData.map((item, index) => (
                <div 
                  key={index} 
                  className={`qual-item flex ${item.side === 'left' ? 'justify-start' : 'justify-end'} w-full mb-12 relative`}
                >
                  <div className={`w-1/2 ${item.side === 'left' ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-sm text-gray-300">{item.subtitle}</p>
                    <p className="text-xs text-accent-blue mt-2 font-medium">
                      <i className="far fa-calendar-alt mr-2"></i> {item.date}
                    </p>
                  </div>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-1 w-4 h-4 rounded-full bg-accent-gold border-4 border-dark-bg shadow-[0_0_10px_rgba(78,222,163,0.5)] z-10"></div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
