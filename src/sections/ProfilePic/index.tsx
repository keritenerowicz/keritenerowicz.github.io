import { useEffect, useState } from 'react';
import './styles.css'

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
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth'
    });
  }
};

const ProfilePic = () => {
  const [scale, setScale] = useState(1);
  const minScale = 0.5;
  const maxScrollBeforeShrink = 400;

  const [profilePic] = useState(() => {
    const randomIndex = Math.floor(Math.random() * IMAGE_PATHS.length);
    return IMAGE_PATHS[randomIndex];
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (window.innerWidth >= 800) {
        const newScale = Math.max(minScale, 1 - (scrollPosition / maxScrollBeforeShrink) * 0.5);
        setScale(newScale);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id='profilePic'>
      <div className="profileContainer">
        <div 
          className="profileCircle" 
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
          <div className="profileText">Hello world :D</div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePic;
