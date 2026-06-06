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
                  <h1 className="text-2xl font-bold text-white tracking-tight">Frontend Developer | MERN Stack Developer</h1>
                  <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-accent-blue font-medium">
                    
                    
                    <span><i className="fas fa-map-marker-alt mr-2"></i>Dhaka, Bangladesh</span>
                    <div className="h-6 w-px bg-white/20" />
                    
                    <a href="tel:+8801712736526" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline underline">
                      <span><i className="fas fa-phone-alt mr-2"></i>01712-736526</span>
                    </a>
                    <div className="h-6 w-px bg-white/20" />
                    
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kazij317@gmail.com" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline underline">
                      <span><i className="fas fa-envelope mr-2"></i>kazij317@gmail.com</span>
                    </a>
                    
                    <div className="h-6 w-px bg-white/20" />
                    <a href="https://linkedin.com/in/kazijamshedalam" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">
                      LinkedIn
                    </a>
                    <div className="h-6 w-px bg-white/20" />
                    
                    <a href="https://github.com/kazij317-code" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">
                     GitHub
                    </a>
                    <div className="h-6 w-px bg-white/20" />
                    
                    <a href="https://kazi-jamshed-alam-portfolio-website.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">
                     Portfolio
                    </a>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Professional Summary */}
                <section>
                  {/* <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue text-sm">01</span>
                    Professional Summary
                  </h4> */}
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue text-sm">01</span>
                    CAREER OBJECTIVE
                  </h4>
                  <p className="leading-relaxed">
                    {/* Motivated Junior Full Stack Web Developer with hands-on experience in MERN stack development and building responsive web applications. Transitioned from IT support to software development with strong problem-solving skills and a passion for modern web technologies. */}

                    Frontend Developer with hands-on experience building responsive web applications using React.js, Next.js, and the MERN stack. Skilled in REST API integration, authentication, dashboard development, and creating reusable, user-friendly UI components. Strong problem-solver with an IT support background, passionate about modern web technologies, performance optimization, and delivering high-quality software solutions.
                  </p>
                </section>

                {/* Web Development Skills */}
                <section>
                    <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue text-sm">02</span>
                    TECHNICAL SKILLS
                    </h4>
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                    <div className="space-y-4 ml-6">
                        <p className="mb-3">
                          <span className="font-bold">Frontend:</span>{" "}
                          <span className="text-sm">React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, React Router, Context API</span>
                        </p>
                        <p className="mb-3">
                          <span className="font-bold">UI & Styling:</span>{" "}
                          <span className="text-sm">Tailwind CSS, DaisyUI, HeroUI, Framer Motion, Responsive Design, Accessibility, SEO Basics</span>
                        </p>
                        <p className="mb-3">
                          <span className="font-bold">Forms & Data:</span>{" "}
                          <span className="text-sm">Axios, Fetch API, React Hook Form, Pagination, Filtering, Search, Protected Routes, Error Handling</span>
                        </p>

                        <p className="mb-3">
                          <span className="font-bold">Backend & Database:</span>{" "}
                          <span className="text-sm">Node.js, Express.js, MongoDB, REST APIs, CRUD Operations, JWT, Better Auth,  Server-side Validation</span>
                        </p>
                        <p className="mb-3">
                          <span className="font-bold">Tools & Deployment:</span>{" "}
                          <span className="text-sm">Git, GitHub, Vite, npm, Chrome DevTools, Figma, Vercel, Netlify, VS Code</span>
                        </p>
                        <p className="mb-3">
                          <span className="font-bold">AI Tools:</span>{" "}
                          <span className="text-sm">ChatGPT, Gemini, GitHub Copilot, Cursor, AI-assisted Debugging, Documentation, Test-case Generation</span>
                        </p>                        
                        <p className="mb-3">
                          <span className="font-bold">Soft Skills:</span>{" "}
                          <span className="text-sm">Problem Solving, Self-learning, Technical Documentation, Team Collaboration, Communication</span>
                        </p>                        
                    </div>
                  </div>
                    
                </section>

                {/* Practical Experience */}
                <section>
                  <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue text-sm">03</span>
                    PRACTICAL EXPERIENCE
                  </h4>
                  <div className="space-y-8">
                    {[
                      {
                        role: 'MERN Stack Developer Trainee - Programming Hero / Self-Led Projects Dec 2025 - Present',
                        // company: 'Regional Passport Office, Narayanganj',
                        // date: 'May 2018 - August 2025',
                        tasks: [
                          'Completed 800+ hours of project-based learning across JavaScript, React, Next.js, Node.js, Express.js, MongoDB, authentication, API integration, deployment, debugging and Git workflow.',
                          'Built and deployed 12+ frontend/full-stack projects with mobile-first layouts, reusable components, protected routes, REST API integration, clean README files, and version-controlled commits.',
                          'Used AI tools as coding assistants for requirement breakdown, bug tracing, refactoring ideas, documentation drafts, and interview preparation while manually reviewing generated code before use.',
                        ]
                      }
                      
                    ].map((job, i) => (
                      <div key={i} className="pl-6">
                        <div className="absolute w-3 h-3 bg-accent-blue rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(78,222,163,0.5)]" />
                        <h5 className="text-white font-bold">{job.role}</h5>
                        {/* <p className="text-accent-blue text-sm mb-3">{job.company} | {job.date}</p> */}
                        <ul className="space-y-2 list-disc list-inside text-sm">
                          {job.tasks.map((task, j) => (
                            <li key={j}>{task}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  
                </section>
                {/* Projects */}
                <section>
                  <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue text-sm">04</span>
                    PROJECTS
                  </h4>
                  <div className="space-y-8">
                    {[
                      {
                        name: '1. Idea Vault | Full Stack Idea Management Platform',                        
                        // overview: 'A full-stack collaborative idea-sharing platform where users can create, manage, and interact with innovative ideas.',
                        live: 'https://idea-vault-client-pi.vercel.app',
                        client: 'https://github.com/kazij317-code/IdeaVault-client',
                        server: 'https://github.com/kazij317-code/IdeaVault-server',
                        features: 'Next.js, React.js, Tailwind CSS, HeroUI, JWT with Better Auth, Node.js, Express.js, MongoDB',
                        tasks: [
                          'Developed a secure idea management platform with CRUD operations, search, and category filtering.',
                          'Implemented Better Auth, JWT authorization, protected routes, and user-specific data access.',
                          'Built a responsive UI with comments, modern design, and seamless cross-device experience.',                          
                        ]
                      },
                      {
                        name: '2. Qurbani Hat | Online Livestock Marketplace',                        
                        // overview: 'Online cattle marketplace platform for buying and selling sacrificial animals with secure user interaction.',
                        live: 'https://qurbani-hat-my-assignment.vercel.app',
                        client: 'https://github.com/kazij317-code/qurbani-hat-my-assignment',
                        server: 'NA',
                        features: 'Next.js, React.js, Tailwind CSS, DaisyUI, Better Auth',
                        tasks: [
                          'Developed a full-stack livestock marketplace with animal browsing, listing, and management features.',
                          'Implemented authentication, protected routes, role-based access control.',
                          'Built a responsive UI with search, filtering, and seamless user experience across devices.',                          
                        ]
                      },
                      {
                        name: '3. Keen Keeper | Task Management Application',                        
                        // overview: 'Online cattle marketplace platform for buying and selling sacrificial animals with secure user interaction.',
                        live: 'https://kazij317-code.github.io/B13-A7-keen-keeper/',
                        client: 'https://github.com/kazij317-code/B13-A7-keen-keeper',
                        server: 'NA',
                        features: 'HTML5, CSS3, JavaScript (ES6+), Tailwind CSS, DaisyUI',
                        tasks: [
                          'Built a responsive task management application for creating, organizing, and tracking daily tasks.',
                          'Developed interactive UI components and real-time task updates using JavaScript DOM manipulation.',
                          'Optimized user experience with a mobile-first design, responsive layouts, and fast-loading frontend architecture.',                          
                        ]
                      }
                      
                    ].map((job, i) => (
                      <div key={i} className="relative pl-6 border-l border-accent-blue/30">
                        <div className="absolute w-3 h-3 bg-accent-blue rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(78,222,163,0.5)]" />
                        <h5 className="text-accent-blue text-lg font-bold mb-3">{job.name}</h5>
                       
                        {/* <p className="font-bold mb-1">Overview:</p> */}
                        {/* <p className="text-sm mb-3">{job.overview}</p> */}
                        {/* <p className="mb-3">
                          <span className="font-bold">Live:</span>{" "}
                          <span className="text-sm">{job.live}</span>
                        </p>
                        <p className="mb-3">
                          <span className="font-bold">Github (client):</span>{" "}
                          <span className="text-sm">{job.client}</span>
                        </p>
                        <p className="mb-3">
                          <span className="font-bold">Github (server):</span>{" "}
                          <span className="text-sm">{job.server}</span>
                        </p> */}
                        {/* ---------------- */}
                          <p className="mb-3 text-sm">
  <a
    href={job.live}
    target="_blank"
    rel="noopener noreferrer"
    className="text-accent-blue hover:underline"
  >
    Live
  </a>

  {job.client && (
    <>
      {" | "}
      <a
        href={job.client}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent-blue hover:underline"
      >
        GitHub (Client)
      </a>
    </>
  )}

  {job.server !== "NA" && (
    <>
      {" | "}
      <a
        href={job.server}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent-blue hover:underline"
      >
        GitHub (Server)
      </a>
    </>
  )}
</p>

                        {/* ------------------ */}
                        <p className="mb-3">
                          <span className="font-bold">Tech Stack:</span>{" "}
                          <span className="text-sm">{job.features}</span>
                        </p>
                                                                                        
                        {/* <p className="font-bold mb-3">{job.features}</p> */}
                        <ul className="space-y-2 list-disc list-inside text-sm">
                          {job.tasks.map((task, j) => (
                            <li key={j}>{task}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  
                </section>
                {/* Work Experience */}
                {/* <section>
                  <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue text-sm">05</span>
                    PROFESSIONAL EXPERIENCE
                  </h4>
                  <div className="space-y-8">
                    {[
                      {
                        role: 'Executive-IT',
                        company: 'Regional Passport Office, Narayanganj',
                        date: 'May 2018 - August 2025',
                        tasks: [
                          'Managed IT infrastructure and provided technical support for end users.',
                          'Diagnosed and resolved hardware, software, and network-related issues.',
                          'Maintained system reliability, user accounts, and biometric enrollment operations.',
                        ]
                      }
                      
                    ].map((job, i) => (
                      <div key={i} className="pl-6">
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
                  
                </section> */}
                                <section>
                                  <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue text-sm">05</span>
                                    PROFESSIONAL EXPERIENCE
                                  </h4>
                                  <div className="space-y-8">
                                    {[
                                      {
                                        role: 'Executive-IT',
                                        company: 'Regional Passport Office, Narayanganj',
                                        date: 'May 2018 - August 2025',
                                        tasks: [
                                          'Managed IT infrastructure, server operations, biometric systems, and technical support.',
                                          'Resolved hardware, software, network, and user account issues while maintaining system reliability.',
                                          // 'Manage server operations and bio-enrollment devices.',
                                          // 'Provide technical support via phone and email for passport-related issues.'
                                        ]
                                      },
                                      {
                                        role: 'Supervisor',
                                        company: 'iPeople Ltd. [Associated with Malaysian based company IRIS JV]',
                                        date: 'August 2012 - April 2018',
                                        tasks: [
                                          'Supervised Machine Readable Passport (MRP) operations and coordinated administrative activities.',
                                          'Led teams, monitored performance, maintained documentation, and ensured project compliance.',
                                          // 'Coordinated between staff and upper management.',
                                          // 'Maintained files, documentation, and attendance records.'
                                        ]
                                      },
                                      // {
                                      //   role: 'Supervisor',
                                      //   company: 'iPeople Ltd. (IRIS JV)',
                                      //   date: 'July 2012 - February 2014',
                                      //   tasks: [
                                      //     'Led daily operations for passport enrollment project in Comilla.',
                                      //     'Monitored team performance and provided coaching.',
                                      //     'Ensured compliance with policies and procedures.'
                                      //   ]
                                      // },
                                      {
                                        role: 'Enrollment Executive',
                                        company: 'iPeople Ltd. (IRIS JV)',
                                        date: 'April 2010 - June 2012',
                                        tasks: [
                                          'Processed passport applications, verified applicant data, managed fee collection, and maintained digital records.',
                                          // 'Verified applicant identity and eligibility.',
                                          // 'Managed digital records and documentation.'
                                        ]
                                      },
                                      {
                                        role: 'Documentation Engineer',
                                        company: 'Speed Communication (Telecom & Network Engineering)',
                                        date: 'April 2008 - February 2009',
                                        tasks: [
                                          'Prepared and maintained technical documentation for telecom and network engineering projects.',
                                          // 'Collaborated with development, testing, and product management teams to ensure content accuracy.',
                                          // 'Maintained all documentation to reflect the latest technical specifications and product updates.'
                                        ]
                                      },
                                      {
                                        role: 'Executive Officer',
                                        company: 'Sky-Land Computers',
                                        date: 'January 2004 - January 2008',
                                        tasks: [
                                          'Conducted technical training programs and developed instructional and training materials.',
                                          // 'Conducted training needs assessments to identify skill gaps and improve curriculum.',
                                          // 'Created comprehensive instructional materials, presentations, and training documentation.'
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
                    <span className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue text-sm">06</span>
                    Education
                  </h4>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <h5 className="text-white font-bold text-sm">B.Sc. (Honours) in Physics | Cumilla Victoria Government College | 2004</h5>
                      {/* <p className="text-[10px]">(Transitioned to IT/Software Development through professional training and self-learning)</p> */}
                    </div>
                    {/* <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <h5 className="text-white font-bold text-sm">H.S.C</h5>
                        <p className="text-[10px] text-gray-400">Cumilla Victoria Government College-1998</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <h5 className="text-white font-bold text-sm">S.S.C</h5>
                        <p className="text-[10px] text-gray-400">Cumilla High School-1995</p>
                      </div>
                    </div> */}
                  </div>
                </section>

                {/* Certifications */}
                <section>
                  <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue text-sm">07</span>
                    Certifications
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-accent-blue/5 border border-accent-blue/10">
                      <p className="text-xs text-white font-bold mb-1">(1) Complete Web Development Course</p>
                      <p className="text-[10px] text-accent-blue uppercase font-bold">with Programming Hero | 2026</p>
                    </div>
                    {/* <div className="p-4 rounded-xl bg-accent-blue/5 border border-accent-blue/10">
                      <p className="text-xs text-white font-bold mb-1">(2) Oracle Database 11g: Administration Workshop</p>
                      <p className="text-[10px] text-accent-blue uppercase font-bold">Oracle University | IBCS-PRIMAX | 2019</p>
                    </div> */}

                    {/* ------------------ */}
                      <div className="p-4 rounded-xl bg-accent-blue/5 border border-accent-blue/10">
  <p className="text-xs text-white font-bold mb-1">
    (2) Oracle Database 11g: Administration Workshop
  </p>

  <p className="text-[10px] text-accent-blue uppercase font-bold">
    <a
      href="https://drive.google.com/file/d/1PgEEaNbh8CSr-UCERleSZl4gP0j2qlG6/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline underline"
    >
      Oracle University
    </a>
    {" | "}
    <a
      href="https://drive.google.com/file/d/1rcrfxdA5LgHXpX29jTlcnkX0hBvJOBqD/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline underline"
    >
      IBCS-PRIMAX
    </a>
    {" | 2019"}
  </p>
</div>
                    {/* ----------------- */}
                  </div>
                </section>

                {/* Language */}
                <section>
                  
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue text-sm">08</span>
                    LANGUAGES
                  </h4>
                  <p className="leading-relaxed">
                    Bengali (Native), English (Proficient)
                  </p>
                </section>

                {/* Personal Details */}
                <section>
                  <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue text-sm">09</span>
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

                    <button 
                  onClick={onClose}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 text-white transition-colors"
                >
                  <i className="fas fa-times"></i>
                  {/* Close */}
                </button>

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
