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


import React from 'react';
import './BookingForm.css';

function BookingForm() {
  return (
    <div className="booking-form">
      <form id="booking-form">

        <div className="emailid">
          <label id="emailid">
			      Email:
            <input type="email" name="emailid" id="emailid"  />
          </label>
        </div>

        <div className="flightno">
          <label>
			      Flight Number:
            <input type="text" name="flightnumber" id="flightnumber" />
          </label>
        </div>

        <div className="flightno">
          <label>
			      Booking ID:
            <input type="text" name="bookingid" id="bookingid" />
          </label>
        </div>

        <div className="submit-button">
          <button style={{backgroundColor:"green"}} type="submit" id="submit">Check-In</button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
