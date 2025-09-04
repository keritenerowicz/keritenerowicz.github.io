import type { ReactNode } from 'react';
import './styles.css';

type Experience = {
  title?: string;
  date: string;
  text: ReactNode;
}

const ExperienceCard = ({ logo, org, link, experiences }: {
  logo: string;
  org: string;
  link: string;
  experiences: Experience[];
}) => (
  <div className="insetCard">
    <a className='logo' href={link} target='_blank' rel='noopener noreferrer'>
      <img src={logo} alt="Logo" className="logo" />
    </a>
    {experiences.map((exp, index) => {
      const shouldShowTitle = !exp.title || index === 0 || experiences[index - 1].title !== exp.title;
      return (
        <div key={index}>
          <span className='titleDate'>
            <p className='title'>
              {shouldShowTitle ? (
                exp.title ? (
                  <>{exp.title} at <a href={link} target='_blank' rel='noopener noreferrer'>{org}</a></>
                ) : (
                  <a href={link} target='_blank' rel='noopener noreferrer'>{org}</a>
                )
              ) : (
                <></>
              )}
            </p>
            <p className='date'>{exp.date}</p>
          </span>
          <div className='body'>{exp.text}</div>
        </div>
      );
    })}
  </div>
);

export default ExperienceCard;