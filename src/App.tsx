import Footer from './components/Footer';
import ProfilePic from './sections/profile-pic';
import About from './sections/about';
import Experience from './sections/experience';
import Projects from './sections/projects';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <ProfilePic />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
