import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function FooterContact() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6 text-white">
        Contact Us
      </h3>

      <div className="space-y-5 text-gray-400">

        <div className="flex items-start gap-4">
          <FaMapMarkerAlt className="text-amber-500 mt-1 text-lg" />
          <p>
            Navi Mumbai, Maharashtra
          </p>
        </div>

        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-amber-500" />
          <p>+91 8490966381</p>
        </div>

        <div className="flex items-center gap-4">
          <FaEnvelope className="text-amber-500" />
          <p>info@icebergcafe.com</p>
        </div>

        <div className="flex items-start gap-4">
          <FaClock className="text-amber-500 mt-1" />
          <div>
            <p>Mon - Fri : 9 AM - 10 PM</p>
            <p>Sat - Sun : 8 AM - 11 PM</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default FooterContact;