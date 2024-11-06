import React from 'react';
import { Carousel } from 'react-bootstrap';
import imgHero1 from '../assets/images/img-hero1.jpg'; // Replace with actual image paths
import imgHero2 from '../assets/images/img-hero2.jpg'; // Replace with actual image paths
import imgHero3 from '../assets/images/img-hero3.jpg'; // Replace with actual image paths

const nearbyPlaces = [
  {
    title: "Beach Paradise",
    description: "Enjoy the sun and sand at this beautiful beach.",
    imageUrl: imgHero1,
  },
  {
    title: "Mountain Retreat",
    description: "Escape to the serene mountains for a peaceful getaway.",
    imageUrl: imgHero2,
  },
  {
    title: "Cultural Heritage Site",
    description: "Explore the rich history and architecture of this site.",
    imageUrl: imgHero3,
  },
];

const NearbyPlaces = () => {
  return (
    <div className="nearby-places">
      <h1 className="text-center">Nearby Places to Explore</h1>
      <Carousel>
        {nearbyPlaces.map((place, index) => (
          <Carousel.Item key={index}>
            <div
              className="carousel-background"
              style={{
                backgroundImage: `url(${place.imageUrl})`,
                height: '400px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <Carousel.Caption>
                <h3>{place.title}</h3>
                <p>{place.description}</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default NearbyPlaces;
