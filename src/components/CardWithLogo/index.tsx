import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './styles.css';

const CardWithLogo = ({ logo, title, org, link, text, date }: {
  logo: string;
  title: string;
  org: string;
  link: string;
  text: React.ReactNode;
  date: string;
}) => (
  <Card className='card'>
    <CardContent className='cardContent'>
      <a className='logo' href={link} target='_blank' rel='noopener noreferrer'>
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <span className='titleDate'>
        <p className='title'>{title} at <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        >{org}</a>
        </p>
        <p className='date'>{date}</p>
      </span>
      <div className='body'>{text}</div>
    </CardContent>
  </Card>
);

export default CardWithLogo;