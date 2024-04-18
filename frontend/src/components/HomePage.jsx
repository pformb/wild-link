import '../styles/HomePage.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const HomePage = () => {

  return (
    <div className="home-page">
      <img className="home-cover" src="/home-cover-photo.png" alt="home" />

          <h1>Welcome to Wild Link</h1>
          <p className="description">
            Wild Link is a groundbreaking web application designed to harness the power of
            collective goodwill for the conservation of wildlife.
            Much like popular crowdfunding platforms, Wild Link
            provides a seamless interface for users to create
            and support campaigns dedicated solely to wildlife causes.
            Whether it's protecting endangered species, preserving
            vital habitats, or funding research initiatives, Wild Link
            empowers users to directly contribute to the well-being of our
            planet's diverse flora and fauna. With its intuitive design and
            robust features, Wild Link serves as a virtual hub where passionate
            individuals, organizations, and wildlife enthusiasts unite to make a
            tangible difference in the conservation efforts worldwide. Join the
            Wild Link community today and be a part of the movement to
            safeguard our planet's natural treasures for generations to come.
          </p>
       
        <img className="home-pic2" src="/home-page-pic2.png" alt="home" />

        <div class="content-container">
  <div class="content-left">
    <h2>Support Wildlife Rehabilitation</h2>
    <p class="support-wildlife">
      Supporting local wildlife rehabilitation efforts is vital for preserving 
      biodiversity and maintaining ecological balance. By assisting in the care
      of injured or orphaned wildlife, individuals contribute directly to the
      health of their local ecosystems. Moreover, these initiatives promote
      environmental awareness and conservation ethics within the community,
      fostering a deeper connection to nature.
    </p>
    <Link to="/donate" className="home-page__donate">Donate Now</Link>
  </div>
  <div class="content-right">
    <h2>Rehaber Needing Public Support?</h2>
    <p class='rehab-public-support'>
      We're excited to offer you the opportunity to utilize our
      app, Wild Link, for your conservation initiatives.
      With Wild Link, you can easily create and support
      campaigns dedicated to wildlife causes. Simply reach
      out to us, and we'll provide you with the necessary
      resources to get started. Let's work together to
      make a tangible difference in wildlife conservation.
      </p>
      <h3>Contact Us Today!</h3>
      </div>
      </div>
      </div>
        
  );
};

export default HomePage;
