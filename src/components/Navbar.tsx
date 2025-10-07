import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <header className="mt-5 z-50 text-white font-bold">
      <div className="container flex items-center justify-end py-3">
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
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

        {/* Mobile button */}
        <button
          className="md:hidden ml-auto text-white hover:text-orange-600"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-t border-gray-700 bg-black">
          <div className="container py-3 flex flex-col gap-3">
            <NavLink
              to="/"
              className="uppercase italic text-orange-600 hover:text-white"
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="uppercase italic text-orange-600 hover:text-white"
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="uppercase italic text-orange-600 hover:text-white"
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
