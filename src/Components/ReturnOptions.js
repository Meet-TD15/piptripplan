import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';


import rroad from '../assets/images/rroad.png';
import rtrain from '../assets/images/rtrain.png';
import rflight from '../assets/images/rflight.png';


const returnJourneyOptions = [
  {
    title: "Return by Road",
    description: "Travel back by private or public vehicle.",
    imageUrl: rroad, // Replace with actual image URL
  },
  {
    title: "Return by Train",
    description: "Experience a scenic train journey back home.",
    imageUrl: rtrain, // Replace with actual image URL
  },
  {
    title: "Return by Flight",
    description: "Fly back to your destination quickly and comfortably.",
    imageUrl: rflight, // Replace with actual image URL
  },
];

const ReturnOptions = () => {
  return (
    <div className="return-options">
      <h1 className="text-center">Return Journey Options</h1>
      <Row className="justify-content-center">
        {returnJourneyOptions.map((option, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <div
                className="card-background"
                style={{
                  backgroundImage: `url(${option.imageUrl})`,
                  height: '200px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <Card.Body>
                <Card.Title>{option.title}</Card.Title>
                <Card.Text>{option.description}</Card.Text>
                <Button variant="primary">Select</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ReturnOptions;
