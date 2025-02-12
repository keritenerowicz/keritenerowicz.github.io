import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardWithLogo from '../../components/CardWithLogo';
import './styles.css'

const MerakiCard = () => {
  return (
    <Card className='card'>
      <CardContent className='cardContent'>
        <a
          className='logo'
          href='https://meraki.cisco.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img 
            src={'/logos/meraki.png'}
            alt="Logo"
            className="logo"
          />
        </a>
        <span className='titleDate'>
          <p className='title'>Software engineer at <a
            href='https://meraki.cisco.com/'
            target='_blank'
            rel='noopener noreferrer'
          >Cisco Meraki</a>
          </p>
          <p className='date'>2023 - Present</p>
        </span>
        <div className='body'>Currently working on the Meraki Dashboard 
          and Vision Portal, two web applications that allow users to manage 
          their network and monitor their cameras.
        </div>
        <span className='titleDate'>
          <p className='title'>Software engineer intern at <a
            href='https://meraki.cisco.com/'
            target='_blank'
            rel='noopener noreferrer'
          >Cisco Meraki</a>
          </p>
          <p className='date'>Fall 2022</p>
        </span>
        <div className='body'>Implemented a popover tour framework using Intro.js in JavaScript 
        with React to introduce a user to new features of the dashboard and 
        deployed changes behind a Network Feature Override. Completed bug and 
        backlog tickets of the website features.
        </div>
        <span className='titleDate'>
          <p className='date'>Spring 2022</p>
        </span>
        <div className='body'>Implemented a website's user interface to select polygon-shaped 
          regions over a camera's view using JavaScript with React Redux. Saved region data to the 
          PostgreSQL database and analyzed using Ruby on Rails. Deployed the polygon drawing tool 
          to Meraki devices behind a Network Feature Override. Worked across the stack with developers, 
          designers, and product managers on the MV Front End team.
        </div>
      </CardContent>
    </Card>
  );
}

const Experience = () => (
  <section id='experience'>
    <h1>Experience</h1>
    <MerakiCard />
    <CardWithLogo
      logo='/logos/amazon.png'
      title='Software development engineer intern'
      org='Amazon'
      link='https://www.aboutamazon.com/'
      date='Summer 2022'
      text='Created a voice-activated prompt response for Alexa to say the time aloud 5 seconds after 
      an alarm starts ringing via sending notification topics between the cloud and Alexa devices. 
      Configured the AWS services to the notification publishers and handlers in Java. Collaborated 
      with members of the Alexa Alarms team in an Agile environment.'
    />
    <CardWithLogo
      logo='/logos/ca.png'
      title='Software engineer intern'
      org='Curriculum Associates'
      link='https://www.curriculumassociates.com/'
      date='Summer 2021'
      text="Implemented an automation tool to create Selenium tests for the audio, visual, and 
        interactive elements of web pages in JavaScript. This tool was frequently used among developer 
        and QA teams. Implemented and refactored features in JavaScript codebases according to my team's 
        specifications."
    />
  </section>
);

export default Experience;
