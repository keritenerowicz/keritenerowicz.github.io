import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../styles.css';

const IntroCard = ({ title, text }: {
  title: React.ReactNode;
  text: React.ReactNode;
}) => (
  <Card className='card'>
    <CardContent className='cardContent'>
      <div className='title'>{title}</div>
      <div className='body'>{text}</div>
    </CardContent>
  </Card>
);

export default IntroCard;