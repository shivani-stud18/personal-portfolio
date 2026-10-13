import React from "react";
import "./Hero.css";

import HeroImg from "../assets/lottie/hero_illustrator.json";
import Lottie from "lottie-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        <div className="hero-text">
          <div className="hero-greeting">
            <span className="wave" aria-hidden="true">
              👋
            </span>
            <span>Hello, I'm</span>
          </div>

          <h1 className="hero-name">
            Shivani <span>Kotwal</span>
          </h1>

          <h2 className="hero-role">
            <span className="code-symbol">&lt;</span>
            React Developer
            <span className="code-symbol">/&gt;</span>
          </h2>

          <p className="hero-description">
            I build responsive, interactive web experiences using React,
            JavaScript, HTML and CSS. I focus on creating clean interfaces,
            smooth interactions and user-friendly experiences across devices.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              <span>View My Projects</span>
              <FaArrowRight aria-hidden="true" />
            </a>

            <a
              href="/Shivani-Resume.pdf"
              download ="Shivani-Resume.pdf"
              className="secondary-btn"
            >
              <span>Download Resume</span>
              <FaDownload aria-hidden="true" />
            </a>
          </div>

          <div className="hero-socials">
            <span className="social-caption">Let's connect</span>

            <span className="social-line" aria-hidden="true" />

            <a
              href="https://github.com/shivani-stud18"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              className="social-link"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shivani-kotwal92/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
              className="social-link"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow" aria-hidden="true" />

          <div className="hero-artwork">
            <Lottie
              animationData={HeroImg}
              loop
              className="hero-illustration"
            />
          </div>

          <div className="hero-tag">
            <span className="hero-tag-dot" />
            <span>Design · Code · Create</span>
          </div>

          <span className="hero-decoration hero-decoration-one" aria-hidden="true">
            +
          </span>
          <span className="hero-decoration hero-decoration-two" aria-hidden="true">
            ✳
          </span>
        </div>
      </div>

      <div className="hero-bottom-divider" aria-hidden="true">
        <span />
      </div>
    </section>
  );
};

export default Hero;