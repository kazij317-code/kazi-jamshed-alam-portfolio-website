'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  {
    title: 'QurbaniHat – Livestock Booking Platform',
    description: 'QurbaniHat is a modern livestock booking platform designed to simplify the process of buying animals for Qurbani. It allows users to browse, select, and book livestock online in a safe, transparent, and convenient way—without visiting crowded markets.',
    image: '/p5.png',
    tags: ['React', 'Chart.js', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/kazij317-code/qurbani-hat-my-assignment.git',
    demo: 'https://qurbani-hat-my-assignment.vercel.app/',
    glow: 'from-amber-500/20',
    stack: ['React', 'Chart.js', 'Tailwind CSS', 'Vite'],
    challenges: 'Ensuring real-time availability of livestock and handling secure booking transitions without a complex backend initially.',
    improvements: 'Implement a full-featured admin dashboard for livestock owners and integrate automated payment gateways.'
  },
  {
    title: 'Keen Keeper Portfolio',
    description: 'Keen Keeper is a modern portfolio web application where users can explore projects, view detailed information, and experience a clean, responsive UI built with modern web technologies.',
    image: '/p4.png',
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript (ES6+)'],
    github: 'https://github.com/kazij317-code/B13-A7-keen-keeper',
    demo: 'https://kazij317-code.github.io/B13-A7-keen-keeper/',
    glow: 'from-blue-500/20',
    stack: ['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript (ES6+)'],
    challenges: 'Orchestrating complex GSAP animations with Next.js page transitions while maintaining performance.',
    improvements: 'Add a blog section and integrate a headless CMS for easier content management.'
  },
  {
    title: 'DigiTools',
    description: 'DigiTools is a modern web application to explore and purchase digital tools with a clean UI, responsive design, and an interactive cart system for a smooth user experience.',
    image: '/p3.png',
    tags: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'DaisyUI'],
    github: 'https://github.com/kazij317-code/B13-A6-DigiTools-Platform-My-Assignment.git',
    demo: 'https://kazij317-code.github.io/B13-A6-DigiTools-Platform-My-Assignment/',
    glow: 'from-green-500/20',
    stack: ['React', 'DaisyUI', 'Tailwind CSS', 'Local Storage'],
    challenges: 'Managing cart state efficiently and ensuring persistent data across sessions using local storage.',
    improvements: 'Migrate to a cloud-based database and implement user authentication.'
  },
  {
    title: 'GitHub Issue Tracker',
    description: 'GitHub Issue Tracker is a simple web application to create, manage, and track project issues efficiently in an organized way. It helps users monitor tasks and bugs easily through a clean interface.',
    image: '/p2.png',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/kazij317-code/B13-A5-Github-Issue-Tracker-My-Assignment-05.git',
    demo: 'https://kazij317-code.github.io/B13-A5-Github-Issue-Tracker-My-Assignment-05/',
    glow: 'from-purple-500/20',
    stack: ['HTML5', 'CSS3', 'Vanilla JavaScript'],
    challenges: 'Implementing robust issue filtering and search logic using pure JavaScript without external libraries.',
    improvements: 'Convert to a React-based application for better state management and component reusability.'
  },
  {
    title: 'Job Tracker',
    description: 'Job Tracker is a productivity-focused web application designed to help job seekers organize their career search. It provides a visual dashboard to track the status of multiple applications in one place.',
    image: '/p1.png',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/kazij317-code/B13-A4-PH-Job-Tracker-My-Assignment-04.git',
    demo: 'https://kazij317-code.github.io/B13-A4-PH-Job-Tracker-My-Assignment-04/',
    glow: 'from-cyan-500/20',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    challenges: 'Designing a clear and intuitive drag-and-drop-like interface for tracking job application stages using standard DOM APIs.',
    improvements: 'Integrate LinkedIn API to auto-fetch job details and add email notification reminders.'
  },
  {
    title: 'Knowledge Vault',
    description: 'Knowledge Vault is an interactive, content-rich web platform designed to serve as a centralized repository for educational resources. It features a clean, organized UI that allows users to browse and discover curated technical knowledge across various categories.',
    image: '/p6.png',
    tags: ['HTML5', 'CSS3'],
    github: 'https://github.com/kazij317-code/B13-A01-Knowledge-Vault.git',
    demo: 'https://kazij317-code.github.io/B13-A01-Knowledge-Vault/',
    glow: 'from-rose-500/20',
    stack: ['HTML5', 'CSS3', 'Flexbox/Grid'],
    challenges: 'Structuring a large volume of static content in a way that remains maintainable and visually organized.',
    improvements: 'Add a search bar with fuzzy matching and a bookmarking feature for users.'
  },
  // {
  //   title: 'Knowledge Vault',
  //   description: 'Knowledge Vault is an interactive, content-rich web platform designed to serve as a centralized repository for educational resources. It features a clean, organized UI that allows users to browse and discover curated technical knowledge across various categories.',
  //   image: '/p6.png',
  //   tags: ['HTML5', 'CSS3'],
  //   github: 'https://github.com/kazij317-code/B13-A01-Knowledge-Vault.git',
  //   demo: 'https://kazij317-code.github.io/B13-A01-Knowledge-Vault/',
  //   glow: 'from-rose-500/20',
  //   stack: ['HTML5', 'CSS3', 'Flexbox/Grid'],
  //   challenges: 'Structuring a large volume of static content in a way that remains maintainable and visually organized.',
  //   improvements: 'Add a search bar with fuzzy matching and a bookmarking feature for users.'
  // }
];

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  glow: string;
  stack: string[];
  challenges: string;
  improvements: string;
}

const Projects = () => {
  const [activePage, setActivePage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  const startIndex = (activePage - 1) * projectsPerPage;
  const currentProjects = projectsData.slice(startIndex, startIndex + projectsPerPage);

  const handlePageChange = (page: number) => {
    setActivePage(page);
    // Smooth scroll back to top of section
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-24 px-6 bg-transparent" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-2">Projects</h2>
          <p className="text-gray-400 text-sm">Recent Projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 min-h-[500px] md:min-h-[800px]">
          <AnimatePresence mode="wait">
            {currentProjects.map((project, i) => (
              <motion.div 
                key={project.title}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="project-card bg-card-bg/30 backdrop-blur-sm rounded-[2rem] overflow-hidden flex flex-col h-full border border-white/5 hover:border-white/10 transition-all group shadow-2xl"
              >
                {/* Image Container with Glow */}
                <div className={`relative h-64 p-4 bg-gradient-to-b ${project.glow} to-transparent`}>
                  <div className="w-full h-full rounded-2xl overflow-hidden relative border border-white/10 shadow-lg bg-black/40">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                  </div>
                </div>

                <div className="p-8 pt-4 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-4 text-white leading-tight">{project.title}</h3>
                  {/* line-clamp-3 */}
                  {/* <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p> */}
                  
                  {/* <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 text-cyan-400 text-[10px] rounded-full font-medium border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div> */}

                  <div className="flex flex-col gap-3">
                    {/* <div className="flex gap-3">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 bg-transparent border border-white/10 text-center py-2.5 rounded-xl text-sm font-bold text-white hover:bg-white/5 transition-all">
                      <i className="fab fa-github mr-2"></i>
                        GitHub
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 bg-cyan-400 text-center py-2.5 rounded-xl text-sm font-bold text-black hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                        <i className="fas fa-external-link-alt mr-2"></i>
                        Live Demo
                      </a>
                    </div> */}
                    <button 
                      onClick={() => setSelectedProject(project as Project)}
                      className="w-full bg-white/5 border border-white/10 text-center py-2.5 rounded-xl text-sm font-bold text-white hover:bg-white/10 transition-all"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Conditional Pagination */}
        {projectsData.length > projectsPerPage && (
          <div className="flex justify-center items-center gap-4">
            <button 
              onClick={() => handlePageChange(Math.max(1, activePage - 1))}
              disabled={activePage === 1}
              className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 transition-all ${activePage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:border-white/30 hover:text-white'}`}
            >
              <i className="fas fa-chevron-left text-sm"></i>
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button 
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-base font-bold transition-all ${
                  activePage === page 
                    ? 'bg-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.5)]' 
                    : 'border border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                }`}
              >
                {page}
              </button>
            ))}

            <button 
              onClick={() => handlePageChange(Math.min(totalPages, activePage + 1))}
              disabled={activePage === totalPages}
              className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 transition-all ${activePage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:border-white/30 hover:text-white'}`}
            >
              <i className="fas fa-chevron-right text-sm"></i>
            </button>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-dark-bg/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors text-xl z-10"
              >
                <i className="fas fa-times"></i>
              </button>

              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <div className="h-1 w-20 bg-cyan-400 rounded-full" />
              </div>

              <div className="space-y-8">
                <section>
                  <h4 className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
                    <i className="fas fa-info-circle text-xs"></i> Description
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {selectedProject.description}
                  </p>
                </section>

                <section>
                  <h4 className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
                    <i className="fas fa-layer-group text-xs"></i> Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map(item => (
                      <span key={item} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white">
                        {item}
                      </span>
                    ))}
                  </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <section>
                    <h4 className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
                      <i className="fas fa-exclamation-triangle text-xs"></i> Challenges Faced
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {selectedProject.challenges}
                    </p>
                  </section>
                  <section>
                    <h4 className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
                      <i className="fas fa-rocket text-xs"></i> Future Plans
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {selectedProject.improvements}
                    </p>
                  </section>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px] bg-cyan-400 text-center py-3 rounded-xl text-sm font-bold text-black hover:opacity-90 transition-opacity">
                    <i className="fas fa-external-link-alt mr-2"></i> Live Link
                  </a>
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px] bg-white/5 border border-white/10 text-center py-3 rounded-xl text-sm font-bold text-white hover:bg-white/10 transition-all">
                    <i className="fab fa-github mr-2"></i> GitHub Link
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
