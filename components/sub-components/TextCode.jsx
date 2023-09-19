"use client"
import { useState } from "react";
import Image from "next/image";

const TextCode = ({component}) => {
   const [hovering, setHovering] = useState(false);
   const handleMouseEnter = () => setHovering(true);
   const handleMouseLeave = () => setHovering(false);

   return (
      <div className="component_container"
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
      >
         {hovering ? (
            <div className="component_img_container">
               <Image
                  src={component?.component_img}
                  alt="Component Image"
                  layout="fill" 
                  objectFit="cover"
               />
            </div>
         ) : (
            <div className="component_text_container">
               <div className="component_head">
                  &lt;
                  <div className="component_name">
                     {component?.component_name}
                  </div>
               </div>
               <div className="component_body">
                  {component?.component_info?.map((info) => (
                     <div className="component_row" key={info[0]}>
                        <div className="component_key">
                           {info[0]}
                        </div>
                        <div className="component_space">:</div>
                        <div className={`component_value 
                           ${info[0] === component.component_info[1][0] ? 'highlight_blue' : ''}
                        `}>
                           {info[1]}
                        </div>
                     </div>
                  ))}
               </div>
               <div className="component_foot">/&gt;</div>
         </div>
         )}
      </div>
   )
}

export default TextCode
