import "./Projects.css";


const projects = [
  {
    number: "01",
    type: "ems",
    title: "Employee Management System",
    category: "REACT APPLICATION",
    description:
      "A React-based employee task management dashboard with admin and employee views.",
    image: "/images/ems.png",
    demo: "https://employee-management-system-lyart-eta.vercel.app/",
    github: "https://github.com/shivani-stud18/employee-management-system",
    tech: ["React", "Tailwind CSS"],
  },
  {
    number: "02",
    type: "mosh",
    title: "Code With Mosh Clone",
    category: "RESPONSIVE WEBSITE",
    description:
      "A responsive educational website clone inspired by Code With Mosh.",
    image: "/images/code-with-mosh.png",
    demo: "https://code-with-mosh-clone.vercel.app/",
    github: "https://github.com/shivani-stud18/code-with-mosh-clone",
    tech: ["HTML", "CSS", "Bootstrap"],
  },
  {
    number: "03",
    type: "studio",
    title: "Sundown Studio Clone",
    category: "CREATIVE WEBSITE",
    description:
      "A studio website recreation featuring bold typography and interactive visual design.",
    image: "/images/sundown-studio.png",
    demo: "https://sundown-studio-coral.vercel.app/",
    github: "https://github.com/shivani-stud18/sundown-studio",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    number: "04",
    type: "gsap",
    title: "SPYLT React + GSAP",
    category: "ANIMATED REACT WEBSITE",
    description:
      "An animated product website built with React and GSAP-powered interactions.",
    image: "/images/spylt-react-gsap.png",
    demo: "https://react-gsap-website-blue.vercel.app/",
    github: "https://github.com/shivani-stud18/react-gsap-website",
    tech: ["React", "GSAP", "Tailwind CSS"],
  },
];



function ProjectPreview({ image, title, number }) {
  return (
    <div className="project-preview">
      <div className="preview-topbar">
        <div className="preview-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="preview-number">
          {number} / PROJECT
        </span>
      </div>

      <a
        href={image}
        target="_blank"
        rel="noopener noreferrer"
        className="project-image-link"
        aria-label={`View ${title} screenshot`}
      >
        <img
          src={image}
          alt={`${title} website screenshot`}
          className="project-image"
        />
      </a>
    </div>
  );
}


export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <header className="projects-heading">
          <span className="projects-eyebrow">
            <span className="eyebrow-dot" />
            SELECTED WORK
          </span>

          <h2>
            Featured <span>Projects.</span>
          </h2>

          <p>
            A selection of projects where I turn ideas into interactive,
            responsive web experiences.
          </p>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <ProjectPreview
                image={project.image}
                title={project.title}
                number={project.number}
              />

              <div className="project-details">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span className="project-index">{project.number}</span>
                </div>

                <h3>{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link project-link-primary"
                    >
                      Live Demo <span>↗</span>
                    </a>
                  ) : (
                    <span className="project-link project-link-disabled">
                      Demo link pending
                    </span>
                  )}

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link project-link-secondary"
                    >
                      GitHub <span>↗</span>
                    </a>
                  ) : (
                    <span className="project-link project-link-secondary">
                      GitHub link pending
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        
      </div>
      <div className="projects-bottom" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}