import { useEffect, useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Lazy load project pages for better performance
const UniversitariaProject = lazy(() => import('./pages/UniversitariaProject'));
const TitoPabonProject = lazy(() => import('./pages/TitoPabonProject'));
const BankCorpProject = lazy(() => import('./pages/BankCorpProject'));
const ISO27001Project = lazy(() => import('./pages/ISO27001Project'));
const FitLifeProject = lazy(() => import('./pages/FitLifeProject'));
const VideosIAProject = lazy(() => import('./pages/VideosIAProject'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-metal-950 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-white/60">Cargando...</p>
    </div>
  </div>
);

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

  // Render based on current page with Suspense for lazy loading
  if (currentPage === 'universitaria') {
    return (
      <Suspense fallback={<PageLoader />}>
        <UniversitariaProject />
      </Suspense>
    );
  }

  if (currentPage === 'tito-pabon') {
    return (
      <Suspense fallback={<PageLoader />}>
        <TitoPabonProject />
      </Suspense>
    );
  }

  if (currentPage === 'bankcorp') {
    return (
      <Suspense fallback={<PageLoader />}>
        <BankCorpProject />
      </Suspense>
    );
  }

  if (currentPage === 'iso27001') {
    return (
      <Suspense fallback={<PageLoader />}>
        <ISO27001Project />
      </Suspense>
    );
  }

  if (currentPage === 'fitlife') {
    return (
      <Suspense fallback={<PageLoader />}>
        <FitLifeProject />
      </Suspense>
    );
  }

  if (currentPage === 'videos-ia') {
    return (
      <Suspense fallback={<PageLoader />}>
        <VideosIAProject />
      </Suspense>
    );
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
