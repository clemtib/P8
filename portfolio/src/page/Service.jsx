import React from "react";
import ServiceCard from "../components/ServiceCard";

export default function Service() {
   return (
      <section className="service">
         <div className="service-container">
            <h3>Mes services</h3>
            <div className="cards-container">
               <ServiceCard />
            </div>
         </div>
      </section>
   );
}
