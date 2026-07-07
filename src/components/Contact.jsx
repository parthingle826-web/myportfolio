import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">

        <h2 className="section-title">
          Contact Me
        </h2>

        <div className="glass contact-card">

          <a href="https://mail.google.com/mail/u/0/#inbox">
            <FaEnvelope />
            Email
          </a>

          <a href="https://www.linkedin.com/in/parth-ingle-68b44031b/">
            <FaLinkedin />
            LinkedIn
          </a>

          <a href="https://github.com/parthingle826-web">
            <FaGithub />
            GitHub
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;