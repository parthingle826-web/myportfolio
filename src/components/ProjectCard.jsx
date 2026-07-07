import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  console.log(project.title, project.image);
 return (
    <div className="glass project-card">

      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
      )}

      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tech-stack">
          {project.tech.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>

        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          )}

          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;