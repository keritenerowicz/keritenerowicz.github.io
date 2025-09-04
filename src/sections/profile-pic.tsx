import { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import '../styles.css'

const IMAGE_PATHS = [
  '/me/arizona.png',
  '/me/colorado.png',
  '/me/grad.png',
  '/me/pfp.png',
  '/me/ski.png',
  '/me/teamlabs.png'
];

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const ProfilePic = () => {
  const [scale, setScale] = useState(1);
  const [showOverlay, setShowOverlay] = useState(false);
  const minScale = 0.5;
  const maxScrollBeforeShrink = 400;

  const [profilePic] = useState(() => {
    const randomIndex = Math.floor(Math.random() * IMAGE_PATHS.length);
    return IMAGE_PATHS[randomIndex];
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const profileSection = document.getElementById('profilePic');
      
      if (window.innerWidth >= 800) {
        const newScale = Math.max(minScale, 1 - (scrollPosition / maxScrollBeforeShrink) * 0.5);
        setScale(newScale);
      }

      if (profileSection) {
        const rect = profileSection.getBoundingClientRect();
        const isInView = rect.bottom > 0 && rect.top < window.innerHeight;
        if (!isInView && showOverlay) {
          setShowOverlay(false);
        }
      }
    };

    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 5000);

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [showOverlay]);

  return (
    <section id='profilePic'>
      <div className="profileContainer">
        <div 
          className={`profileCircle ${showOverlay ? 'show-overlay' : ''}`}
          style={{ transform: `scale(${scale})` }}
          onClick={() => scrollToSection('about')}
          role="button"
          tabIndex={0}
        >
          <img 
            src={profilePic}
            alt="Profile" 
            className="profileImage"
          />
          <div className="profileText">
            <div>Hello world!</div>
            <FaChevronDown className="bounce-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePic;
