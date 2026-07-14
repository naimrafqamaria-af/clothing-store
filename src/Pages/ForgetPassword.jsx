import React, { useState } from "react";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/forgot-password",
        { email }
      );

      alert(res.data.message);
    } catch (err) {
      alert("Something went wrong");
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Forgot Password</h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="continue-btn"
          onClick={handleForgotPassword}
        >
          Send Reset Link
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;