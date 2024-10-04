// src/components/Login.js
import React, { useState } from "react";
import { login } from "../api";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Make sure to update the CSS for this layout
import honeyImage from '../Components/assets/Screenshot_2024-08-10_165436-removebg-preview.png';
import fishImage from '../Components/assets/pngtree-tray-with-the-small-dried-fish-picture-image_2484736-removebg-preview.png';



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });

      if (response.data.success) {
        navigate("/", { state: { user: response.data.user } });
      }
    } catch (error) {
      setError("Login failed. Please check your credentials.");
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Login Form Section */}
        <div className="login-form-container">
          <h2>Login</h2>
          {error && <p className="error-message">{error}</p>}
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              className="login-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              className="login-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button className="login-button" type="submit">
              Login
            </button>
            <p className="signup-link">
              Don't have an account? <a href="/signup">Sign up</a>
            </p>
          </form>
        </div>

        {/* Welcome and Images Section */}
        <div className="welcome-message">
          <h2>
            Welcome back to <span style={{ color: "#09bd18" }}>Green Mart</span>
          </h2>
          <p>
            Log in to continue exploring our handmade dry foods and cooking
            essentials.
          </p>
          <div className="image-container">
            <img src={honeyImage} alt="Honey Jar" className="welcome-image" />
            <img src={fishImage} alt="Dried Fish" className="welcome-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
