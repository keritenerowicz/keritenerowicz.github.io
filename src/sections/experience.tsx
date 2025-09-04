import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ExperienceCard from '../components/Card';

const Experience = () => (
  <section id='experience'>
    <Card className='card'>
      <CardContent className='cardContent'>
        <h1>Experience</h1>

        <ExperienceCard
          logo='/logos/meraki.png'
          org='Cisco Meraki'
          link='https://meraki.cisco.com/'
          experiences={[
            {
              title: 'Software engineer',
              date: '2023 - Present',
              text: (
                <>
                  Currently working on the Meraki Dashboard and Vision Portal, two web applications that 
                  allow users to manage their network and monitor their cameras.
                </>
              )
            },
            {
              title: 'Software engineer intern',
              date: 'Fall 2022',
              text: (
                <>
                  Implemented a popover tour framework using Intro.js in JavaScript with React to introduce 
                  a user to new features of the website. Added testing for the feature and deployed it to 
                  Vision Portal users via a Network Feature Override. Completed work on UI improvements, 
                  streaming playback quality, and inconsistent browser errors.
                </>
              )
            },
            {
              title: 'Software engineer intern',
              date: 'Spring 2022',
              text: (
                <>
                  Developed a polygon selection tool for camera views using React Redux, with data saved to 
                  PostgreSQL and analyzed in Ruby on Rails. Deployed the tool to Meraki devices via a Network 
                  Feature Override. Collaborated across the stack with developers, designers, and product 
                  managers on the front end team.
                </>
              )
            }
          ]}
        />

        <ExperienceCard
          logo='/logos/amazon.png'
          org='Amazon'
          link='https://www.aboutamazon.com/'
          experiences={[
            {
              title: 'Software engineer intern',
              date: 'Summer 2022',
              text: (
                <>
                  Created a voice-activated prompt response for Alexa to say the time aloud 5 seconds 
                  after an alarm starts ringing via sending notification topics between the cloud and Alexa devices.
                  Configured the AWS services to the notification publishers and handlers in Java. Collaborated 
                  with members of the Alexa Alarms team in an Agile environment.
                </>
              )
            }
          ]}
        />
        
        <ExperienceCard
          logo='/logos/ca.png'
          org='Curriculum Associates'
          link='https://www.curriculumassociates.com/'
          experiences={[
            {
              title: 'Software engineer intern',
              date: 'Summer 2021',
              text: (
                <>
                  Implemented an automation tool to create Selenium tests for the interactive elements of 
                  the Curriculum Associates website.
                </>
              )
            }
          ]}
        />
      </CardContent>
    </Card>
  </section>
);

export default Experience;
