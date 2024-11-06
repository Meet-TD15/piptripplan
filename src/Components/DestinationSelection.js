import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './DestinationSelection.css';

const DestinationSelection = () => {
  const [destinations, setDestinations] = useState([]);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
      try {
        console.log("Attempting to fetch token...");
        const response = await axios.post(
          'https://test.api.amadeus.com/v1/security/oauth2/token',
          new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: process.env.REACT_APP_AMADEUS_API_KEY,
            client_secret: process.env.REACT_APP_AMADEUS_API_SECRET,
          })
        );
        setToken(response.data.access_token);
        console.log("Fetched Token:", response.data.access_token);
      } catch (error) {
        console.error("Error fetching token:", error.response?.data || error.message);
        setError("Failed to fetch API token. Please check your credentials.");
        setLoading(false);
      }
    };

    fetchToken();
  }, []);

  useEffect(() => {
    const fetchDestinations = async () => {
      if (!token) return;

      try {
        console.log("Attempting to fetch destinations with token:", token);
        const response = await axios.get(
          'https://test.api.amadeus.com/v1/reference-data/locations/pois',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              latitude: 48.8566,
              longitude: 2.3522,
              radius: 20,
              category: 'SIGHTS',
            },
          }
        );

        console.log("Fetched Destinations Data:", response.data);

        if (response.data.data && response.data.data.length > 0) {
          const fetchedDestinations = response.data.data.map((item) => ({
            title: item.name,
            caption: item.category,
            imageUrl: "https://example.com/placeholder.jpg",
          }));

          setDestinations(fetchedDestinations);
        } else {
          setError("No destinations found.");
        }
      } catch (error) {
        console.error("Error fetching destinations:", error.response?.data || error.message);
        setError(`Failed to fetch destinations. Error: ${error.response?.data?.errors[0]?.detail || 'Please try again later.'}`);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, [token]);

  return (
    <div className="destination-selection">
      <h1 className="text-center">Choose Your Destination</h1>
      {loading && <p>Loading destinations...</p>}
      {error && <p className="text-danger">{error}</p>}
      <Row className="justify-content-center">
        {destinations.length > 0 ? (
          destinations.map((destination, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="destination-card">
                <div
                  className="card-background"
                  style={{
                    backgroundImage: `url(${destination.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '200px',
                  }}
                />
                <Card.Body>
                  <Card.Title>{destination.title}</Card.Title>
                  <Card.Text>{destination.caption}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          !loading && <p>No destinations available.</p>
        )}
      </Row>
    </div>
  );
};

export default DestinationSelection;
