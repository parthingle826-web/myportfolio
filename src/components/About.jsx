import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <motion.div
          className="glass about-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>

         <p>
Computer Science Engineering student passionate about
Artificial Intelligence, Machine Learning, Full Stack
Development, and Agentic AI Systems.
</p>

<p>
Experienced in React.js, Node.js, Python, MySQL,
MongoDB, and AI-powered application development.
Currently seeking Software Development and AI/ML
internship opportunities.
</p>

          <div className="about-stats">
            <div>
              <h3>3+</h3>
              <span>Projects</span>
            </div>

            <div>
              <h3>8+</h3>
              <span>Certificates</span>
            </div>

            <div>
              <h3>2+</h3>
              <span>Years Coding</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;