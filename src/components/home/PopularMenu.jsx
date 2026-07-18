import { motion } from "framer-motion";
import menuData from "../../data/menuData";
import MenuCard from "../menu/MenuCard";
import { useState } from "react";

function PopularMenu() {
  const [category, setCategory] = useState("All");
  const filteredMenu =
  category === "All"
    ? menuData
    : menuData.filter((item) => item.category === category);
  return (
    <section className="bg-[#0f0f0f] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center uppercase tracking-[6px] text-amber-400"
        >
          Our Menu
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-center text-5xl font-bold text-white"
        >
          Popular Menu
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto mt-5 max-w-2xl text-center text-gray-400"
        >
          Discover our handcrafted coffees and delicious desserts,
          prepared with premium ingredients.
        </motion.p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">

  {["All", "Coffee", "Cold", "Dessert"].map((item) => (

    <button
      key={item}
      onClick={() => setCategory(item)}
      className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300
      ${
        category === item
          ? "bg-amber-400 text-black"
          : "bg-white/10 text-white hover:bg-amber-400 hover:text-black"
      }`}
    >
      {item}
    </button>

  ))}

</div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {filteredMenu.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default PopularMenu;