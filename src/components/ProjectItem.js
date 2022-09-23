import React from "react";

function ProjectItem({ name, about, technologies, key }) {
  const tech_list = technologies.map((technology) => (
    <span>{technology}</span>
  ));

  return (
    <div className="project-item" key={key}>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {tech_list}
      </div>
    </div>
  );
}

export default ProjectItem;
