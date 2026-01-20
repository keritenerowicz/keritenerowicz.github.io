import Footer from './components/Footer';
import About from './sections/about';
import Experience from './sections/experience';
import Projects from './sections/projects';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
