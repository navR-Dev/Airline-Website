// src/components/BookingForm.js
import React, { useState, useEffect } from "react";
//import "./BookingForm.css";

function BookingForm() {
  const [formData, setFormData] = useState({
    source: "",
    destination: "",
    passengers: 1,
    departureDate: "",
    returnDate: "",
    studentFare: false,
    armedForcesFare: false,
    seniorCitizenFare: false,
    tripType: "one-way",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serializedBody = JSON.stringify(formData);
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //"Content-Type": "application/x-www-form-urlencoded",
      },
      body: serializedBody,
    };
    console.log(formData);
    fetch("http://localhost:5000/airline/api/bookings", fetchOptions);
  };

  return (
    <div className="booking-form">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="Source">
            <label>
              Source:
              <input
                type="text"
                name="source"
                value={formData.source}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <div className="Destination">
            <label>
              Destination:
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
              />
            </label>
          </div>
        </div>
        <div>
          <label>
            Number of Passengers:
            <input
              type="number"
              name="passengers"
              value={formData.passengers}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Departure Date:
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Return Date:
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <label>
          Special Fares:
          <div>
            <label>
              <input
                type="radio"
                name="studentFare"
                checked={formData.studentFare}
                onChange={handleInputChange}
              />
              Student
            </label>

            <label>
              <input
                type="radio"
                name="armedForcesFare"
                checked={formData.armedForcesFare}
                onChange={handleInputChange}
              />
              Armed Forces
            </label>

            <label>
              <input
                type="radio"
                name="seniorCitizenFare"
                checked={formData.seniorCitizenFare}
                onChange={handleInputChange}
              />
              Senior Citizen
            </label>
          </div>
        </label>

        <label>
          Trip Type:
          <select
            name="tripType"
            value={formData.tripType}
            onChange={handleInputChange}
          >
            <option value="one-way">One Way</option>
            <option value="round-trip">Round Trip</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export { BookingForm };
