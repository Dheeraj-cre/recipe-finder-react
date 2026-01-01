import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import {
  FaSearch,
  FaUtensils,
  FaRandom,
  FaMobileAlt,
  FaReact,
} from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { MdPublic } from "react-icons/md";

function About() {
  return (
    <>
      <Navbar />

      <section className="about-page">
        {/* HEADER */}
        <div className="about-header">
          <h1>About Everyday Chef</h1>
          <p>
            Everyday Chef is a modern recipe discovery app that helps you
            explore delicious meals quickly and easily — without sign-ups
            or complexity.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="feature-grid">
          <div className="feature-card">
            <FaSearch className="feature-icon" />
            <h3>Smart Search</h3>
            <p>Find recipes instantly by name or ingredient.</p>
          </div>

          <div className="feature-card">
            <FaUtensils className="feature-icon" />
            <h3>Category Browsing</h3>
            <p>Explore meals by category with visual cards.</p>
          </div>

          <div className="feature-card">
            <FaRandom className="feature-icon" />
            <h3>Random Recipe</h3>
            <p>Not sure what to cook? Get a surprise recipe.</p>
          </div>

          <div className="feature-card">
            <FaMobileAlt className="feature-icon" />
            <h3>Mobile Friendly</h3>
            <p>Fully responsive design for all devices.</p>
          </div>
        </div>

        {/* SPECIAL */}
        <div className="about-special">
          <h2>What makes it special?</h2>
          <ul>
            <li> Uses a free public recipe API</li>
            <li> Clean and modern UI</li>
            <li> No login or account required</li>
          </ul>
        </div>

        {/* TECH STACK */}
        <div className="about-tech">
          <h2>Tech Stack</h2>
          <div className="tech-list">
            <span>
              <FaReact /> React
            </span>
            <span>
              <SiCss3 /> CSS
            </span>
            <span>
              <MdPublic /> Public API
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
