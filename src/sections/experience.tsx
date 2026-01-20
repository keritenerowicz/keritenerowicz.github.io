import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import GenericCard from 'src/components/Card';

const Experience = () => (
  <section id='experience' aria-labelledby='experience-heading'>
    <Card className='card'>
      <CardContent className='cardContent'>
        <h1 id='experience-heading'>Experience</h1>

        <GenericCard
          logo='/logos/meraki.png'
          org='Cisco Meraki'
          link='https://meraki.cisco.com/'
          experiences={[
            {
              title: 'Software engineer',
              date: '2023 - Present',
              text: (
                <>
                  As a Software Engineer at Meraki, I led the modernization of the Camera pages on the Dashboard web application, transitioning legacy systems to React and RTK Query while achieving a 15-30 second reduction in page load times. I led end-to-end development for major initiatives like introducing a new camera model and extending the functionality of existing features, managing everything from functional specs to cross-team deployment. Beyond shipping code, I optimized team operations through automation, authored technical playbooks and documentation, and provided 1:1 mentorship to junior engineers.
                </>
              )
            },
            {
              title: 'Software engineer intern',
              date: 'Spring & Fall 2022',
              text: (
                <>
                  I collaborated across the stack with designers and PMs, optimized streaming playback quality, resolved browser-specific errors, and delivered UI improvements. In the Spring, I developed a polygon selection tool for camera views using React/Redux, Ruby on Rails, and PostgreSQL, deploying to Meraki devices via Network Feature Overrides. In the Fall, I built a user onboarding framework with Intro.js and React, implemented full testing suites, and deployed the feature to Vision Portal users.
                </>
              )
            }
          ]}
        />

        <GenericCard
          logo='/logos/amazon.png'
          org='Amazon'
          link='https://www.aboutamazon.com/'
          experiences={[
            {
              title: 'Software engineer intern',
              date: 'Summer 2022',
              text: (
                <>
                  I built a voice-activated Alexa feature using Java and AWS to announce the time 5 seconds after an alarm triggers and configured cloud-to-device notification topics, managing publishers and handlers to ensure low-latency responses. Working in an Agile environment, I also collaborated with the Alexa Alarms team to bridge cloud services with physical hardware.
                </>
              )
            }
          ]}
        />
        
        <GenericCard
          logo='/logos/ca.png'
          org='Curriculum Associates'
          link='https://www.curriculumassociates.com/'
          experiences={[
            {
              title: 'Software engineer intern',
              date: 'Summer 2021',
              text: (
                <>
                  I implemented an automation tool to create Selenium tests for the interactive elements of the Curriculum Associates website.
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
