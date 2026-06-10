import Card from '@mui/material/Card';
import ProfilePic from 'src/components/profilePic';
import Icons from 'src/components/Footer/icons';
import CardContent from '@mui/material/CardContent';

const About = () => (
  <section id='about' className='about' aria-labelledby='about-heading'>
    <Card className='card'>
      <CardContent className='cardContent'>
        <div className="aboutContainer">
          <div className="aboutText">
            <h1 id='about-heading'>👋 Hi, I'm Keri Tenerowicz!</h1>
            <div className='body'>
              <p>I'm a software engineer at <a href="https://meraki.cisco.com/" target="_blank">Cisco Meraki</a>, and my goal is to create software that makes a positive impact on the world.</p>
              <p>I graduated from Cornell University in 2023 with a BS in Computer Science. While at Cornell, I led the software team for <a href="https://combatrobotics.engineering.cornell.edu/" target="_blank">Combat Robotics at Cornell</a>, where we built robots that battled <em>to the death</em>. I was also a part of <a href="https://cusail.engineering.cornell.edu/" target="_blank">CUSail</a>, working on an autonomous sailboat for the SailBot International Robotic Sailboat Regatta. Outside of engineering, I practiced performance martial arts with <a href="https://www.instagram.com/cornellwushu/" target="_blank">Cornell Wushu</a> and made amazing memories with the <a href="https://www.instagram.com/apogamma" target="_blank">Alpha Phi Omega</a> Gamma chapter.</p>  
              <p>Here in San Francisco, I'm a violinist and the social media manager for <a href="https://www.symphonyparnassus.org/" target="_blank">Symphony Parnassus</a>, as well as a mentor for high school students through <a href="https://www.mindsmatterbay.org/" target="_blank">Minds Matter</a>. If you'd like to reach out, you can find my email, socials, and resume below. I'd love to hear from you!</p>
            </div>
          </div>
          <div className="aboutImage" role="img" aria-label="Profile picture of Keri Tenerowicz">
            <ProfilePic />
          </div>
        </div>
        <Icons />
      </CardContent>
    </Card>
  </section>
);

export default About;
