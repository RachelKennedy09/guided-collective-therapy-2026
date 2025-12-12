import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout.jsx";

import Home from "./pages/Home.jsx";
import Treatments from "./pages/Treatments.jsx";
import Team from "./pages/Team.jsx";
import Referrals from "./pages/Referrals.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/team" element={<Team />} />
        <Route path="/referrals" element={<Referrals />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
