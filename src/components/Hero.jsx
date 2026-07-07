import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <motion.div
        initial={{opacity:0,y:50}}
        animate={{opacity:1,y:0}}
        transition={{duration:1}}
      >
        <h1>
         Computer Science Student | AI & Full Stack Developer
        </h1>

        <TypeAnimation
          sequence={[
            "AI Developer",
            2000,
            "Machine Learning Enthusiast",
            2000,
            "Full Stack Developer",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          className="typing"
        />

        <p>
          Building intelligent applications using React,
          Node.js, Python, Machine Learning and Agentic AI.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>

          <a
  href="/Parth-Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-outline"
>
  View Resume
</a>
        </div>
      </motion.div>

      <motion.div
        className="hero-image"
        animate={{ y: [0,-20,0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
      >
        <img
          src="/Self-Photograph.jpg"
          alt="Parth Ingle"
        />
      </motion.div>

    </section>
  );
};

export default Hero;