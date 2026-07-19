import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 relative">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 pb-16">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold text-amber-500">
            Ice Berg Cafe
          </h2>

          <p className="text-gray-400 mt-5 leading-7">
            Good Way to Start a Good Day.
            Experience handcrafted coffee,
            delicious food and a premium ambience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-gray-400">

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/reservation">Reservation</Link>
            <Link to="/contact">Contact</Link>

          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Contact
          </h3>

          <div className="space-y-4 text-gray-400">

            <p className="flex gap-3">
              <FaMapMarkerAlt className="text-amber-500 mt-1" />
             Navi Mumbai, Maharashtra, India
            </p>

            <p className="flex gap-3">
              <FaPhoneAlt className="text-amber-500 mt-1" />
              +91 8490966381
            </p>

            <p className="flex gap-3">
              <FaEnvelope className="text-amber-500 mt-1" />
              info@icebergcafe.com
            </p>

          </div>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Opening Hours
          </h3>

          <div className="text-gray-400 space-y-3">

            <p>Mon - Fri : 9:00 AM - 11:00 PM</p>

            <p>Sat - Sun : 8:00 AM - 12:00 AM</p>

          </div>

          <div className="flex gap-4 mt-8 text-xl">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-800 py-6">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-center md:text-left">
            © 2026 Ice Berg Cafe. All Rights Reserved.
          </p>

          <button
            onClick={scrollTop}
            className="mt-4 md:mt-0 bg-amber-500 hover:bg-amber-600 w-12 h-12 rounded-full flex items-center justify-center transition"
          >
            <FaArrowUp className="text-black" />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;