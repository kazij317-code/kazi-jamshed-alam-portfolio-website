'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  { 
    title: 'Frontend\nDevelopment', 
    icon: 'fas fa-layer-group',
    description: 'Creating responsive and interactive user interfaces with modern technologies.',
    details: [
      'Development of high-performance web applications.',
      'Responsive design for all screen sizes.',
      'Interactive elements and animations.',
      'Performance optimization and SEO.'
    ]
  },
  { 
    title: 'Backend\nDevelopment', 
    icon: 'fas fa-code',
    description: 'Building robust and scalable server-side architectures and APIs.',
    details: [
      'Database design and management.',
      'Server-side logic and API development.',
      'Authentication and authorization.',
      'Cloud deployment and monitoring.'
    ]
  },
  { 
    title: 'Full Stack\nDevelopment', 
    icon: 'fas fa-laptop-code',
    description: 'Creating end-to-end web solutions with frontend and backend expertise.',
    details: [
      'Design & Planning: Blueprint for success.',
      'Front-End Development: User-friendly interfaces.',
      'Back-End Development: Server-side functionality.',
      'Database Management: Efficient data storage.'
    ]
  },
  { 
    title: 'Mobile Hybrid\nApp Development', 
    icon: 'fas fa-mobile-alt',
    description: 'Developing cross-platform mobile applications using web technologies.',
    details: [
      'Single codebase for iOS and Android.',
      'Smooth performance and native-like feel.',
      'Integration with device features.',
      'App store deployment assistance.'
    ]
  },
  { 
    title: 'UI/UX\nDesign', 
    icon: 'fas fa-pen-nib',
    description: 'Designing intuitive and visually appealing user experiences.',
    details: [
      'Wireframing and prototyping.',
      'Visual design and branding.',
      'User research and testing.',
      'Design system development.'
    ]
  },
  { 
    title: 'API\nDevelopment', 
    icon: 'fas fa-server',
    description: 'Designing and implementing secure, scalable RESTful and GraphQL APIs.',
    details: [
      'REST and GraphQL API architecture.',
      'Comprehensive documentation.',
      'Third-party service integration.',
      'Security and rate limiting.'
    ]
  },
  { 
    title: 'Network\nAdministration', 
    icon: 'fas fa-network-wired',
    description: 'Managing and optimizing complex network infrastructures and performance.',
    details: [
      'Network performance monitoring.',
      'Infrastructure setup and maintenance.',
      'Security protocol implementation.',
      'Troubleshooting and connectivity fixes.'
    ]
  },
  { 
    title: 'Database\nAdministration', 
    icon: 'fas fa-database',
    description: 'Designing, implementing, and managing efficient database systems.',
    details: [
      'SQL and NoSQL database management.',
      'Data modeling and architecture.',
      'Performance tuning and optimization.',
      'Backup and disaster recovery planning.'
    ]
  },
  { 
    title: 'Technical\nDocumentation', 
    icon: 'fas fa-file-alt',
    description: 'Creating comprehensive technical guides and system documentation.',
    details: [
      'Developing technical specifications.',
      'User manual and guide creation.',
      'System architecture documentation.',
      'Technical updates and maintenance.'
    ]
  },
  { 
    title: 'System Support\n& Maintenance', 
    icon: 'fas fa-tools',
    description: 'Providing high-level technical support and proactive system maintenance.',
    details: [
      'Hardware and software troubleshooting.',
      'Proactive system health monitoring.',
      'End-user technical assistance.',
      'System upgrades and patches.'
    ]
  },
];

interface Service {
  title: string;
  icon: string;
  description: string;
  details: string[];
}

const Services = () => {
  const container = useRef(null);
  const [activePage, setActivePage] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const servicesPerPage = 6;
  const totalPages = Math.ceil(servicesData.length / servicesPerPage);
  const startIndex = (activePage - 1) * servicesPerPage;
  const currentServices = servicesData.slice(startIndex, startIndex + servicesPerPage);

  useGSAP(() => {
    // Refresh ScrollTrigger to ensure positions are correct with Lenis
    ScrollTrigger.refresh();

    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse',
      },
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power4.out',
      clearProps: 'all', // Clear properties after animation to prevent conflicts
    });
  }, { scope: container });

  return (
    <section 
      ref={container}
      className="py-24 px-6 bg-transparent relative" 
      id="services"
    >
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-2">Services</h2>
        <p className="text-gray-400 text-sm">What I Offer</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentServices.map((service, index) => (
          <motion.div 
            key={index} 
            whileHover={{ y: -10 }}
            className="service-card glass-card bg-card-bg/40 p-10 rounded-[2.5rem] group hover:border-accent-blue/50 cursor-pointer flex flex-col items-start text-left"
            onClick={() => setSelectedService(service)}
          >
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent-blue/20 transition-colors duration-500">
              <i className={`${service.icon} text-2xl text-cyan-400 group-hover:text-accent-blue transition-colors duration-500`}></i>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-8 whitespace-pre-line leading-tight">
              {service.title}
            </h3>
            
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedService(service); }}
              className="text-accent-blue hover:text-white text-sm font-semibold flex items-center gap-2 group-hover:gap-4 transition-all mt-auto"
            >
              View More <i className="fas fa-arrow-right"></i>
            </button>
          </motion.div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-10">
          <button
            onClick={() => setActivePage((prev) => Math.max(1, prev - 1))}
            className={`px-4 py-2 rounded-full border border-white/10 text-sm text-gray-400 transition-all ${activePage === 1 ? 'opacity-40 cursor-not-allowed' : 'hover:border-white/30 hover:text-white'}`}
            disabled={activePage === 1}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`w-10 h-10 rounded-full text-sm font-semibold transition-all ${activePage === page ? 'bg-cyan-400 text-black' : 'border border-white/10 text-gray-400 hover:border-white/30 hover:text-white'}`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setActivePage((prev) => Math.min(totalPages, prev + 1))}
            className={`px-4 py-2 rounded-full border border-white/10 text-sm text-gray-400 transition-all ${activePage === totalPages ? 'opacity-40 cursor-not-allowed' : 'hover:border-white/30 hover:text-white'}`}
            disabled={activePage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* Modal Backdrop */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-dark-bg/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 md:p-14 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors text-xl"
              >
                <i className="fas fa-times"></i>
              </button>

              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {selectedService.title.replace('\n', ' ')}
                </h3>
                <p className="text-gray-400 italic text-sm">
                  "{selectedService.description}"
                </p>
              </div>

              <div className="space-y-6">
                {selectedService.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-4 text-left group">
                    <div className="mt-1.5 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:border-accent-blue transition-colors">
                      <i className="fas fa-check text-[10px] text-accent-blue opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    </div>
                    <p className="text-white font-medium text-sm md:text-base">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
