import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Rideaux from "./pages/Rideaux.jsx";
import Serrurier from "./pages/Serrurier.jsx";
import Vitrine from "./pages/Vitrine.jsx";
import Tarifs from "./pages/Tarifs.jsx";
import Mentions from "./pages/Mentions.jsx";
import Politiques from "./pages/Politiques.jsx";
import {  Route, Routes,BrowserRouter } from "react-router-dom";
function App() {

  return (
    <div className="">
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/rideaux-metallique" element={<Rideaux />} /> 
          <Route path="/" element={<Serrurier />} />
          <Route path="/vitrerie" element={<Vitrine />} />
          <Route path="/*" element={<Serrurier />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/mentions-legales" element={<Mentions />} />
          <Route path="/politique-de-confidentialite" element={<Politiques />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
