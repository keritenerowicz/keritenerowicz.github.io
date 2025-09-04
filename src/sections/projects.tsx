import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ExperienceCard from '../components/Card';

const Projects = () => (
  <section id='projects'>
    <Card className='card'>
      <CardContent className='cardContent'>
        <h1>Projects</h1>

        <ExperienceCard
          logo='/logos/crc.png'
          org='Combat Robotics at Cornell'
          link='https://combatrobotics.engineering.cornell.edu/'
          experiences={[
            {
              title: 'Firmware team lead',
              date: '2019 - 2021',
              text: (
                <>
                  CRC creates a few different robots each year and competes in the Rage in the Cage competition. 
                  The firmware subteam most recently worked on a sportsman bot in collaboration with one of the mechanical 
                  engineering subteams. This is a fully autonomous robot that attacks a robot opponent with the goal of 
                  destroying it and pushing it out of the arena. In the past, we've also worked on a <a 
                    href='https://www.youtube.com/watch?v=6lZtq3UJguw' target='_blank' rel='noopener noreferrer'>sumobot</a> with 
                  the primary goal of pushing its opponent out of the ring.
                </>
              )
            }
          ]}
        />

        <ExperienceCard
          logo='/logos/cusail.png'
          org='CUSail'
          link='https://cusail.engineering.cornell.edu/'
          experiences={[
            {
              title: 'Navigation team',
              date: '2019 - 2021',
              text: (
                <>
                  CUSail is an engineering project team that designs and manufactures an autonomous sailboat to compete 
                  in the SailBot International Robotic Sailboat Regatta. The boat competes in five events: Fleet Race, 
                  Endurance, Station Keeping, Precision Navigation, and Search. I worked on the boat's buoy detection, 
                  location, and navigation algorithms.
                </>
              )
            }
          ]}
        />

        <ExperienceCard
          logo='/logos/courseenroll.png'
          org='CourseEnroll'
          link='https://github.com/keritenerowicz/CourseEnroll'
          experiences={[
            {
              date: '2022',
              text: (
                <>
                  This program automates the enrollment process for Cornell's Student Center with Selenium in Python. 
                  It continually checks the student center webpage until enrollment opens, loops through the confirmation 
                  screens until the user is enrolled in all the chosen classes, then notifies the user when the process is 
                  complete. I undertook this project to learn about automation with Selenium in Python and to avoid the 
                  commotion of class enrollment periods.
                </>
              )
            }
          ]}
        />

        <ExperienceCard
          logo='/logos/uno.png'
          org='UNO Game'
          link='https://github.com/SamRod33/UNO_Game'
          experiences={[
            {
              date: '2021',
              text: (
                <>
                  I worked on a team of four people to recreate the game UNO in OCaml. We designed a pass and play 
                  style game with both single player (against the computer) and multiplayer options. Notable features 
                  include an intermission screen when switching between players in a multiplayer game, which displayed 
                  the most recently played cards to the next player, and a keyboard navigation operated GUI.
                </>
              )
            }
          ]}
        />

        <ExperienceCard
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
