import React, { useState } from "react";
import projetData from "../data/projet.json";

export default function Activity() {
   const categories = ["Web", "Electronics", "DIY"];
   const [filter, setFilter] = useState("Web"); // État initial du filtre
   const [selectedProject, setSelectedProject] = useState(null);
   const [modalOpen, setModalOpen] = useState(false);

   // Fonction pour mettre à jour le filtre
   const handleFilterChange = (category) => {
      setFilter(category);
      setSelectedProject(null); // Réinitialise le projet sélectionné
      closeModal(); // Ferme la boîte modale et rétablit le défilement de l'arrière-plan
   };

   // Fonction pour gérer le clic sur un projet
   const handleProjectClick = (project) => {
      setSelectedProject(project);
      setModalOpen(true);
      document.body.classList.add("overflow-hidden");
   };

   // Fonction pour fermer la boîte modale
   const closeModal = () => {
      setSelectedProject(null);
      setModalOpen(false);
      document.body.classList.remove("overflow-hidden");
   };

   // Filtrer les projets en fonction de la catégorie sélectionnée
   const filteredProjects = projetData.projects.filter((project) => {
      return project.category === filter;
   });

   return (
      <section className="activity">
         <h3 className="activity-title">Réalisation</h3>
         <div className="filter-buttons">
            {categories.map((category) => (
               <button
                  key={category}
                  className={filter === category ? "active" : ""}
                  onClick={() => handleFilterChange(category)}
               >
                  {category}
               </button>
            ))}
         </div>
         <div className="projet-container">
            {filteredProjects.map((project, index) => (
               <div
                  key={index}
                  className="card-projet"
                  onClick={() => handleProjectClick(project)}
               >
                  <div className="display">
                     <h2 className="projet-title">{project.title}</h2>
                     <p className="savoirPlus">En savoir plus...</p>
                  </div>
                  <img src={project.background} alt="Project Background" />
               </div>
            ))}
         </div>
         {selectedProject && modalOpen && (
            <div className="modal-overlay" onClick={closeModal}>
               <div className="modal">
                  <button className="close-button" onClick={closeModal}>
                     &times;
                  </button>
                  <div className="modal-content">
                     <img
                        src={selectedProject.background}
                        alt="Project Background"
                     />
                     <h2>{selectedProject.title}</h2>
                     <p>Year: {selectedProject.year}</p>
                     <p>Mission: {selectedProject.mission}</p>
                     <p>Techno: {selectedProject.techno}</p>
                     <a href={selectedProject.webUrl}>Website</a>
                  </div>
               </div>
            </div>
         )}
      </section>
   );
}
