import { FaArrowUp } from "react-icons/fa";

function FooterBottom() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="border-t border-gray-800 mt-16 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="text-center md:text-left">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Ice Berg Cafe. All Rights Reserved.
          </p>

          <p className="text-gray-600 text-sm mt-2">
            Designed & Developed by <span className="text-amber-500 font-medium">BISHWAJEET KUMAR SINGH</span>
          </p>
        </div>

        <button
          onClick={scrollTop}
          className="w-12 h-12 rounded-full bg-amber-500 hover:bg-amber-600 text-black flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <FaArrowUp />
        </button>

      </div>
    </div>
  );
}

export default FooterBottom;