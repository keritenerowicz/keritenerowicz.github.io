import { useState, useEffect } from 'react';
import { PROFILE_IMAGES, DEFAULT_PROFILE_IMAGE } from 'src/constants/profileImages';
import 'src/styles.css'

const ProfilePic = () => {
  const [profilePic, setProfilePic] = useState<string>(DEFAULT_PROFILE_IMAGE);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * PROFILE_IMAGES.length);
    setProfilePic(`/me/${PROFILE_IMAGES[randomIndex]}`);
  }, []);

  return (
    <section id='profilePic'>
      <div className="profileContainer profileCircle">
        <img 
          src={profilePic}
          alt="Profile picture of Keri Tenerowicz"
          className="profileImage"
        />
      </div>
    </section>
  );
};

export default ProfilePic;
