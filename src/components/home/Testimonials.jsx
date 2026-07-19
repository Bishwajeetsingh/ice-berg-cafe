import { motion } from "framer-motion";

import customer1 from "../../assets/images/testimonials/customer1.jpg";
import customer2 from "../../assets/images/testimonials/customer2.jpg";
import customer3 from "../../assets/images/testimonials/customer3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Rakesh Sharma",
    role: "Coffee Lover",
    image: customer1,
    review:
      "The ambience is absolutely stunning. Every cup feels handcrafted with perfection. Ice Berg Cafe has become my favourite place to relax.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mona Kumari",
    role: "Food Blogger",
    image: customer2,
    review:
      "From premium coffee to exceptional desserts, everything exceeded my expectations. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Karan Singh",
    role: "Traveller",
    image: customer3,
    review:
      "Beautiful interior, friendly staff and one of the best cappuccinos I've ever had. Definitely coming back.",
    rating: 5,
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

function Testimonials() {
  return (
    <section className="bg-[#111111] py-24">
      <div className="container mx-auto px-6">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[6px] text-amber-500 mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What Our Customers Say
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Thousands of coffee lovers trust Ice Berg Cafe for unforgettable
            flavours, premium quality and a warm atmosphere.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                y: -10,
              }}
              className="bg-[#1a1a1a] rounded-3xl p-8 border border-gray-800 hover:border-amber-500 duration-300"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(item.rating)].map((_, i) => (
                  <span
                    key={i}
                    className="text-amber-500 text-xl"
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="text-gray-300 leading-8 mb-8">
                "{item.review}"
              </p>

              <div className="flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-500"
                />

                <div>
                  <h3 className="text-white font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {item.role}
                  </p>
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;