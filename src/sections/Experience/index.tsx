import CardWithLogo from '../../components/Card/CardWithLogo';
import HeaderTitle from '../../components/HeaderTitle';
import MerakiCard from '../../components/Card/CardWithLogo/MerakiCard';

const Experience = () => (
  <section id='experience'>
    <HeaderTitle name='Experience' />

    <MerakiCard
      logo='/logos/meraki.png'
      fulltimeTitle='Software engineer'
      internTitle='Software engineer intern'
      org='Cisco Meraki'
      link='https://meraki.cisco.com/'
      fulltimeDate='2023 - Present'
      fullTimeText=
        <>
          Currently working on the Meraki Dashboard and Vision Portal, two web applications that 
          allow users to manage their network and monitor their cameras.
        </>
      internDateFirst='Fall 2022'
      internTextFirst=
        <>
          Implemented a popover tour framework using Intro.js in JavaScript with React to introduce 
          a user to new features of the website. Added testing for the feature and deployed it to 
          Vision Portal users via a Network Feature Override. Completed work on UI improvements, 
          streaming playback quality, and inconsistent browser errors.
        </>
      internDateSecond='Spring 2022'
      internTextSecond=
        <>
          Developed a polygon selection tool for camera views using React Redux, with data saved to 
          PostgreSQL and analyzed in Ruby on Rails. Deployed the tool to Meraki devices via a Network 
          Feature Override. Collaborated across the stack with developers, designers, and product 
          managers on the front end team.
        </>
    />

    <CardWithLogo
      logo='/logos/amazon.png'
      title='Software development engineer intern'
      org='Amazon'
      link='https://www.aboutamazon.com/'
      date='Summer 2022'
      text=
        <>
          Created a voice-activated prompt response for Alexa to say the time aloud 5 seconds 
          after an alarm starts ringing via sending notification topics between the cloud and Alexa devices.
          Configured the AWS services to the notification publishers and handlers in Java. Collaborated 
          with members of the Alexa Alarms team in an Agile environment.
        </>
    />
    
    <CardWithLogo
      logo='/logos/ca.png'
      title='Software engineer intern'
      org='Curriculum Associates'
      link='https://www.curriculumassociates.com/'
      date='Summer 2021'
      text=
        <>
          Implemented an automation tool to create Selenium tests for the interactive elements of 
          the Curriculum Associates website.
        </>
    />
  </section>
);

export default Experience;
