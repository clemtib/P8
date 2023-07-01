import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import React, { useState, useEffect } from "react";

export default function Home() {
   const [firstPageVisible, setFirstPageVisible] = useState(false);

   const handleFirstPageAnimationEnd = () => {
      setFirstPageVisible(true);
   };

   useEffect(() => {
      const header = document.querySelector("header");
      const homeSection = document.querySelector(".home");

      const observerOptions = {
         rootMargin: "-64px 0px 0px 0px", // Permet de déclencher l'observation 64px avant que la section "Home" atteigne le haut de l'écran
      };

      const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               header.classList.remove("invert-background");
            } else {
               header.classList.add("invert-background");
            }
         });
      }, observerOptions);

      observer.observe(homeSection);

      return () => {
         observer.unobserve(homeSection);
      };
   }, []);

   return (
      <section className="home">
         <div
            className={`firstPage ${firstPageVisible ? "visible" : ""}`}
            onAnimationEnd={handleFirstPageAnimationEnd}
         >
            <div className="title">
               <h1>Clement TIBERGHIEN</h1>
               <h2>Développeur Web</h2>
            </div>

            <div className="portrait">
               <img src="images/portrait.jpeg" alt="" />
            </div>
         </div>
         <div className={`scroll ${firstPageVisible ? "visible" : ""}`}>
            <p>Voir mon travail</p>
            <FontAwesomeIcon
               icon={faChevronDown}
               size="3x"
               style={{ color: "#ffffff" }}
            />
         </div>
      </section>
   );
}
