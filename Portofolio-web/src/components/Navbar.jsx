// src/components/Navbar.jsx
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/"); // redirect ke Home
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-3 md:py-5">
        {/* Logo */}
        <i
          className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight cursor-pointer"
          onClick={handleLogoClick}
        >
          ZSH<span className="text-red-500">.</span>
        </i>

        {/* Navigation links */}
        <ul className="hidden md:flex space-x-6 lg:space-x-10 text-gray-700 font-medium text-base">
          <li>
            <HashLink smooth to="/#home">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about">
              About me
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#services">
              Services
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#projects">
              My Work
            </HashLink>
          </li>
        </ul>

        {/* Connect Button */}
        <Button
          asChild
          className="hidden md:inline-flex bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-base font-semibold shadow"
        >
          <Link to="/contact">Connect</Link>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
