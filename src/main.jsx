import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./components/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import Treatments from "./pages/Treatments.jsx";
import Team from "./pages/Team.jsx";
import Contact from "./pages/Contact.jsx";

import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  </React.StrictMode>
);
