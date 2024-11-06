import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// Import images
import imgHero1 from '../assets/images/img-hero1.jpg';
import imgHero2 from '../assets/images/img-hero2.jpg';
import imgHero3 from '../assets/images/img-hero3.jpg';
import imgHero4 from '../assets/images/img-hero4.jpg';

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <section id="landing" className="landing-section">
      <Carousel>
        <Carousel.Item>
          <div
            className="carousel-background"
            style={{
              backgroundImage: `url(${imgHero1})`, // Use imported image
              height: '400px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Carousel.Caption>
              <h3>Explore New Horizons</h3>
              <p>Your adventure begins here.</p>
              <Button variant="primary" onClick={() => navigate('/trip-duration')}>
                Start Planning
              </Button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="carousel-background"
            style={{
              backgroundImage: `url(${imgHero2})`, // Use imported image
              height: '400px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Carousel.Caption>
              <h3>Adventure Awaits</h3>
              <p>Join us on an unforgettable journey.</p>
              <Button variant="primary" onClick={() => navigate('/trip-duration')}>
                Start Planning
              </Button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="carousel-background"
            style={{
              backgroundImage: `url(${imgHero3})`, // Use imported image
              height: '400px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Carousel.Caption>
              <h3>Relax and Unwind</h3>
              <p>Find your perfect getaway.</p>
              <Button variant="primary" onClick={() => navigate('/trip-duration')}>
                Start Planning
              </Button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="carousel-background"
            style={{
              backgroundImage: `url(${imgHero4})`, // Use imported image
              height: '400px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Carousel.Caption>
              <h3>Discover Hidden Gems</h3>
              <p>Explore places off the beaten path.</p>
              <Button variant="primary" onClick={() => navigate('/trip-duration')}>
                Start Planning
              </Button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default LandingPage;
