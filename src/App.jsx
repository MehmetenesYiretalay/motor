import React, { useState } from 'react';
import './EnginePage.css';

const EnginePage = () => {
 const [selectedEngine, setSelectedEngine] = useState('petrol');

 const handleChange = (event) => {
    setSelectedEngine(event.target.value);
 };

 return (
    <div className="engine-page">
      <h2>Engine Type</h2>
      <select value={selectedEngine} onChange={handleChange}>
        <option value="petrol">Petrol</option>
        <option value="diesel">Diesel</option>
        <option value="electric">Electric</option>
      </select>

      {selectedEngine === 'petrol' && (
        <div className="engine-details">
          <h3>Petrol Engine Details</h3>
          <p>Capacity: 1.0 to 5.0 L</p>
          <p>Horsepower: 60 to 450 HP</p>
        </div>
      )}

      {selectedEngine === 'diesel' && (
        <div className="engine-details">
          <h3>Diesel Engine Details</h3>
          <p>Capacity: 1.5 to 6.0 L</p>
          <p>Horsepower: 80 to 550 HP</p>
        </div>
      )}

      {selectedEngine === 'electric' && (
        <div className="engine-details">
          <h3>Electric Engine Details</h3>
          <p>Battery Capacity: 50 to 300 kWh</p>
          <p>Motor Power: 150 to 300 kW</p>
        </div>
      )}
    </div>
 );
};

export default EnginePage;
