import SectionTitle from "../../common/SectionTitle";
import ProjectCard from "../../ui/ProjectCard";

import { projects } from "../../../constants/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="projectsTheme py-28"
    >
      {/* <SectionTitle
        title="projects"
        action="View all"
      /> */}
      <SectionTitle title="projects" action="View all" />

      <div
        className="
        mt-12
        grid
        gap-6

        md:grid-cols-2

        xl:grid-cols-3
      "
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
          />
        ))}
      </div>

    </section>
  );
}

export default Projects;