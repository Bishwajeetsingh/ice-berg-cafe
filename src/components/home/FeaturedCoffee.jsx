import { motion } from "framer-motion";

const coffees = [
  {
    id: 1,
    name: "Cappuccino",
    price: "₹249",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600",
  },
  {
    id: 2,
    name: "Espresso",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600",
  },
  {
    id: 3,
    name: "Latte",
    price: "₹279",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600",
  },
  {
    id: 4,
    name: "Mocha",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600",
  },
];

function FeaturedCoffee() {
  return (
    <section className="bg-[#111111] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-amber-400 tracking-[5px]"
        >
          OUR SPECIAL
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-center text-5xl font-bold text-white"
        >
          Featured Coffee
        </motion.h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {coffees.map((coffee) => (

            <motion.div
              key={coffee.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl bg-[#1b1b1b] shadow-xl"
            >

              <img
                src={coffee.image}
                alt={coffee.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-white">
                  {coffee.name}
                </h3>

                <p className="mt-2 text-gray-400">
                  Premium handcrafted coffee with rich aroma.
                </p>

                <div className="mt-5 flex items-center justify-between">

                  <span className="text-xl font-bold text-amber-400">
                    {coffee.price}
                  </span>

                  <button className="rounded-full bg-amber-400 px-5 py-2 font-semibold text-black transition hover:bg-amber-300">
                    Order
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedCoffee;