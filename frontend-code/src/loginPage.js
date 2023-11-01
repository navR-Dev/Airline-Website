import React from "react";

const LoginForm = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        fontFamily: "Arial, sans-serif",
        backgroundImage: `url('image.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "10px",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
          padding: "30px",
          width: "300px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "grey" }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="username"
            style={{ display: "block", marginTop: "20px", fontWeight: "bold" }}
          >
            Username:
          </label>
          <input type="text" id="username" name="username" required />
          <label
            htmlFor="password"
            style={{ display: "block", marginTop: "20px", fontWeight: "bold" }}
          >
            Password:
          </label>
          <input type="password" id="password" name="password" required />
          <input
            type="submit"
            value="Login"
            style={{
              width: "100%",
              backgroundColor: "orange",
              color: "green",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          />
        </form>
      </div>
    </div>
  );
};
