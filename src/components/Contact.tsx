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
      value: '+8801712736526',
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
    <section className="mb-20 px-6" id="contact">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-2">Get in Touch</h2>
        <p className="text-gray-400 text-sm">Contact Me</p>
      </div>
      <div className="max-w-5xl mx-auto">
        {/* Contact Options */}
        <div className="text-center mb-10">
          <h3 className="text-xl font-bold text-white">Talk to me</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
};

export default Contact;
