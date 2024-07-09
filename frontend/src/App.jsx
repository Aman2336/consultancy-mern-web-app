import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Community from "./pages/Community.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./Components/Navbar.jsx";
import "./index.css";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
}
