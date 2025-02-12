import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './styles.css';

const NavBar = ({ activeSection }: { activeSection: string }) => (
  <nav className="navBar">
    <a className='logo' href='/'>
      <img src='/tab.png' alt="Logo" />
    </a>
    <Card className='card'>
      <CardContent className='cardContent'>
        <ul className={'navItems'}>
          <li><a href='#about' className={activeSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href='#experience' className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
          <li><a href='#projects' className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href={'Keri_Tenerowicz_Resume.pdf'} target='_blank' role='button'>Resume</a></li>
        </ul>
      </CardContent>
    </Card>
  </nav>
);

export default NavBar;
