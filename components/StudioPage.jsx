import Projects from "./sub-components/Projects";
import { projects } from "@/constants/projectData";

const StudioPage = () => {
   return (
      <div className="page_container">
         <div className="page_title-container">
            <div className="page_title">
               Studi<span className="highlight_blue">o</span>
            </div>
            <div className="square_top-blue"></div>
         </div>

         <div>
            <Projects projects={projects}/>
         </div>
      </div>
   )
}

export default StudioPage
