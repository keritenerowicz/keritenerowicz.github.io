import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const About = () => (
  <section id='about' className='about'>
    <Card className='card'>
      <CardContent className='cardContent'>
        <h1>👋 Hi, I'm Keri Tenerowicz!</h1>
        <div className='body introBody'>
          <p>I'm a software engineer at <a href="https://meraki.cisco.com/" target="_blank">Cisco Meraki</a>, and 
            my goal is to create software that makes a positive impact on the world.</p>
          <p>I graduated from Cornell University in 2023 with a BS in Computer Science. While at Cornell, I led the 
            firmware team for <a href="https://combatrobotics.engineering.cornell.edu/"
            target="_blank">Combat Robotics at Cornell</a>, where we built robots that battled <em>to the death</em>. 
            I was also a part of <a href="https://cusail.engineering.cornell.edu/" target="_blank">CUSail</a>, 
            working on an autonomous sailboat for the SailBot International Robotic Sailboat Regatta. Outside of 
            engineering, I practiced performance martial arts with <a href="https://www.instagram.com/cornellwushu/"
            target="_blank">Cornell Wushu</a> and made amazing memories with the <a href="https://www.instagram.com/apogamma"
            target="_blank">Alpha Phi Omega</a> Gamma chapter.</p>  
          <p>These days, I'm playing violin with <a href="https://www.symphonyparnassus.org/"
            target="_blank">Symphony Parnassus</a> and mentoring high school students through <a href="https://www.mindsmatterbay.org/"
            target="_blank">Minds Matter</a>. If you'd like to reach out, you can find my email, socials, and
            resume at the bottom of the page. I'd love to hear from you! 💌</p>
        </div>
      </CardContent>
    </Card>
  </section>
);

export default About;
