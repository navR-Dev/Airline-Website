import React from "react";

const FlightTable = ({ flights, tableTitle }) => {
  return (
    <div className="flight-table">
      <h2>{tableTitle}</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
          border: "1px solid #ddd",
        }}
      >
        <thead>
          <tr>
            <th style={tableCellStyle}>Trip Type</th>
            <th style={tableCellStyle}>From</th>
            <th style={tableCellStyle}>To</th>
            <th style={tableCellStyle}>Departure Date</th>
            <th style={tableCellStyle}>Departing Time</th>
            <th style={tableCellStyle}>Arriving Time</th>
            <th style={tableCellStyle}>Flight No</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.flightNo}>
              <td style={tableCellStyle}>{flight.tripType}</td>
              <td style={tableCellStyle}>{flight.from}</td>
              <td style={tableCellStyle}>{flight.to}</td>
              <td style={tableCellStyle}>{flight.departureDate}</td>
              <td style={tableCellStyle}>{flight.departingTime}</td>
              <td style={tableCellStyle}>{flight.arrivingTime}</td>
              <td style={tableCellStyle}>{flight.flightNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableCellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
};

const FlightSelection = () => {
  const departingFlights = [
    // Example data for departing flights
    {
      tripType: "One Way",
      from: "City A",
      to: "City B",
      departureDate: "2023-12-01",
      departingTime: "08:00 AM",
      arrivingTime: "10:00 AM",
      flightNo: "ABC123",
    },
    // Add more departing flights as needed
  ];

  const arrivingFlights = [
    // Example data for arriving flights
    {
      tripType: "Round Trip",
      from: "City X",
      to: "City Y",
      departureDate: "2023-12-05",
      departingTime: "12:00 PM",
      arrivingTime: "02:00 PM",
      flightNo: "XYZ456",
    },
    // Add more arriving flights as needed
  ];

  return (
    <div
      className="app"
      style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}
    >
      <FlightTable flights={departingFlights} tableTitle="Departing Flights" />
      <div style={{ marginTop: "40px" }}></div>
      <FlightTable flights={arrivingFlights} tableTitle="Arriving Flights" />
    </div>
  );
};

export default FlightSelection;
