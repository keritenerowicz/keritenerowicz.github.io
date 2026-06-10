import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import GenericCard from 'src/components/Card';

const Projects = () => (
  <section id='projects' aria-labelledby='projects-heading'>
    <Card className='card'>
      <CardContent className='cardContent'>
        <h1 id='projects-heading'>Projects</h1>

        <GenericCard
          logo='/logos/crc.png'
          org='Combat Robotics at Cornell'
          link='https://combatrobotics.engineering.cornell.edu/'
          experiences={[
            {
              title: 'Software team lead',
              date: '2019 - 2021',
              text: (
                <>
                  CRC creates a few different robots each year and competes in the Rage in the Cage competition. We created a <a href='https://www.youtube.com/watch?v=6lZtq3UJguw' target='_blank' rel='noopener noreferrer'>sumobot</a> in collaboration with the mechianical engineering team, whose primary goal was to push its opponent out of the ring. We chose sensors to detect other robots, read signals, and sent movement commands to the motors.
                </>
              )
            }
          ]}
        />

        <GenericCard
          logo='/logos/cusail.png'
          org='CUSail'
          link='https://cusail.engineering.cornell.edu/'
          experiences={[
            {
              title: 'Navigation team',
              date: '2019 - 2021',
              text: (
                <>
                  CUSail is an engineering project team that designs and manufactures an autonomous sailboat to compete in the SailBot International Robotic Sailboat Regatta. I worked on the boat's buoy detection, location, and navigation algorithms using CV2 in Python.
                </>
              )
            }
          ]}
        />

        <GenericCard
          logo='/logos/courseenroll.png'
          org='CourseEnroll'
          link='https://github.com/keritenerowicz/CourseEnroll'
          experiences={[
            {
              date: '2022',
              text: (
                <>
                  Developed an automated enrollment tool for Cornell's Student Center using Python and Selenium. The program monitors real-time enrollment status, executes automated multi-step confirmation loops for class registration, and provides completion notifications. This project was designed to streamline the registration process and master browser automation techniques.
                </>
              )
            }
          ]}
        />

        <GenericCard
          logo='/logos/honeybee.png'
          org='Honeybee Predictions'
          link='https://github.com/keritenerowicz/honeybee_predictions'
          experiences={[
            {
              date: '2020',
              text: (
                <>
                  <i>What is the value of honey production for each state?</i><br />I built a linear regression model which 
                  aims to clarify a relationship between environmental factors (location, honey producing colonies, yield per 
                  colony, production, year) and financial factors (stocks on December 15th, average price per pound).<br /><br />
                  <i>How does honey production vary by each state?</i><br />I built a classification model (kNN classifier) that was 
                  used to determine from what location each of the aforementioned factors was taken. I continued with a futher 
                  analysis of how effective this model was compared to a baseline of randomly generated predicitons.
                </>
              )
            }
          ]}
        />
      </CardContent>
    </Card>
  </section>
);

export default Projects;
