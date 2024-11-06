import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './TransportationOptions.css';

import troad from '../assets/images/troad.png';
import ttrain from '../assets/images/ttrain.png';
import tflight from '../assets/images/tflight.png';

// Custom CSS for additional styling

const transportationOptions = [
  {
    title: "By Road",
    caption: "Travel conveniently by private or public vehicles.",
    imageUrl: troad, // Directly use the imported image variable
  },
  {
    title: "By Train",
    caption: "Experience the scenic views while traveling by train.",
    imageUrl: ttrain, // Directly use the imported image variable
  },
  {
    title: "By Flight",
    caption: "Reach your destination quickly and comfortably by air.",
    imageUrl: tflight, // Directly use the imported image variable
  },
];

const TransportationOptions = () => {
  return (
    <div className="transportation-options">
      <h1 className="text-center">Select Your Transportation Option</h1>
      <Row className="justify-content-center">
        {transportationOptions.map((option, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="transportation-card">
              <div
                className="card-background"
                style={{
                  backgroundImage: `url(${option.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '200px',
                }}
              />
              <Card.Body>
                <Card.Title>{option.title}</Card.Title>
                <Card.Text>{option.caption}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TransportationOptions;
