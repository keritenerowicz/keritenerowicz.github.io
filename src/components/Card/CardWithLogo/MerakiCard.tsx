import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../styles.css';

const MerakiCard = ({
  logo,
  fulltimeTitle,
  internTitle,
  org,
  link,
  fulltimeDate,
  fullTimeText,
  internDateFirst,
  internTextFirst,
  internDateSecond,
  internTextSecond
}: {
  logo: string;
  fulltimeTitle: string;
  internTitle: string;
  org: string;
  link: string;
  fulltimeDate: string;
  fullTimeText: React.ReactNode;
  internDateFirst: string;
  internTextFirst: React.ReactNode;
  internDateSecond: string;
  internTextSecond: React.ReactNode;
}) => (
  <Card className='card'>
    <CardContent className='cardContent'>
      <a className='logo' href={link} target='_blank' rel='noopener noreferrer'>
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <span className='titleDate'>
        <p className='title'>{fulltimeTitle} at <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        >{org}</a>
        </p>
        <p className='date'>{fulltimeDate}</p>
      </span>
      <div className='body'>{fullTimeText}</div>
      <span className='titleDate'>
        <p className='title'>{internTitle} at <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        >{org}</a>
        </p>
        <p className='date'>{internDateFirst}</p>
      </span>
      <div className='body'>{internTextFirst}</div>
      <span className='titleDate'>
        <p className='date'>{internDateSecond}</p>
      </span>
      <div className='body'>{internTextSecond}</div>
    </CardContent>
  </Card>
);

export default MerakiCard;