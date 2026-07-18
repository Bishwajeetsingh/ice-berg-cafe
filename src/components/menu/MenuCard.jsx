import { motion } from "framer-motion";

function MenuCard({ item }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-[#171717] shadow-xl"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-64 w-full object-cover transition duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        <div className="flex items-center justify-between">

          <h3 className="text-2xl font-bold text-white">
            {item.name}
          </h3>

          <span className="rounded-full bg-amber-400 px-3 py-1 text-sm font-semibold text-black">
            ⭐ {item.rating}
          </span>

        </div>

        <p className="mt-4 text-gray-400">
          {item.description}
        </p>

        <div className="mt-6 flex items-center justify-between">

          <span className="text-2xl font-bold text-amber-400">
            ₹{item.price}
          </span>

          <button
            className="
              rounded-full
              bg-amber-400
              px-5
              py-2
              font-semibold
              text-black
              transition
              hover:bg-amber-300
            "
          >
            Add to Cart
          </button>

        </div>

      </div>
    </motion.div>
  );
}

export default MenuCard;