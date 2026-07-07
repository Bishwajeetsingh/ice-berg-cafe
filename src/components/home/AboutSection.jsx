import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800"
            alt="Cafe"
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="tracking-[5px] text-amber-400">
            ABOUT US
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            A Premium Coffee Experience
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            At Ice Berg Cafe, every cup is crafted with passion.
            We source premium coffee beans and create handcrafted
            beverages that bring warmth, comfort and unforgettable
            moments.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">

            <div>
              <h3 className="text-4xl font-bold text-amber-400">
                10+
              </h3>

              <p className="mt-2 text-gray-400">
                Years
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-amber-400">
                25K+
              </h3>

              <p className="mt-2 text-gray-400">
                Customers
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-amber-400">
                50+
              </h3>

              <p className="mt-2 text-gray-400">
                Coffee Types
              </p>
            </div>

          </div>

          <button className="mt-10 rounded-full bg-amber-400 px-8 py-4 font-semibold text-black transition hover:bg-amber-300">
            Read More
          </button>

        </motion.div>

      </div>
    </section>
  );
}

export default AboutSection;