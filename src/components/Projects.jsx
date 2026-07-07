import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">

        <h2 className="section-title">
          Featured Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;