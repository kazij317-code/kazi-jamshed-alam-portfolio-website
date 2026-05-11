'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.skills-card', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
    });
  }, { scope: container });

  const frontendSkills = [
    { name: 'HTML5', expertise: 'Expert', level: 90 },
    { name: 'Next.js', expertise: 'Expert', level: 95 },
    { name: 'TypeScript', expertise: 'Expert', level: 88 },
    { name: 'Tailwind CSS', expertise: 'Intermediate', level: 85 },
    { name: 'JavaScript', expertise: 'Expert', level: 92 },
    { name: 'React.js', expertise: 'Expert', level: 93 },
  ];

  const backendSkills = [
    { name: 'Node.js', expertise: 'Expert', level: 90 },
    { name: 'SQL', expertise: 'Intermediate', level: 75 },
    { name: 'Express.js', expertise: 'Expert', level: 88 },
    { name: 'Docker', expertise: 'Intermediate', level: 80 },
    { name: 'MongoDB', expertise: 'Expert', level: 87 },
    { name: 'Kubernetes', expertise: 'Intermediate', level: 72 },
  ];

  const toolsSkills = [
    { name: 'Git', expertise: 'Expert', level: 95 },
    { name: 'GitHub', expertise: 'Expert', level: 93 },
    { name: 'VS Code', expertise: 'Expert', level: 92 },
    { name: 'Postman', expertise: 'Intermediate', level: 80 },
    { name: 'Figma', expertise: 'Intermediate', level: 75 },
    { name: 'Docker', expertise: 'Intermediate', level: 78 },
  ];

  return (
    <section 
      ref={container}
      className="py-24 px-6 bg-white/5" 
      id="skills"
    >
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-2">Skills</h2>
        <p className="text-gray-400 text-sm">My Technical Level</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Frontend */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="skills-card glass-card p-10 rounded-3xl glow-card"
        >
          <h3 className="text-xl font-bold text-white mb-8 text-center">Frontend Skills</h3>
          <div className="space-y-4">
            {frontendSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center text-sm text-white font-medium mb-2">
                  <span>{skill.name}</span>
                  <span className="text-xs text-gray-400 uppercase">{skill.expertise}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        {/* Backend */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="skills-card glass-card p-10 rounded-3xl glow-card"
        >
          <h3 className="text-xl font-bold text-white mb-8 text-center">Backend Skills</h3>
          <div className="space-y-4">
            {backendSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center text-sm text-white font-medium mb-2">
                  <span>{skill.name}</span>
                  <span className="text-xs text-gray-400 uppercase">{skill.expertise}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="skills-card glass-card p-10 rounded-3xl glow-card"
        >
          <h3 className="text-xl font-bold text-white mb-8 text-center">Tools Skills</h3>
          <div className="space-y-4">
            {toolsSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center text-sm text-white font-medium mb-2">
                  <span>{skill.name}</span>
                  <span className="text-xs text-gray-400 uppercase">{skill.expertise}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Skills;
