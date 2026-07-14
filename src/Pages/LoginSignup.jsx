import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function LoginSignup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/login",
        {
          email,
          password,
        }
      );

      // Save user information
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("email", email);

      if (res.data.name) {
        localStorage.setItem("name", res.data.name);
      }

      alert("Login successful");

      if (res.data.role === "owner") {
        navigate("/owner-dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      alert(err.response?.data || "Login failed");
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email Address"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="continue-btn"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="signup-text">
          Create an account?
          <Link to="/signup"> Click here</Link>
        </p>

        <p>
          <Link to="/forgot-password">
            Forgot Password?
          </Link>
        </p>

        <label className="terms">
          <input type="checkbox" />
          By continuing, I agree to the terms of use &
          privacy policy.
        </label>
      </div>
    </div>
  );
}

export default LoginSignup;