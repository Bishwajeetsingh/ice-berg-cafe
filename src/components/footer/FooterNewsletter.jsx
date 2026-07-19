function FooterNewsletter() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-6">
        Stay Updated
      </h3>

      <p className="text-gray-400 leading-7 mb-6">
        Subscribe to receive updates on
        new coffee blends, special offers,
        and exclusive events.
      </p>

      <form className="space-y-4">

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full bg-[#161616]
          border border-gray-700
          rounded-xl
          px-5 py-4
          text-white
          placeholder:text-gray-500
          focus:outline-none
          focus:border-amber-500
          transition"
        />

        <button
          className="w-full
          bg-amber-500
          hover:bg-amber-600
          text-black
          font-semibold
          py-4
          rounded-xl
          transition
          duration-300"
        >
          Subscribe
        </button>

      </form>
    </div>
  );
}

export default FooterNewsletter;