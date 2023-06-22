import { NavLink, Link } from "react-router-dom";

export default function Menu() {
   return (
      <header>
         <nav>
            <ul>
               <li>
                  <NavLink
                     to="/"
                     className={({ isActive }) =>
                        isActive ? "active-link" : undefined
                     }
                  >
                     À propos
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/biographie"
                     className={({ isActive }) =>
                        isActive ? "active-link" : undefined
                     }
                  >
                     Mes services
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/activité"
                     className={({ isActive }) =>
                        isActive ? "active-link" : undefined
                     }
                  >
                     Activité
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/contact"
                     className={({ isActive }) =>
                        isActive ? "active-link" : undefined
                     }
                  >
                     Contact
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   );
}
