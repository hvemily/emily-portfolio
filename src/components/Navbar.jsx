import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Typewriter from "./Typewriter";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-black text-white border-b border-gray-800">
      <div className="container flex items-center justify-between py-3">
        <nav className="hidden md:flex items-center gap-6">
        <NavLink
          to="/"
          className="uppercase italic text-orange-600 transition transform hover:scale-110 hover:text-white"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="uppercase italic text-orange-600 transition transform hover:scale-110 hover:text-white"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className="uppercase italic text-orange-600 transition transform hover:scale-110 hover:text-white"
        >
          Contact
        </NavLink>

        </nav>
        <button
          className="md:hidden btn border-white text-white hover:bg-gray-900"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-700 bg-black">
          <div className="container py-3 flex flex-col gap-3">
            <NavLink to="/" onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
