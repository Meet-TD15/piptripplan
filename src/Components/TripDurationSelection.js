// src/Components/TripDurationSelection.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import './TripDurationSelection.css';

const TripDurationSelection = () => {
  const [journeyStartDate, setJourneyStartDate] = useState(new Date());
  const [returnJourneyDate, setReturnJourneyDate] = useState(new Date());
  const navigate = useNavigate();

  const handleSelectDestinations = () => {
    navigate('/destinations');
  };

  return (
    <div className="trip-duration-selection">
      <div className="duration-container">
        <div className="journey-section">
          <h2>Journey Start</h2>
          <div className="date-time-picker">
            <label htmlFor="journey-start">Select Journey Date and Time:</label>
            <DatePicker
              selected={journeyStartDate}
              onChange={(date) => setJourneyStartDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="Time"
              id="journey-start"
            />
          </div>
        </div>

        <div className="return-section">
          <h2>Return Journey</h2>
          <div className="date-time-picker">
            <label htmlFor="return-journey">Select Return Date and Time:</label>
            <DatePicker
              selected={returnJourneyDate}
              onChange={(date) => setReturnJourneyDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="Time"
              id="return-journey"
            />
          </div>
        </div>
      </div>

      <div className="button-container">
        <button className="select-destinations-button" onClick={handleSelectDestinations}>
          Select Destinations
        </button>
      </div>
    </div>
  );
};

export default TripDurationSelection;
