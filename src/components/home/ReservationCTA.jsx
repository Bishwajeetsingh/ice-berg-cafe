import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import reservationBg from "../../assets/images/reservation/reservation-bg.jpg";

function ReservationCTA() {
  return (
    <section
      className="relative py-32 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${reservationBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-amber-500 uppercase tracking-[5px] mb-4"
        >
          Reserve Your Table
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          Experience Premium Coffee &
          <br />
          Delicious Moments
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-300 mt-6 max-w-2xl mx-auto"
        >
          Book your table today and enjoy handcrafted coffee, delicious food,
          and a cozy atmosphere with your family and friends.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Link
            to="/reservation"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 rounded-full transition duration-300"
          >
            Reserve Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default ReservationCTA;