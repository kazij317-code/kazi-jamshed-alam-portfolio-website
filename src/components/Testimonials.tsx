'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    text: '"Jamshed worked efficiently while maintaining excellent design quality. His communication was clear, and the entire process was smooth and professional."',
    name: 'James Miller',
    role: 'CEO of FutureTech',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 5,
  },
  {
    text: '"Working with Jamshed was a great experience. He delivered a modern, clean, and highly functional site that exceeded our expectations in every way."',
    name: 'Emily Johnson',
    role: 'Product Manager at TechFlow',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    rating: 5,
  },
  {
    text: '"The level of detail and responsiveness in Jamshed\'s work is unparalleled. He truly understands how to balance aesthetics with performance."',
    name: 'Michael Chen',
    role: 'CTO of CreativeOps',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    rating: 5,
  },
  {
    text: '"I was impressed by the speed and quality of delivery. Jamshed is a top-tier developer who knows how to bring complex ideas to life."',
    name: 'Sarah Williams',
    role: 'Founder of Bloom Agency',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    rating: 5,
  },
];

const Testimonials = () => {
  // Triple the reviews to ensure seamless looping
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="py-24 bg-transparent overflow-hidden" id="testimonials">
      <div className="max-w-4xl mx-auto text-center mb-16 px-6">
        <h2 className="text-4xl font-bold text-white mb-2">My Clients Say</h2>
        <p className="text-gray-400 text-sm">Testimonials</p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap gap-8 py-4"
          animate={{
            x: [0, -2000], 
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {duplicatedReviews.map((review, index) => (
            <div 
              key={index} 
              className="inline-block w-[450px] shrink-0 bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/5 transition-colors group"
            >
              {/* Testimonial Text */}
              <p className="text-gray-200 italic mb-8 whitespace-normal leading-relaxed text-lg">
                {review.text}
              </p>

              {/* Divider Line */}
              <div className="w-full h-px bg-white/10 mb-8" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img 
                    src={review.img} 
                    alt={review.name} 
                    className="w-14 h-14 rounded-full object-cover border border-white/10"
                  />
                  <div className="text-left">
                    <h5 className="text-white font-bold text-lg leading-tight">{review.name}</h5>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex text-accent-gold text-sm">
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star ml-1"></i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark-bg to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default Testimonials;
