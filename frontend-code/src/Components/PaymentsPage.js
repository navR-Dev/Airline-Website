import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  const navigate = useNavigate();
  const [bookingID, setBookingID] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");

  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    const validatedValue = value.replace(/\D/g, "").slice(0, 16); // Allow only digits and limit to 16
    setCardNumber(validatedValue);
  };

  const handleCardNameChange = (e) => {
    const value = e.target.value;
    const validatedValue = value.replace(/[^a-zA-Z ]/g, "").slice(0, 50); // Allow only letters and spaces, limit to 50
    setCardName(validatedValue);
  };

  /*const handleExpiryDateChange = (e) => {
    const value = e.target.value;
    // Validate MM/YY format and check if it's a valid future date
    const currentDate = new Date();
    const [month, year] = value.split("/");
    const inputDate = new Date(`20${year}`, month - 1); // Assuming years will be in the 2000s

    if (
      value.match(/^\d{2}\/\d{2}$/) &&
      inputDate > currentDate &&
      inputDate.getMonth() + 1 === parseInt(month, 10)
    ) {
      setExpiryDate(value);
    }
  };*/

  const handleCVVChange = (e) => {
    const value = e.target.value;
    const validatedValue = value.replace(/\D/g, "").slice(0, 3); // Allow only digits and limit to 3
    setCVV(validatedValue);
  };

  const handleBookingIDChange = (e) => {
    const value = e.target.value;
    const validatedValue = value.replace(/\D/g, ""); // Allow only digits
    setBookingID(validatedValue);
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    console.log(bookingID);

    try {
      const response = await fetch(
        "http://localhost:5000/airline/api/payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ bookingID }),
        }
      );

      if (response.ok) {
        alert("Successful payment");
        navigate("/web-checkin");
      } else if (response.status === 404) {
        alert("No booking exists for that ID");
      } else if (response.status === 400) {
        alert("Bad request - Please check your input");
      } else if (response.status === 500) {
        alert("Server error - Please try again later");
      } else {
        throw new Error("Payment failed");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <form onSubmit={handlePayment}>
      <div>
        <label>
          Booking ID:
          <input
            type="text"
            value={bookingID}
            onChange={handleBookingIDChange}
            pattern="\d*"
            title="Please enter only numbers"
            required
          />
        </label>
      </div>
      <div>
        <label>
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            pattern="\d*"
            title="Please enter only numbers"
            maxLength="16"
            required
          />
        </label>
      </div>
      <div>
        <label>
          Cardholder Name:
          <input
            type="text"
            value={cardName}
            onChange={handleCardNameChange}
            pattern="[A-Za-z ]*"
            title="Please enter only alphabets and spaces"
            maxLength="50"
            required
          />
        </label>
      </div>
      {/*<div>
        <label>
          Expiry Date:
          <input
            type="text"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            placeholder="MM/YY"
            pattern="\d{2}/\d{2}"
            title="Please enter valid MM/YY format"
            required
          />
        </label>
  </div>*/}
      <div>
        <label>
          CVV:
          <input
            type="text"
            value={cvv}
            onChange={handleCVVChange}
            pattern="\d*"
            title="Please enter only numbers"
            maxLength="3"
            required
          />
        </label>
      </div>
      <button type="submit">Pay</button>
    </form>
  );
};

export default PaymentForm;
