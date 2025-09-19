import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", form);
      const { role } = res.data;

      localStorage.setItem("user", JSON.stringify(res.data));

      if (role === "ADMIN") navigate("/dashboard?role=admin");
      else navigate("/dashboard?role=student");
    } catch (err) {
      setError("Invalid Credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Left image */}
        <div className="login-left"></div>

        {/* Right form */}
        <div className="login-right">
          <div className="login-logo">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo" />
            <h3>Company Logo</h3>
          </div>

          <h2 className="login-title">Let the Journey Begin!</h2>
          <p className="login-subtitle">
            Unlock a world of education with a single click! Please login to your account.
          </p>

          {error && <p style={{ color: "red", fontSize: "13px" }}>{error}</p>}

          <form className="login-form" onSubmit={handleSubmit}>
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
            <div className="login-options">
              <div></div>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>

          <div className="login-footer">
            Don’t have an account? <Link to="/register">Sign Up For Free</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
