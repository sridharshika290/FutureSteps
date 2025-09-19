import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./RegisterPage.css";

function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "STUDENT"
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await axios.post("http://localhost:8080/api/auth/register", form);
      navigate("/login");
    } catch (err) {
      setError("Registration failed");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        {/* Left image */}
        <div className="register-left"></div>

        {/* Right form */}
        <div className="register-right">
          <div className="register-logo">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo" />
            <h3>Company Logo</h3>
          </div>

          <h2 className="register-title">Create Your Account</h2>
          <p className="register-subtitle">
            Join us today! Fill out the form to get started.
          </p>

          {error && <p style={{ color: "red", fontSize: "13px" }}>{error}</p>}

          <form className="register-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
            >
              <option value="ADMIN">Admin</option>
              <option value="STUDENT">Student</option>
            </select>
            <button type="submit" className="register-btn">Register</button>
          </form>

          <div className="register-footer">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
