import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./page/Home";
import About from "./page/About";
import Activity from "./page/Service";
import "./css/app.css";

function App() {
   return (
      <>
         <Header />
         <Home />
         <About />
         <Activity />
      </>
   );
}

export default App;
