import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProfilePic from './sections/ProfilePic';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import './styles.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    const sections = ['about', 'experience', 'projects'];
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <NavBar activeSection={activeSection} />
      <ProfilePic />
      <About />
      <Experience />
      <Projects />
      <Footer/>
    </div>
  );
};

export default App;
