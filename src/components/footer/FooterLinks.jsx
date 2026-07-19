import { Link } from "react-router-dom";

const links = [
  {
    title: "Quick Links",
    items: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Menu", path: "/menu" },
      { name: "Reservation", path: "/reservation" },
      { name: "Contact", path: "/contact" },
    ],
  },
];

function FooterLinks() {
  return (
    <>
      {links.map((section) => (
        <div key={section.title}>
          <h3 className="text-xl font-semibold mb-6 text-white">
            {section.title}
          </h3>

          <ul className="space-y-4">
            {section.items.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-gray-400 hover:text-amber-500 transition duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default FooterLinks;