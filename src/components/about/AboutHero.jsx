import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutHero from "../../assets/images/about/about-hero.jpg";

function AboutHero() {
  return (
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${aboutHero})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >
        <p className="uppercase tracking-[5px] text-amber-500 mb-4">
          Welcome to Ice Berg Cafe
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Our Story
        </h1>

        <div className="flex justify-center items-center gap-3 text-gray-300 text-lg">
          <Link
            to="/"
            className="hover:text-amber-500 transition"
          >
            Home
          </Link>

          <span>/</span>

          <span className="text-amber-500">
            About
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutHero;