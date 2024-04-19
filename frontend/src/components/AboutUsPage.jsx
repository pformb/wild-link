import React from 'react';
import '../styles/AboutUsPage.scss'; 

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <div className="about-app">
        <h2>About Our App</h2>
        <p>Wild Link is a groundbreaking web application designed to harness the power of collective goodwill for the conservation of wildlife. Much like popular crowdfunding platforms, Wild Link provides a seamless interface for users to create and support campaigns dedicated solely to wildlife causes.</p>
      </div>
      <div className="dev-team">
        <h2>Dev Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="team-member1.jpg" alt="Team Member 1" />
            <div className="member-info">
              <h3>David Carmichael</h3>
              <p>John is our lead developer with years of experience in web development. He is passionate about creating innovative solutions to complex problems.</p>
            </div>
          </div>
          <div className="team-member">
            <img src="team-member2.jpg" alt="Team Member 2" />
            <div className="member-info">
              <h3>Desiree Ingram</h3>
              <p>Jane is our UX/UI designer. She has a keen eye for detail and focuses on creating intuitive user interfaces that enhance user experience.</p>
            </div>
          </div>
          <div className="team-member">
            <img src="team-member-paul.jpg" alt="Team Member 3" />
            <div className="member-info">
              <h3>Paul Formby</h3>
              <p>a web development student at LightHouse Labs bootcamp. I'm passionate about coding and enjoy crafting immersive web experiences. I thrive on challenges and believe in the power of collaboration. Outside of coding, I love exploring new technologies and the outdoors.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
