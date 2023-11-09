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

// function Login() {
//   return (
//     <div>
//     <div style={formStyle}>
//       <form>
//         <label htmlFor="username" style={labelStyle}>
//           Username
//         </label>
//         <input type="text" id="username" placeholder="Enter username" style={inputStyle} />

//         <label htmlFor="password" style={labelStyle}>
//           Password
//         </label>
//         <input type="password" id="password" placeholder="Enter password" style={inputStyle} />
// <div>
//         <button type="submit" style={buttonStyle}>
//           Login
//         </button>
// </div>
//       </form>
//       <Link to="/signup">New user? Sign up here!</Link>
//     </div>
//     </div>
//   );
// }

// export default Login;

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
  backgroundColor: "#4CAF50",
  color: "white",
  padding: "10px 15px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const linkStyle = {
  textDecoration: "none",
  color: "#4CAF50",
  marginLeft: "10px",
};

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    let res = fetch("http://localhost:5000/airline/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((response) => {
      if (response.status == 200) {
        navigate("/BookingForm");
      } else {
        alert("Login Failed!!!");
      }
    });
  };

  return (
    <div style={formStyle}>
      <form onSubmit={handleLogin}>
        <label htmlFor="username" style={labelStyle}>
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
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
            Login
          </button>
        </div>
      </form>
      <p>
        <Link to="/signup">Don't have an account? </Link>
      </p>
    </div>
  );
}

export default Login;
