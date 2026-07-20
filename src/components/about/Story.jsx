import { motion } from "framer-motion";
import storyImg from "../../assets/images/about/story.jpg";

function Story() {
  return (
    <section className="bg-[#0B0B0B] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="group relative overflow-hidden rounded-3xl">

  <div className="absolute inset-0 rounded-3xl bg-amber-500/20 blur-3xl opacity-0 transition-all duration-700 group-hover:opacity-100"></div>

  <img
    src={storyImg}
    alt="Barista preparing coffee"
    className="relative w-full h-[600px] object-cover rounded-3xl shadow-2xl transition-all duration-700 group-hover:scale-110"
  />

</div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[4px] text-amber-500 font-medium">
              OUR STORY
            </p>

            <h2 className="text-5xl font-bold text-white mt-4 leading-tight">
              More Than Coffee,
              <br />
              It's an Experience.
            </h2>

            <p className="text-gray-400 mt-8 leading-8 text-lg">
              At Ice Berg Cafe, every cup is crafted with passion and
              precision. We believe coffee is more than just a drink—it’s a
              moment to relax, connect, and create memories.
            </p>

            <p className="text-gray-400 mt-6 leading-8 text-lg">
              From carefully selected beans to expertly brewed beverages,
              every detail reflects our commitment to quality, warmth, and
              hospitality. Whether you're catching up with friends or enjoying
              a quiet break, our café is designed to make every visit special.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-12">

              <div>
                <h3 className="text-5xl font-bold text-amber-500">
                  10K+
                </h3>

                <p className="text-gray-400 mt-2">
                  Happy Customers
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-bold text-amber-500">
                  5+
                </h3>

                <p className="text-gray-400 mt-2">
                  Years of Excellence
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Story;