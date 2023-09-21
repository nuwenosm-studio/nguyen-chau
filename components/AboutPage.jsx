"use client"

import { useState } from "react";
import Filter from "./sub-components/Filter";
import TextCode from "./sub-components/TextCode";
import { aboutComponents } from "@/constants";

const AboutPage = () => {
    // Set the first item as the default value
   const [subject, setSubject] = useState(
      aboutComponents[0].component_name
   );

   const handleSubjectChange = (newSubject) => {
      setSubject(newSubject);
   };

   const filterComponents = aboutComponents.filter((component) => {
      return component.component_name === subject;
    });

   return (
      <section className="page_container">
         <div className="page_title-container">
            <div className="page_title">
               ab<span className="highlight_blue">o</span>ut
            </div>
            <div className="square_top-blue"></div>
         </div>

         <div>
            <Filter
               subjects={["Academic", "Front-end", "Back-end"]}
               selectedSubject={subject}
               onFilterChange={handleSubjectChange}
            />
            {filterComponents.map((component, index) => (
               <div key={index}>
                  <TextCode component={component}/>
               </div>
            ))}
         </div>
      </section>
   )
}

export default AboutPage
