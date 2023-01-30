import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const allProjects=projects.map((eachProject)=>{
    const allTechTexts=eachProject.technologies.map((eachTechText)=>eachTechText)
    console.log(allTechTexts)

    return <ProjectItem name={eachProject.name} about={eachProject.about} key={eachProject.id} technologies={allTechTexts}></ProjectItem>})
  
  console.log(allProjects)
  /*const {id, name, about, technologies}=projects*/
 /* const allTechnologies=projects.map((eachProject)=>{
    eachProject.technologies.map((eachTechText)=><span>{eachTechText}</span>)

  })*/
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{allProjects}</div>
    </div>
  );
}

export default ProjectList;
