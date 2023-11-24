// App.js

import React, { useState } from "react";
import "./spam.css";

const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(
    amount
  );

const FoodItem = ({ name, price, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    onQuantityChange(name, quantity + 1, price);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      onQuantityChange(name, quantity - 1, price);
    }
  };

  return (
    <div className="food-item">
      <img src={`path/to/${name}.jpg`} alt={name} className="food-image" />
      <div className="food-details">
        <div className="food-name">{name}</div>
        <div className="food-price">{formatCurrency(price)}</div>
        <div className="quantity-control">
          <button onClick={handleDecrement} className="quantity-button">
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button onClick={handleIncrement} className="quantity-button">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

const FoodForm = ({ orderDetails, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [bookingId, setBookingId] = useState("");

  const handleSubmit = () => {
    const total = orderDetails.reduce((acc, item) => acc + item.subtotal, 0);
    const data = {
      email,
      bookingId,
      total,
      orderDetails,
    };

    console.log(data);

    setEmail("");
    setBookingId("");

    onSubmit(data);
  };

  return (
    <div className="food-form">
      <div className="total-price">
        Total Price:{" "}
        {formatCurrency(
          orderDetails.reduce((acc, item) => acc + item.subtotal, 0)
        )}
      </div>
      <div className="form-field">
        <label>Email ID:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label>Booking ID:</label>
        <input
          type="text"
          value={bookingId}
          onChange={(e) => setBookingId(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit} className="submit-button">
        Submit
      </button>
    </div>
  );
};

const Food = () => {
  const [orderDetails, setOrderDetails] = useState([]);

  const handleQuantityChange = (name, quantity, price) => {
    const existingItemIndex = orderDetails.findIndex(
      (item) => item.name === name
    );

    if (existingItemIndex !== -1) {
      const updatedOrder = [...orderDetails];
      updatedOrder[existingItemIndex] = {
        name,
        quantity,
        price,
        subtotal: quantity * price,
      };
      setOrderDetails(updatedOrder);
    } else {
      setOrderDetails([
        ...orderDetails,
        { name, quantity, price, subtotal: quantity * price },
      ]);
    }
  };

  const handleSubmit = (data) => {
    console.log("Order submitted:", data);
  };

  return (
    <div className="app-container">
      <div className="food-items">
        <FoodItem
          name="Burger"
          price={400}
          onQuantityChange={handleQuantityChange}
        />
        <FoodItem
          name="Pizza"
          price={700}
          onQuantityChange={handleQuantityChange}
        />
        <FoodItem
          name="Salad"
          price={250}
          onQuantityChange={handleQuantityChange}
        />
      </div>
      <FoodForm orderDetails={orderDetails} onSubmit={handleSubmit} />
    </div>
  );
};

export default Food;
