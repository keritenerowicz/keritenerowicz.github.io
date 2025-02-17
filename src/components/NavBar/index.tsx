import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './styles.css';

const NavBar = ({ activeSection }: { activeSection: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 800);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isNavItemsOpen = !isMobile || (isMobile && isMenuOpen);
  const showIcon = isMobile && !isMenuOpen;

  return (
    <nav className="navBar">
      <a className='logo' href='/'>
        <img src='/tab.png' alt="Logo" />
      </a>
      <Card className={`card ${isMenuOpen ? 'menuOpen' : ''}`}>
        <CardContent className='cardContent'>
          <IconButton
            className={`hamburger ${showIcon ? 'visible' : 'hidden'}`}
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <ul className={`navItems ${isNavItemsOpen ? 'visible' : 'hidden'}`}>
            <li>
              <a
                href='#about'
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#experience'
                className={activeSection === 'experience' ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href='#projects'
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href={'Keri_Tenerowicz_Resume.pdf'}
                target='_blank'
                role='button'
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </nav>
  );
};

export default NavBar;
