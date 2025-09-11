import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "@/pages/Home";
import Fullstack from "@/pages/Fullstack";
import Frontend from "@/pages/Frontend";
import Backend from "@/pages/Backend";
import DataAnalyst from "@/pages/DataAnalyst";
import ProjectsPage from "@/pages/ProjectsPage";
import ProjectDetail from "@/pages/ProjectDetail";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
function App() {
  return (
    <Router>
      {/* Wrapper utama flex column */}
      <div className="min-h-screen flex flex-col font-sans antialiased">
        <Navbar />

        {/* Main fleksibel, dorong footer ke bawah */}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fullstack" element={<Fullstack />} />
            <Route path="/frontend" element={<Frontend />} />
            <Route path="/backend" element={<Backend />} />
            <Route path="/data-analyst" element={<DataAnalyst />} />
            <Route path="/projectsPage" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
