import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function FooterBrand() {
  return (
    <div>
      <h2 className="text-3xl font-extrabold text-amber-500 tracking-wide">
        Ice Berg Cafe
      </h2>

      <p className="mt-6 text-gray-400 leading-8">
        Good Way to Start a Good Day.
        Experience handcrafted coffee,
        delicious food, warm hospitality
        and unforgettable moments.
      </p>

      <div className="flex gap-4 mt-8">
        {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
          (Icon, index) => (
            <a
              key={index}
              href="#"
              className="w-11 h-11 rounded-full border border-amber-500/40
              flex items-center justify-center
              hover:bg-amber-500 hover:text-black
              transition-all duration-300 hover:scale-110"
            >
              <Icon />
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default FooterBrand;