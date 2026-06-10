import Icons from './icons';
import './styles.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='footer' role="contentinfo">
      <Icons />
      <p className='footerText'>© Keri Tenerowicz {currentYear}</p>
    </footer>
  );
};

export default Footer;
