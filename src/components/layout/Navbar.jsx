import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Reservation", path: "/reservation" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto mt-4 flex h-20 max-w-7xl items-center justify-between rounded-full border border-white/20 bg-black/20 px-8 backdrop-blur-xl shadow-2xl lg:px-10">

        {/* Logo */}
        <NavLink to="/" className="flex flex-col">
          <span className="text-2xl font-bold tracking-wide text-white">
            Ice Berg Cafe
          </span>

          <span className="text-xs uppercase tracking-[4px] text-amber-300">
            Good Way to Start a Good Day
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-amber-400"
                      : "text-white hover:text-amber-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <button className="hidden rounded-full bg-amber-400 px-6 py-2 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-amber-300 md:block">
          Login
        </button>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-white md:hidden"
        >
          {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.3 }}
              className="absolute left-4 right-4 top-24 rounded-3xl border border-white/20 bg-black/80 p-5 backdrop-blur-xl md:hidden"
            >
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 transition-all duration-300 ${
                          isActive
                            ? "bg-amber-400 text-black"
                            : "text-white hover:bg-white/10"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </header>
  );
}

export default Navbar;