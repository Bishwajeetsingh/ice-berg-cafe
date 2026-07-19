import { motion } from "framer-motion";

import gallery1 from "../../assets/images/gallery/gallery1.jpg";
import gallery2 from "../../assets/images/gallery/gallery2.jpg";
import gallery3 from "../../assets/images/gallery/gallery3.jpg";
import gallery4 from "../../assets/images/gallery/gallery4.jpg";
import gallery5 from "../../assets/images/gallery/gallery5.jpg";
import gallery6 from "../../assets/images/gallery/gallery6.jpg";
import gallery7 from "../../assets/images/gallery/gallery7.jpg";
import gallery8 from "../../assets/images/gallery/gallery8.jpg";
import gallery9 from "../../assets/images/gallery/gallery9.jpg";
import gallery10 from "../../assets/images/gallery/gallery10.jpg";

const images = [
  {
    image: gallery1,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    image: gallery2,
    className: "",
  },
  {
    image: gallery3,
    className: "",
  },
  {
    image: gallery4,
    className: "md:row-span-2",
  },
  {
    image: gallery5,
    className: "",
  },
  {
    image: gallery6,
    className: "md:col-span-2",
  },
  {
    image: gallery7,
    className: "",
  },
  {
    image: gallery8,
    className: "",
  },
  {
    image: gallery9,
    className: "",
  },
  {
    image: gallery10,
    className: "md:col-span-2",
  },
];

function Gallery() {
  return (
    <section className="bg-[#0d0d0d] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-amber-500 uppercase tracking-[5px] mb-3">
            Gallery
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Inside Ice Berg Cafe
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Explore our premium interiors, handcrafted coffee, delicious food
            and unforgettable moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[260px] gap-5">

          {images.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-3xl ${item.className}`}
            >
              <img
                src={item.image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">

                <div className="p-6">

                  <h3 className="text-white text-xl font-semibold">
                    Ice Berg Cafe
                  </h3>

                  <p className="text-gray-300 text-sm mt-2">
                    Premium Coffee • Cozy Ambience
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

export default Gallery;