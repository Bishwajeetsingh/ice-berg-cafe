import { motion } from "framer-motion";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterNewsletter from "./FooterNewsletter";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-white">

      {/* Gold Top Border */}
      <div className="h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-20"
      >

        <div className="grid gap-14 lg:grid-cols-4 md:grid-cols-2">

          <FooterBrand />

          <FooterLinks />

          <FooterContact />

          <FooterNewsletter />

        </div>

        <FooterBottom />

      </motion.div>

    </footer>
  );
}

export default Footer;