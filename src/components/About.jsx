
import React from "react";
import "./About.css";

const AboutIllustration = () => (
  <svg
    className="about-illustration"
    viewBox="0 0 520 440"
    role="img"
    aria-label="Illustration of a browser window and React development"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="aboutBlue" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#70c8ed" />
        <stop offset="100%" stopColor="#5968cf" />
      </linearGradient>
      <linearGradient id="aboutScreen" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#eaf4fc" />
      </linearGradient>
    </defs>

    <circle cx="270" cy="210" r="166" fill="#e1effb" />
    <circle cx="390" cy="104" r="24" fill="#c6e8f7" />
    <circle cx="105" cy="300" r="14" fill="#b7d9f1" />

    <ellipse
      cx="260"
      cy="224"
      rx="204"
      ry="166"
      fill="none"
      stroke="#b9d6ec"
      strokeWidth="1.5"
      strokeDasharray="5 8"
      transform="rotate(-18 260 224)"
    />

    <rect
      x="102"
      y="78"
      width="302"
      height="224"
      rx="18"
      fill="#c3d9eb"
      opacity="0.65"
      transform="rotate(-5 253 190)"
    />

    <g transform="rotate(-5 253 190)">
      <rect
        x="91"
        y="67"
        width="302"
        height="224"
        rx="17"
        fill="url(#aboutScreen)"
        stroke="#b7d1e6"
        strokeWidth="2"
      />

      <path
        d="M108 67 H376 Q393 67 393 84 V105 H91 V84 Q91 67 108 67Z"
        fill="#244b68"
      />

      <circle cx="110" cy="86" r="4" fill="#8fd9f2" />
      <circle cx="125" cy="86" r="4" fill="#8ca9e9" />
      <circle cx="140" cy="86" r="4" fill="#d0b8f4" />

      <rect x="119" y="129" width="51" height="8" rx="4" fill="#3476d4" />
      <rect x="181" y="129" width="88" height="8" rx="4" fill="#b4c9df" />
      <rect x="145" y="150" width="101" height="8" rx="4" fill="#9b83dc" />
      <rect x="257" y="150" width="91" height="8" rx="4" fill="#b4c9df" />
      <rect x="145" y="171" width="63" height="8" rx="4" fill="#00a8d6" />
      <rect x="219" y="171" width="112" height="8" rx="4" fill="#b4c9df" />
      <rect x="119" y="192" width="92" height="8" rx="4" fill="#b4c9df" />
      <rect x="222" y="192" width="68" height="8" rx="4" fill="#3476d4" />
      <rect x="145" y="213" width="130" height="8" rx="4" fill="#b4c9df" />

      <path
        d="M155 244 L143 255 L155 266 M174 244 L186 255 L174 266"
        fill="none"
        stroke="#3476d4"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M166 269 L174 241"
        fill="none"
        stroke="#00a8d6"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </g>

    <g transform="translate(345 270)">
      <circle r="39" fill="#ffffff" stroke="#d6e6f4" strokeWidth="2" />
      <g fill="none" stroke="url(#aboutBlue)" strokeWidth="3">
        <ellipse rx="24" ry="9" />
        <ellipse rx="24" ry="9" transform="rotate(60)" />
        <ellipse rx="24" ry="9" transform="rotate(120)" />
      </g>
      <circle r="4.5" fill="#3476d4" />
    </g>

    <path
      d="M422 153 L428 168 L443 174 L428 180 L422 195 L416 180 L401 174 L416 168Z"
      fill="#ffffff"
      stroke="#c5def1"
      strokeWidth="1.5"
    />

    <ellipse cx="258" cy="365" rx="155" ry="16" fill="#c8dff0" />

    <path
      d="M126 352 L137 303 L148 352"
      fill="none"
      stroke="#244b68"
      strokeWidth="4"
    />
    <path
      d="M137 321 C99 317 95 286 103 276 C128 281 141 299 137 321Z"
      fill="#72b7a1"
    />
    <path
      d="M138 314 C142 279 166 273 177 282 C171 305 154 315 138 314Z"
      fill="#4b9c88"
    />
    <path
      d="M137 335 C114 331 109 315 114 306 C133 310 140 322 137 335Z"
      fill="#82c9b0"
    />
    <path d="M119 352 H155 L149 372 H125Z" fill="#5b78c9" />
    <path d="M123 359 H152" stroke="#d9e8fa" strokeWidth="3" />

    <path d="M78 151 L87 160 L78 169 L69 160Z" fill="#76c9e7" />
  </svg>
);

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-visual">
            <div className="about-visual-label">
              <span className="about-label-dot" />
              MY DEVELOPMENT JOURNEY
            </div>

            <AboutIllustration />

            <div className="about-visual-caption">
              <span className="about-caption-mark">{"</>"}</span>
              <span>
                <strong>Built with curiosity.</strong>
                <small>Learning with every project.</small>
              </span>
            </div>
          </div>

          <div className="about-text">
            <span className="about-greeting">A Little About Me</span>

            <h2 className="about-title">
              Curious by nature,{" "}
              <span>always learning.</span>
            </h2>

            <p>
              I enjoy exploring new technologies, solving problems,
              and learning by building real projects. My journey
              into web development has helped me discover my
              interest in frontend development and the way
              thoughtful interfaces can improve the user experience.
            </p>

            <p>
              I’m currently strengthening my skills in React and
              JavaScript while exploring animations and visual
              design. Every project gives me a chance to learn
              something new and improve my approach.
            </p>

            <div className="about-focus">
              <span className="about-focus-dot" />
              <span>
                Currently growing my skills in React, JavaScript,
                and modern frontend development.
              </span>
            </div>

            <a href="#projects" className="about-btn">
              Explore My Projects
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>

      <div className="about-bottom-divider" aria-hidden="true">
        <span>ALWAYS LEARNING</span>
      </div>
    </section>
  );
};

export default About;
