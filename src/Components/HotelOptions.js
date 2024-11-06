import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import './HotelOptions.css'; // Custom CSS for additional styling

const hotelOptions = [
  {
    title: "Luxury Hotels",
    description: "Enjoy a lavish stay with top-notch facilities.",
    facilities: ["Spa", "Fine Dining", "Swimming Pool", "Gym"],
    imageUrl: "https://example.com/luxury-hotel.jpg", // Replace with actual image URL
  },
  {
    title: "Flagship Hotels",
    description: "Stay in comfortable hotels with great services.",
    facilities: ["Free Wi-Fi", "Restaurant", "Family Area"],
    imageUrl: "https://example.com/flagship-hotel.jpg", // Replace with actual image URL
  },
  {
    title: "Tight Budget Hotels",
    description: "Affordable stays with essential amenities.",
    facilities: ["Clean Rooms", "24/7 Reception", "Basic Breakfast"],
    imageUrl: "https://example.com/budget-hotel.jpg", // Replace with actual image URL
  },
];

const HotelOptions = () => {
  const [selectedBudget, setSelectedBudget] = useState('');

  const handleBudgetSelect = (budget) => {
    setSelectedBudget(budget);
  };

  return (
    <div className="hotel-options">
      <h1 className="text-center">Select Your Hotel Budget</h1>
      <div className="text-center mb-4">
        <Button variant="primary" onClick={() => handleBudgetSelect('Luxury')}>
          Luxury Hotels
        </Button>
        <Button variant="secondary" onClick={() => handleBudgetSelect('Flagship')} className="mx-2">
          Flagship Hotels
        </Button>
        <Button variant="success" onClick={() => handleBudgetSelect('Budget')}>
          Tight Budget Hotels
        </Button>
      </div>
      
      {selectedBudget && (
        <>
          <h2 className="text-center mt-4">Available {selectedBudget} Hotels</h2>
          <Row className="justify-content-center">
            {hotelOptions
              .filter(option => 
                (selectedBudget === 'Luxury' && option.title === 'Luxury Hotels') ||
                (selectedBudget === 'Flagship' && option.title === 'Flagship Hotels') ||
                (selectedBudget === 'Budget' && option.title === 'Tight Budget Hotels')
              )
              .map((option, index) => (
                <Col md={4} key={index} className="mb-4">
                  <Card className="hotel-card">
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
                      <Card.Text>{option.description}</Card.Text>
                      <h5>Facilities:</h5>
                      <ul>
                        {option.facilities.map((facility, i) => (
                          <li key={i}>{facility}</li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </>
      )}
    </div>
  );
};

export default HotelOptions;
