import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate(); // ✅ hook for navigation

  return (
    <div className="dashboard">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">WPLMS</div>
        <ul className="nav-links">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/courses")}>Courses</li>
          <li onClick={() => navigate("/blog")}>Blog</li>
          <li onClick={() => navigate("/pages")}>Pages</li>
        </ul>
        <button
          className="nvlogin-btn"
          onClick={() => navigate("/login")} // ✅ navigates to /login
        >
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
          <h1>The Best Software for eLearning Sites.</h1>
          <p>With over 11,000 customers, millions of users are using WPLMS.</p>
          <button className="cta-btn">Get started with WPLMS</button>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <div className="category">📊 Business</div>
        <div className="category">🌐 Language</div>
        <div className="category">📈 Marketing</div>
        <div className="category">📷 Photography</div>
        <div className="category">💻 Software</div>
        <div className="category">⚙ Technology</div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature">
          <h3>#1 Popular theme</h3>
          <p>
            WPLMS is the most popular theme in Education category and has been
            the best seller every week.
          </p>
        </div>
        <div className="feature">
          <h3>Most Feature Rich</h3>
          <p>
            The most feature rich theme on ThemeForest, WPLMS comes without any
            additional costs and unlimited features.
          </p>
        </div>
        <div className="feature">
          <h3>Scalable and Secure</h3>
          <p>
            The learning management system is scalable and secure which
            guarantees enjoyment for all users.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta">
        <h2>The best Education theme of all time.</h2>
        <p>
          Learning Management System suitable for Training centers, Schools,
          Colleges and much more.
        </p>
        <button className="cta-btn">
          Get started with online education now
        </button>
      </section>
    </div>
  );
};

export default Dashboard;
