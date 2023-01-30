import React from "react";

function ProjectItem({ name, about, technologies }) {
  const spans=technologies.map((eachTechText)=><span key={eachTechText}>{eachTechText}</span>)
  console.log(spans)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {spans}
      </div>
    </div>
  );
}

export default ProjectItem;
