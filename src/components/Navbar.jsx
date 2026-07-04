import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#3E2723] text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">☕ Brew Haven</h1>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/reservation">Reservation</Link>
      </div>
    </nav>
  );
}

export default Navbar;