// import React from "react";
// import { Link } from "react-router-dom";

// const formStyle = {
//   maxWidth: "500px",
//   margin: "0 auto",
//   padding: "20px",
//   borderRadius: "15px",
//   boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
// };

// const labelStyle = {
//   marginBottom: "5px",
//   fontSize: "18px",
//   color: "black",
//   display: "block", // Display labels above the input fields
// };

// const inputStyle = {
//   padding: "10px",
//   margin: "5px 0",
//   border: "none",
//   borderRadius: "8px",
//   Width:"1000px"
// };

// const buttonStyle = {
//   backgroundColor: "#4CAF50",
//   color: "white",
//   border: "none",
//   padding: "10px 20px",
//   borderRadius: "8px",
//   fontSize: "20px",
//   marginTop: "20px",
//   cursor: "pointer",
// };

// function Signup() {
//   return (
//     <div>
//     <div style={formStyle}>
//       <form>
//         <label htmlFor="username" style={labelStyle}>
//           Username
//         </label>
//         <input type="text" id="username" placeholder="Enter username" style={inputStyle} />

//         <label htmlFor="emailid" style={labelStyle}>
//           Email
//         </label>
//         <input type="email" id="emailid" placeholder="Enter email" style={inputStyle} />

//         <label htmlFor="password" style={labelStyle}>
//           Password
//         </label>
//         <input type="password" id="password" placeholder="Enter password" style={inputStyle} />
// <div>
//         <button type="submit" style={buttonStyle}>
//           Sign Up
//         </button>
// </div>
//       </form>
//       <Link to="/login">Already an existing user? Login here</Link>
//     </div>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const formStyle = {
  maxWidth: "300px",
  margin: "auto",
  paddingTop: "20px",
};

const labelStyle = {
  display: "block",
  marginBottom: "8px",
};

const buttonStyle = {
  backgroundColor: "#3498db",
  color: "white",
  padding: "10px 15px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  marginTop: "10px",
};

const linkStyle = {
  textDecoration: "none",
  color: "#3498db",
  marginLeft: "10px",
};

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSignup = (event) => {
    event.preventDefault();
    let res = fetch("http://localhost:5000/airline/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
      }),
    }).then((response) => {
      if (response.status == 200) {
        navigate("/BookingForm");
      } else {
        alert("User Already Exists!!!");
      }
    });
  };

  return (
    <div className="signup" style={formStyle}>
      <form onSubmit={handleSignup}>
        <label htmlFor="username" style={labelStyle}>
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email" style={labelStyle}>
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" style={labelStyle}>
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button type="submit" style={buttonStyle}>
            Sign Up
          </button>
        </div>
      </form>
      <p>
        <Link to="/login">Already have an account? Login</Link>
      </p>
    </div>
  );
}

export default Signup;
