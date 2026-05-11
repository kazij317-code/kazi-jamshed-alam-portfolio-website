'use client';

const Contact = () => {
  const contactOptions = [
    {
      label: 'EMAIL',
      value: 'kazij317@gmail.com',
      icon: 'far fa-envelope',
      link: 'mailto:kazij317@gmail.com',
    },
    {
      label: 'MOBILE',
      value: '01712736526',
      icon: 'fa-solid fa-phone',
      link: 'tel:+8801712736526',
    },
    {
      label: 'WHATSAPP',
      value: '01712736526',
      icon: 'fa-brands fa-whatsapp',
      link: 'https://wa.me/8801712736526',
    },
    // {
    //   label: 'LINKEDIN',
    //   value: 'kazi-jamshed-alam',
    //   icon: 'fab fa-linkedin-in',
    //   link: 'https://www.linkedin.com/in/kazi-jamshed-alam',
    // },
    
    // {
    //   label: 'TWITTER',
    //   value: '@NurAdnanChoudhury',
    //   icon: 'fab fa-twitter',
    //   link: '#',
    // },
  ];

  return (
    <section className="py-24 px-6" id="contact">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-2">Get in Touch</h2>
        <p className="text-gray-400 text-sm">Contact Me</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Contact Options */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white text-center mb-8">Talk to me</h3>
          {contactOptions.map((option) => (
            <div key={option.label} className="glass-card p-6 rounded-2xl text-center flex flex-col items-center">
              <i className={`${option.icon} text-2xl text-accent-gold mb-3`}></i>
              <h4 className="text-white font-bold mb-1">{option.label}</h4>
              <p className="text-sm text-gray-300 mb-4 font-medium">{option.value}</p>
              <a 
                href={option.link}
                className="text-xs text-accent-blue font-bold flex items-center gap-2 hover:gap-4 transition-all"
              >
                {option.label === 'MOBILE' ? 'Call me' : option.label === 'WHATSAPP' ? 'WhatsApp' : 'Write me'} <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-xl font-bold text-white text-center mb-8">Write me your project</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <label className="absolute -top-3 left-4 px-2 bg-dark-bg text-xs text-gray-400 font-medium">Name</label>
              <input
                type="text"
                placeholder="Insert your name"
                className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-gold transition-colors text-sm text-white"
              />
            </div>
            <div className="relative">
              <label className="absolute -top-3 left-4 px-2 bg-dark-bg text-xs text-gray-400 font-medium">Email</label>
              <input
                type="email"
                placeholder="Insert your email"
                className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-gold transition-colors text-sm text-white"
              />
            </div>
            <div className="relative">
              <label className="absolute -top-3 left-4 px-2 bg-dark-bg text-xs text-gray-400 font-medium">Project</label>
              <textarea
                placeholder="Write your project"
                rows={5}
                className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-gold transition-colors text-sm text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-accent-gold text-dark-bg font-bold px-10 py-4 rounded-2xl hover:bg-white transition-colors flex items-center gap-3 w-full justify-center"
            >
              Send Message <i className="far fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
