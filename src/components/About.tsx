'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export const ResumeModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark-bg/80 backdrop-blur-md"
          />
          
          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl max-h-[85vh] bg-dark-bg border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex flex-col gap-4 bg-white/5 md:flex-row md:items-center md:justify-between">
              <h3 className="text-xl font-bold text-white">Curriculum Vitae</h3>
              <div className="flex items-center gap-3">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-cyan-400 text-dark-bg font-bold px-4 py-2 rounded-xl hover:bg-cyan-300 transition-colors"
                >
                  <i className="fas fa-download"></i>
                  Download Resume
                </a>
                <button 
                  onClick={onClose}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 text-white transition-colors"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 text-gray-300 custom-scrollbar">
              <div className="max-w-3xl mx-auto space-y-10">
                {/* Header Info */}
                <div className="text-center space-y-4">
                  <h1 className="text-4xl font-bold text-white uppercase tracking-tight">KAZI JAMSHED ALAM (MITHU)</h1>
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-accent-blue font-medium">
                    <span><i className="fas fa-envelope mr-2"></i>kazij317@gmail.com</span>
                    <span><i className="fas fa-phone-alt mr-2"></i>01712-736526</span>
                    <span><i className="fas fa-map-marker-alt mr-2"></i>Dhaka, Bangladesh</span>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Professional Summary */}
                <section>
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue text-sm">01</span>
                    Professional Summary
                  </h4>
                  <p className="leading-relaxed">
                    A dedicated IT professional and Web Developer with 15+ years of experience in technical support, network administration, and system operations. Recently transitioned into modern web development, specializing in building responsive and user-friendly web applications using technologies such as HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, and Firebase.
                    Skilled in both frontend and backend development, with a growing focus on full-stack applications, API integration, and modern UI/UX design. Combines strong problem-solving abilities with a passion for creating clean, efficient, and engaging digital experiences.
                  </p>
                </section>

                {/* Web Development Skills */}
                <section>
                  <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue text-sm">02</span>
                    Web Development Skills
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-white font-bold mb-2 text-xs uppercase tracking-widest text-accent-blue">Frontend</h5>
                        <p className="text-sm">HTML5, CSS3, JavaScript (ES6+), Tailwind CSS</p>
                      </div>
                      <div>
                        <h5 className="text-white font-bold mb-2 text-xs uppercase tracking-widest text-accent-blue">Frameworks/Libraries</h5>
                        <p className="text-sm">React.js, Next.js</p>
                      </div>
                      <div>
                        <h5 className="text-white font-bold mb-2 text-xs uppercase tracking-widest text-accent-blue">Backend & Database</h5>
                        <p className="text-sm">Node.js, Express.js, MongoDB, Firebase</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-white font-bold mb-2 text-xs uppercase tracking-widest text-accent-blue">Fundamentals</h5>
                        <p className="text-[11px] leading-relaxed">Variables, Data Types, Operators, Conditionals, Loops, Functions, Arrays, Objects, DOM Manipulation, Event Handling, JSON, API Concepts</p>
                      </div>
                      <div>
                        <h5 className="text-white font-bold mb-2 text-xs uppercase tracking-widest text-accent-blue">UI/UX & Tools</h5>
                        <p className="text-sm">Responsive Design, Modern UI, GSAP, Framer Motion, Git, GitHub, VS Code</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Work Experience */}
                <section>
                  <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue text-sm">03</span>
                    Work Experience
                  </h4>
                  <div className="space-y-8">
                    {[
                      {
                        role: 'Executive-IT',
                        company: 'Regional Passport Office, Narayanganj',
                        date: 'May 2018 - August 2025',
                        tasks: [
                          'Troubleshoot and resolve computer hardware, software, and system problems.',
                          'Monitor and maintain network performance.',
                          'Manage server operations and bio-enrollment devices.',
                          'Provide technical support via phone and email for passport-related issues.'
                        ]
                      },
                      {
                        role: 'Supervisor',
                        company: 'iPeople Ltd. [Associated with Malaysian based company IRIS JV]',
                        date: 'August 2014 - April 2018',
                        tasks: [
                          'Supervised Machine Readable Passport (MRP) project operations.',
                          'Managed office operations and administrative tasks.',
                          'Coordinated between staff and upper management.',
                          'Maintained files, documentation, and attendance records.'
                        ]
                      },
                      {
                        role: 'Supervisor',
                        company: 'iPeople Ltd. (IRIS JV)',
                        date: 'July 2012 - February 2014',
                        tasks: [
                          'Led daily operations for passport enrollment project in Comilla.',
                          'Monitored team performance and provided coaching.',
                          'Ensured compliance with policies and procedures.'
                        ]
                      },
                      {
                        role: 'Enrollment Executive',
                        company: 'iPeople Ltd. (IRIS JV)',
                        date: 'April 2010 - June 2012',
                        tasks: [
                          'Processed passport applications and collected fees.',
                          'Verified applicant identity and eligibility.',
                          'Managed digital records and documentation.'
                        ]
                      },
                      {
                        role: 'Documentation Engineer',
                        company: 'Speed Communication (Telecom & Network Engineering)',
                        date: 'April 2008 - February 2009',
                        tasks: [
                          'Developed, wrote, and edited technical documentation for complex telecom and network systems.',
                          'Collaborated with development, testing, and product management teams to ensure content accuracy.',
                          'Maintained all documentation to reflect the latest technical specifications and product updates.'
                        ]
                      },
                      {
                        role: 'Executive Officer',
                        company: 'Sky-Land Computers',
                        date: 'January 2004 - January 2008',
                        tasks: [
                          'Developed, implemented, and evaluated training programs to enhance student and employee skills.',
                          'Conducted training needs assessments to identify skill gaps and improve curriculum.',
                          'Created comprehensive instructional materials, presentations, and training documentation.'
                        ]
                      }
                    ].map((job, i) => (
                      <div key={i} className="relative pl-6 border-l border-accent-blue/30">
                        <div className="absolute w-3 h-3 bg-accent-blue rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(78,222,163,0.5)]" />
                        <h5 className="text-white font-bold">{job.role}</h5>
                        <p className="text-accent-blue text-sm mb-3">{job.company} | {job.date}</p>
                        <ul className="space-y-2 list-disc list-inside text-sm">
                          {job.tasks.map((task, j) => (
                            <li key={j}>{task}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Education */}
                <section>
                  <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue text-sm">04</span>
                    Education
                  </h4>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <h5 className="text-white font-bold text-sm">B.Sc. (Honors) in Physics</h5>
                      <p className="text-[10px] text-gray-400">Cumilla Victoria Government College-2004</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <h5 className="text-white font-bold text-sm">H.S.C</h5>
                        <p className="text-[10px] text-gray-400">Cumilla Victoria Government College-1998</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <h5 className="text-white font-bold text-sm">S.S.C</h5>
                        <p className="text-[10px] text-gray-400">Cumilla High School-1995</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Certifications */}
                <section>
                  <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue text-sm">05</span>
                    Certifications
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-accent-blue/5 border border-accent-blue/10">
                      <p className="text-xs text-white font-bold mb-1">(1) Oracle Database 11g: Administration Workshop</p>
                      <p className="text-[10px] text-accent-blue uppercase font-bold">Oracle University – Workforce Development</p>
                    </div>
                    <div className="p-4 rounded-xl bg-accent-blue/5 border border-accent-blue/10">
                      <p className="text-xs text-white font-bold mb-1">(2) Complete Web Development</p>
                      <p className="text-[10px] text-accent-blue uppercase font-bold">with Programming Hero</p>
                    </div>
                  </div>
                </section>

                {/* Personal Details */}
                <section>
                  <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue text-sm">06</span>
                    Personal Details
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[11px]">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <p className="text-gray-400 mb-1">Date of Birth</p>
                      <p className="text-white font-bold">June 8, 1980</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <p className="text-gray-400 mb-1">Nationality</p>
                      <p className="text-white font-bold">Bangladeshi</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <p className="text-gray-400 mb-1">Religion</p>
                      <p className="text-white font-bold">Islam</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <p className="text-gray-400 mb-1">Marital Status</p>
                      <p className="text-white font-bold">Married</p>
                    </div>
                  </div>
                </section>

                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Footer Signature */}
                <div className="text-center pt-10 pb-20">
                  <p className="text-sm italic text-gray-400 mb-8 max-w-lg mx-auto">
                    "I, the undersigned, certify that to the best of my knowledge and belief, this curriculum vitae correctly describes my qualifications, experience, and character."
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-1">Kazi Jamshed Alam</h3>
                  {/* <p className="text-xs text-accent-blue uppercase tracking-widest font-bold">Date: 10/01/2025</p> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const About = () => {
  const container = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useGSAP(() => {
    gsap.from('.about-reveal', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
    });
  }, { scope: container });

  const fullText = `I’m a passionate developer who enjoys turning ideas into real, interactive digital experiences. My programming journey started with curiosity—experimenting with basic HTML and CSS—and gradually grew into building full web applications using modern tools like React and Next.js. Along the way, I’ve learned not just how to write code, but how to think like a problem solver and continuously improve my skills.

            I especially enjoy working on frontend development, where I can combine logic with creativity to design smooth, user-friendly interfaces. Animations, clean UI design, and crafting engaging user experiences are the parts I find most exciting.

            Outside of programming, I like exploring new technologies, watching tech content, and sometimes relaxing with music or casual games. I’m someone who enjoys learning, building, and pushing myself to do better with every project I take on.`;

  const truncatedText = fullText.slice(0, 310);

  return (
    <section
      ref={container}
      className="py-24 px-6 bg-white/5"
      id="about"
    >
      <div className="max-w-4xl mx-auto text-center mb-16 about-reveal">
        <h2 className="text-3xl font-bold text-white mb-2">About</h2>
        <p className="text-gray-400 text-sm">My Introduction</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center about-reveal">
          <div className="w-64 h-80 rounded-3xl bg-card-bg overflow-hidden relative border border-white/20 shadow-xl group">
            <img
              alt="About Profile"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500"
              src="/profile.jpg"
            />
          </div>
        </div>
        <div className="space-y-8 about-reveal">
          {/* <div className="grid grid-cols-3 gap-4">
            {[
              { icon: 'fas fa-medal', label: 'Experience', sub: '3 Years Working' },
              { icon: 'fas fa-briefcase', label: 'Completed', sub: '150+ Projects' },
              { icon: 'fas fa-headset', label: 'Support', sub: 'Online 24/7' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="glass-card p-4 rounded-xl text-center"
              >
                <i className={`${stat.icon} text-accent-blue mb-2`}></i>
                <h4 className="text-white text-sm font-bold">{stat.label}</h4>
                <p className="text-xs text-gray-300">{stat.sub}</p>
              </motion.div>
            ))}
          </div> */}
          <div className="text-gray-300 leading-relaxed text-lg">
            <p className="inline whitespace-pre-line">
              {isExpanded ? fullText : `${truncatedText}... `}
            </p>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-white font-bold hover:text-accent-blue transition-colors cursor-pointer inline ml-1"
            >
              {isExpanded ? 'Read less.' : 'Read more.'}
            </button>
          </div>
          {/* <motion.button
            onClick={() => setIsResumeOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-8 py-3 rounded-xl transition-all cursor-pointer"
          >
            View Resume <i className="fas fa-eye"></i>
          </motion.button> */}
        </div>
      </div>

      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </section>
  );
};

export default About;
