import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import UniversitariaProject from './pages/UniversitariaProject';
import TitoPabonProject from './pages/TitoPabonProject';
import BankCorpProject from './pages/BankCorpProject';
import ISO27001Project from './pages/ISO27001Project';
import FitLifeProject from './pages/FitLifeProject';
import VideosIAProject from './pages/VideosIAProject';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Simple routing based on hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'proyecto-universitaria') {
        setCurrentPage('universitaria');
      } else if (hash === 'proyecto-tito-pabon') {
        setCurrentPage('tito-pabon');
      } else if (hash === 'proyecto-bankcorp') {
        setCurrentPage('bankcorp');
      } else if (hash === 'proyecto-iso27001') {
        setCurrentPage('iso27001');
      } else if (hash === 'proyecto-fitlife') {
        setCurrentPage('fitlife');
      } else if (hash === 'proyecto-videos-ia') {
        setCurrentPage('videos-ia');
      } else {
        setCurrentPage('home');
      }

      // Scroll al inicio cuando cambia la página
      window.scrollTo(0, 0);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    // Smooth scroll polyfill for older browsers
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add custom cursor effect (optional)
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      border: 2px solid #00c3ff;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.2s ease;
      display: none;
    `;
    document.body.appendChild(cursor);

    const handleMouseMove = (e) => {
      cursor.style.left = e.clientX - 10 + 'px';
      cursor.style.top = e.clientY - 10 + 'px';
      cursor.style.display = 'block';
    };

    const handleMouseEnter = () => {
      cursor.style.transform = 'scale(1.5)';
      cursor.style.borderColor = '#a855f7';
    };

    const handleMouseLeave = () => {
      cursor.style.transform = 'scale(1)';
      cursor.style.borderColor = '#00c3ff';
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      cursor.remove();
    };
  }, []);

  // Render based on current page
  if (currentPage === 'universitaria') {
    return <UniversitariaProject />;
  }

  if (currentPage === 'tito-pabon') {
    return <TitoPabonProject />;
  }

  if (currentPage === 'bankcorp') {
    return <BankCorpProject />;
  }

  if (currentPage === 'iso27001') {
    return <ISO27001Project />;
  }

  if (currentPage === 'fitlife') {
    return <FitLifeProject />;
  }

  if (currentPage === 'videos-ia') {
    return <VideosIAProject />;
  }

  return (
    <div className="relative min-h-screen bg-dark-bg overflow-hidden">
      {/* Particle Background Effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,195,255,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-cyan/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent-pink/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>
    </div>
  );
}

export default App;
