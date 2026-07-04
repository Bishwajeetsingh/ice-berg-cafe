import hero from "../assets/hero.jpg";
import { motion } from "framer-motion";
function Home() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Hero Content */}
<div className="relative z-10 flex h-full items-center">      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

  <div className="max-w-xl">

    <motion.p
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="mb-4 text-xl font-medium text-yellow-400 md:text-2xl"
>
  Welcome To
</motion.p>

          <h1 className="leading-none">
  <span className="block text-6xl md:text-7xl font-black tracking-wide text-white">
    ICE BERG
  </span>

  <span className="mt-2 block text-5xl md:text-6xl font-bold tracking-[8px] text-amber-300">
    CAFE
  </span>
</h1>

          <p className="mt-6 text-2xl md:text-3xl text-yellow-300 font-semibold">
            Good Way to Start a Good Day
          </p>

          <p className="mt-6 text-gray-300 text-lg leading-8 max-w-xl">
            Experience premium coffee, handcrafted beverages and delicious
            food in a warm and cozy atmosphere made for every coffee lover.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">

            <button
  className="
    rounded-full
    bg-amber-400
    px-8
    py-4
    text-lg
    font-semibold
    text-black
    transition-all
    duration-300
    hover:scale-105
    hover:bg-amber-300
    hover:shadow-2xl
  "
>
  Explore Menu
</button>

            <button
  className="
    rounded-full
    border
    border-white
    px-8
    py-4
    text-lg
    font-semibold
    text-white
    transition-all
    duration-300
    hover:bg-white
    hover:text-black
    hover:scale-105
  "
>
  Book a Table
</button>

          </div>

        </div>
      </div>
      </div>
    </section>
  );
}



export default Home;