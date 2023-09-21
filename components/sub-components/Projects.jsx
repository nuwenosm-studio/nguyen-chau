

const Projects = ({projects}) => {
   return (
      <div className="projects_container">
         {projects.map((project, index) => (
            <div key={index} className="proj_item">
               <div className="proj_header">
                  {index+1}.
                  <div className="proj_name">
                     {project.name}
                  </div>
               </div>
               <div className="proj_info">
                  <div className="proj_description">
                     {project.description}
                  </div>
                  <div className="proj_tools">
                     {project.tools}
                  </div>
               </div>
            </div>
         ))}
      </div>
   )
}

export default Projects
