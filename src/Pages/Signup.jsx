import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("buyer");

  const handleSignup = async () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/signup",
        {
          name,
          email,
          password,
          role,
        }
      );

      alert(res.data || "Account created successfully");
      navigate("/login");
    } catch (err) {
      alert(
        err.response?.data ||
          "Error creating account"
      );
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="input-field"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Email Address"
          className="input-field"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <select
          className="input-field"
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
        >
          <option value="buyer">Buyer</option>
          <option value="owner">Owner</option>
        </select>

        <button
          className="continue-btn"
          onClick={handleSignup}
        >
          Sign Up
        </button>

        <p style={{ marginTop: "15px" }}>
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;