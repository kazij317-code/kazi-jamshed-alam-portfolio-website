import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Technologies from '@/components/Technologies';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Qualification from '@/components/Qualification';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-gray-200">
      <Header />
      <Hero />
      <About />
      {/* <Technologies /> */}
      <Skills />
      {/* <Services /> */}
      <Qualification />
      <Projects />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  );
}
