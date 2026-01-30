// Global app with routing
import Index from "./pages/index";
import About from "./pages/about";
import Events from "./pages/events";
import Team from "./pages/team";
import Resources from "./pages/resources";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import Join from "./pages/join";
import Login from "./pages/login";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </>
  );
}

export default App
