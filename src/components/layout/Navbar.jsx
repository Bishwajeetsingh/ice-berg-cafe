import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Reservation", path: "/reservation" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
<nav className="mx-auto mt-4 flex h-20 max-w-7xl items-center justify-between rounded-full px-8 lg:px-10">
        {/* Logo */}
        <NavLink to="/" className="flex flex-col">
          <span className="text-2xl font-bold tracking-wide text-white">
            Ice Berg Cafe
          </span>

          <span className="text-xs uppercase tracking-[4px] text-gray-300">
            Good Way to Start a Good Day
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className="text-sm font-medium text-white transition hover:text-amber-400"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <button className="hidden rounded-full border border-white/30 bg-white/10 px-6 py-2 text-white backdrop-blur-md transition hover:bg-amber-500 hover:text-black md:block">
          Login
        </button>

        {/* Mobile Button */}
        <button className="text-3xl text-white md:hidden">
          ☰
        </button>

      </nav>
    </header>
  );
}

export default Navbar;