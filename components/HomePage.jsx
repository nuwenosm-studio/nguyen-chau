import styles from "@/styles/homePage.module.css"
import TextCode from "./sub-components/TextCode";
import { homeComponent } from "@/constants/index";

const HomePage = () => {
   return (
      <section className="page_container">
         <div className="page_title-container">
            <div className="page_title">hello</div>
            <div className="square_top-blue"></div>
         </div>

         <TextCode component={homeComponent} />
         
      </section>
   )
}

export default HomePage
