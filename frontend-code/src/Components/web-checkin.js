// import React from "react";
// import * as Yup from "yup";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { FormGroup, FormControl, Button, FormLabel } from "react-bootstrap";
// import EditStudent from "./edit-student.component";
// // import "./webcheckin.css"

// const WebCheckIn = (props) => {
// const validationSchema = Yup.object().shape({
// 	Username: Yup.string().required("Username is required"),
// 	email: Yup.string()
// 	.email("You have enter an invalid email address")
// 	.required("Required"),
// 	Password: Yup.string().required("Password is required"),
// });
// console.log(props);
// return (
// 	<div className="form-wrapper">

// 	<Formik {...props} validationSchema={validationSchema}>
// 		<Form>
// 		<FormGroup>
// 		<FormLabel for="email">Email</FormLabel>
// 			<Field name="email" type="text"
// 				className="form-control" id="email" />
// 			<ErrorMessage
// 			name="email"
// 			className="d-block invalid-feedback"
// 			component="span"
// 			/>
// 		</FormGroup>
// 		<FormGroup>
// 		<FormLabel for="flightno">Flight Number</FormLabel>
// 			<Field name="flightno" type="text"
// 				className="form-control" id="email"/>
// 			<ErrorMessage
// 			name="flightno"
// 			className="d-block invalid-feedback"
// 			component="span"
// 			/>
// 		</FormGroup>
// 		<Button variant="danger" size="lg"
// 			block="block" type="submit">
// 			{props.children}
// 			Check-In
// 		</Button>
// 		</Form>
// 	</Formik>
// 	</div>
// );
// };

// export default WebCheckIn

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingForm.css";

function WebCheckIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bookingid: 0,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    let session = fetch("http://localhost:5000/airline/api/user").then(
      (res) => {
        if (res.status === 200) {
          let res2 = fetch("http://localhost:5000/airline/api/checkin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              bookingid: formData.bookingid,
            }),
          }).then((res) => {
            if (res.status === 200) {
              alert("Successfully checked in");
            } else if (res.status === 400) {
              alert("You have already checked in!");
            } else if (res.status === 404) {
              alert("Booking not found!");
            } else {
              alert("Server Error");
            }
          });
        } else {
          alert("You have not logged in!!");
          navigate("/Login");
        }
      }
    );
  };
  return (
    <div className="booking-form">
      <form id="booking-form" onSubmit={handleSubmit}>
        <div className="flightno">
          <label>
            Booking ID:
            <input
              type="text"
              name="bookingid"
              id="bookingid"
              onChange={(e) =>
                setFormData({ ...formData, bookingid: e.target.value })
              }
            />
          </label>
        </div>

        <div className="submit-button">
          <button
            style={{ backgroundColor: "green" }}
            type="submit"
            id="submit"
          >
            Check-In
          </button>
        </div>
      </form>
    </div>
  );
}

export default WebCheckIn;
