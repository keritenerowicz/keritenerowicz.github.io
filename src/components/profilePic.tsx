import { useState } from 'react';
import { PROFILE_IMAGES } from 'src/constants/profileImages';
import 'src/styles.css'

const pickRandomProfileImage = () => {
  const randomIndex = Math.floor(Math.random() * PROFILE_IMAGES.length);
  return `/me/${PROFILE_IMAGES[randomIndex]}`;
};

const ProfilePic = () => {
  const [profilePic] = useState(pickRandomProfileImage);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section id='profilePic'>
      <div className="profileContainer profileCircle">
        <img 
          ref={(img) => {
            if (img?.complete) setIsLoaded(true);
          }}
          src={profilePic}
          alt="Profile picture of Keri Tenerowicz"
          className={isLoaded ? 'profileImage profileImage--visible' : 'profileImage'}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </section>
  );
};

export default ProfilePic;
