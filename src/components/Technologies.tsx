'use client';

const Technologies = () => {
  const techs = [
    { name: 'HTML5', img: 'https://skillicons.dev/icons?i=html', hoverBg: 'group-hover:bg-[#E34F26]/20' },
    { name: 'CSS3', img: 'https://skillicons.dev/icons?i=css', hoverBg: 'group-hover:bg-[#1572B6]/20' },
    { name: 'Tailwind CSS', img: 'https://skillicons.dev/icons?i=tailwind', hoverBg: 'group-hover:bg-[#06B6D4]/20' },
    { name: 'JavaScript', img: 'https://skillicons.dev/icons?i=js', hoverBg: 'group-hover:bg-[#F7DF1E]/20' },
    { name: 'React', img: 'https://skillicons.dev/icons?i=react', hoverBg: 'group-hover:bg-[#61DAFB]/20' },
    { name: 'Next.js', img: 'https://skillicons.dev/icons?i=nextjs', hoverBg: 'group-hover:bg-white/20' },
    { name: 'MongoDB', img: 'https://skillicons.dev/icons?i=mongodb', hoverBg: 'group-hover:bg-[#47A248]/20' },
    { name: 'Node.js', img: 'https://skillicons.dev/icons?i=nodejs', hoverBg: 'group-hover:bg-[#339933]/20' },
  ];

  const secondaryTechs = [
    { name: 'Express.js', img: 'https://skillicons.dev/icons?i=express', hoverBg: 'group-hover:bg-white/10' },
    { name: 'TypeScript', img: 'https://skillicons.dev/icons?i=ts', hoverBg: 'group-hover:bg-[#3178C6]/20' },
    { name: 'PostgreSQL', img: 'https://skillicons.dev/icons?i=postgres', hoverBg: 'group-hover:bg-[#336791]/20' },
    // { name: 'Prisma', img: 'https://skillicons.dev/icons?i=prisma', hoverBg: 'group-hover:bg-white/10' },
    // { name: 'NestJS', img: 'https://skillicons.dev/icons?i=nestjs', hoverBg: 'group-hover:bg-[#E0234E]/20' },
    // { name: 'Docker', img: 'https://skillicons.dev/icons?i=docker', hoverBg: 'group-hover:bg-[#2496ED]/20' },
    // { name: 'Kubernetes', img: 'https://skillicons.dev/icons?i=kubernetes', hoverBg: 'group-hover:bg-[#326CE5]/20' },
    { name: 'Git', img: 'https://skillicons.dev/icons?i=git', hoverBg: 'group-hover:bg-[#F05032]/20' },
    { name: 'GitHub', img: 'https://skillicons.dev/icons?i=github', hoverBg: 'group-hover:bg-white/20' },
    { name: 'VS Code', img: 'https://skillicons.dev/icons?i=vscode', hoverBg: 'group-hover:bg-[#007ACC]/20' },
    { name: 'Firebase', img: 'https://skillicons.dev/icons?i=firebase', hoverBg: 'group-hover:bg-[#FFCA28]/20' },
  ];

  return (
    <section className="py-24 px-6 bg-transparent" id="technologies">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-2">Technologies</h2>
        <p className="text-gray-400 text-sm">My Tech Stack</p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Main Tech Grid */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-10">
          {techs.map((tech) => (
            <div key={tech.name} className="group flex flex-col items-center gap-4">
              <div className={`w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] shadow-xl relative overflow-hidden ${tech.hoverBg}`}>
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="w-12 h-12 object-contain z-10"
                />
              </div>
              <span className="text-sm text-gray-400 font-medium group-hover:text-white transition-colors">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Secondary Tech Grid */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-10 px-12">
          {secondaryTechs.map((tech) => (
            <div key={tech.name} className="group flex flex-col items-center gap-4">
              <div className={`w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] shadow-xl relative overflow-hidden ${tech.hoverBg}`}>
                <img 
                  src={tech.img} 
                  alt={tech.name} 
                  className="w-10 h-10 object-contain z-10" 
                />
              </div>
              <span className="text-sm text-gray-400 font-medium group-hover:text-white transition-colors">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
