import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import './styles.css'

const socialLinks = [
  {
    Icon: FaGithub,
    href: 'https://github.com/keritenerowicz/',
  },
  {
    Icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/keritenerowicz/',
  },
  {
    Icon: FaEnvelope,
    href: 'mailto:keri.tenerowicz@gmail.com',
  },
];

const Footer = () => (
  <div className='footer'>
    <div className='icons'>
      {socialLinks.map(({ Icon, href }) => (
        <a key={href} href={href} target='_blank'>
          <Icon className='footerIcon' />
        </a>
      ))}
    </div>
    <p className='footerText'>© Keri Tenerowicz 2025</p>
  </div>
);

export default Footer;
