import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
        
<div className="contact-bg-art" aria-hidden="true">
  <span className="bg-orb orb-one" />
  <span className="bg-orb orb-two" />

  <span className="bg-star bg-star-one">✦</span>
  <span className="bg-star bg-star-two">✧</span>
  <span className="bg-star bg-star-three">✳</span>
  <span className="bg-star bg-star-four">✦</span>

  <span className="bg-ring ring-one" />
  <span className="bg-ring ring-two" />

  <span className="bg-dots dots-one" />
  <span className="bg-dots dots-two" />
</div>

      <div className="contact-container">
        
        <span className="contact-eyebrow">
          <span className="contact-dot" />
          GET IN TOUCH
        </span>

        <h2>
          Let's Build Something
          <span> Great.</span>
        </h2>

        <p className="contact-description">
          I'm looking for opportunities to grow as a React Developer.
          If you have an opportunity or want to collaborate, let's connect!
        </p>


        <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=shivanisingh954843@gmail.com&su=React%20Developer%20Opportunity"
        className="contact-button"
        target="_blank"
        rel="noreferrer"
        >
        Email Me <span>↗</span>
        </a>


        <div className="contact-socials">
          <a
            href="https://github.com/shivani-stud18"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span>↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/shivani-kotwal92/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span>↗</span>
          </a>
        </div>
      </div>

      <div className="contact-bottom" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
