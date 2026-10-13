import "./TechStack.css";

const skills = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "GSAP",
  "Swiper.js",
  "Locomotive Scroll",
  "Git",
  "GitHub",
  "Vercel",
];

const decorations = [
  { symbol: "⚛", className: "deco-react", label: "React" },
  { symbol: "JS", className: "deco-js", label: "JavaScript" },
  { symbol: "</>", className: "deco-code", label: "Code" },
  { symbol: "✳", className: "deco-spark", label: "Creative UI" },
  { symbol: "✦", className: "deco-star", label: "Design" },
  { symbol: "{ }", className: "deco-braces", label: "Development" },
  { symbol: "CSS", className: "deco-css", label: "CSS" },
  { symbol: "⌘", className: "deco-command", label: "Tools" },
];

export default function TechStack() {
  return (
    <section className="tech-stack" id="tech-stack">
      <div className="tech-stack-inner">
        <div className="tech-decorations" aria-hidden="true">
          {decorations.map((item) => (
            <div
              key={item.className}
              className={`tech-decoration ${item.className}`}
            >
              {item.symbol}
            </div>
          ))}

          <span className="tech-decoration-dot dot-top-left" />
          <span className="tech-decoration-dot dot-top-right" />
          <span className="tech-decoration-dot dot-bottom-left" />
          <span className="tech-decoration-dot dot-bottom-right" />

          <span className="tech-decoration-ring ring-left" />
          <span className="tech-decoration-ring ring-right" />
        </div>

        <div className="tech-stack-content">
          <span className="tech-stack-eyebrow">
            <span className="tech-eyebrow-dot" />
            WHAT I WORK WITH
          </span>

          <h2 className="tech-stack-title">
            My Tech <span>Stack.</span>
          </h2>

          <p className="tech-stack-subtitle">
            The tools and technologies I use to turn ideas
            into interactive web experiences.
          </p>

          <div className="tech-stack-skills">
            {skills.map((skill) => (
              <span className="tech-skill-pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>

        </div>

      </div>
       <div className="tech-stack-line"aria-hidden="true">
        <span />
       </div>
    </section>
  );
}
