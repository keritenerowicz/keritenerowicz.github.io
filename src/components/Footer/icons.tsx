import { FaLinkedinIn, FaGithub, FaEnvelope, FaRegFileAlt } from 'react-icons/fa';
import './styles.css'

const socialLinks = [
  {
    Icon: FaEnvelope,
    href: 'mailto:keri.tenerowicz@gmail.com',
  },
  {
    Icon: FaGithub,
    href: 'https://github.com/keritenerowicz/',
  },
  {
    Icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/keritenerowicz/',
  },
  {
    Icon: FaRegFileAlt,
    href: 'Keri_Tenerowicz_Resume.pdf',
  },
];

const Icons = () => (
  <div className='icons'>
    {socialLinks.map(({ Icon, href }) => (
      <a key={href} href={href} target='_blank'>
        <Icon className='footerIcon' />
      </a>
    ))}
  </div>
);

export default Icons;
