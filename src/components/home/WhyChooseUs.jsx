import { motion } from "framer-motion";
import {
  FaCoffee,
  FaLeaf,
  FaShippingFast,
} from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";

import whyChooseUs from "../../assets/images/about/why-choose-us.jpg";

const features = [
  {
    icon: <FaCoffee />,
    title: "Premium Arabica Beans",
    desc: "Freshly roasted premium coffee beans every day.",
  },
  {
    icon: <GiCoffeeCup />,
    title: "Expert Baristas",
    desc: "Crafted by experienced professional baristas.",
  },
  {
    icon: <FaLeaf />,
    title: "Fresh Ingredients",
    desc: "Only natural and high-quality ingredients.",
  },
  {
    icon: <FaShippingFast />,
    title: "Fast Service",
    desc: "Quick, friendly and premium customer service.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-[#111111] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src={whyChooseUs}
            alt="Why Choose Us"
            className="h-[450px] w-full rounded-3xl object-cover shadow-2xl"          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="tracking-[5px] text-amber-400 uppercase">
            Why Choose Us
          </p>

<h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight text-white">  Why Coffee Lovers
  <br />
  Choose Ice Berg Cafe
</h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
  Experience handcrafted coffee made from premium Arabica beans,
  prepared by expert baristas using the freshest ingredients in a
  warm and luxurious atmosphere.
</p>

          <div className="mt-10 space-y-5">

            {features.map((feature, index) => (

              <motion.div
                key={index}
                whileHover={{
  scale: 1.02,
  y: -6,
}}
className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-amber-400 hover:bg-white/10 shadow-xl"              >

<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-400/10 text-3xl text-amber-400">                  {feature.icon}
                </div>

                <div>

                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-gray-400">
                    {feature.desc}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default WhyChooseUs;