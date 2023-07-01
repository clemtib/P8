// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import serviceData from "../data/cards.json";

export default function ServiceCard() {
   return (
      <>
         {serviceData.cards.map((card, index) => (
            <div key={index} className="card-item">
               <div className="card-icon">
                  <FontAwesomeIcon
                     icon={card.icon}
                     size="3x"
                     style={{ color: "#ffffff" }}
                  />
               </div>
               <h4 className="title">{card.title}</h4>
               <p className="description">{card.description}</p>
               <h5 className="subtitle">{card.subtitle}</h5>
               <ul className="skills">
                  {card.skills.map((skill, skillIndex) => (
                     <li key={skillIndex}>{skill}</li>
                  ))}
               </ul>
            </div>
         ))}
      </>
   );
}
