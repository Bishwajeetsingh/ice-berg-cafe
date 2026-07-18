import cappuccino from "../assets/images/menu/cappuccino.jpg";
import latte from "../assets/images/menu/latte.jpg";
import espresso from "../assets/images/menu/espresso.jpg";
import mocha from "../assets/images/menu/mocha.jpg";
import coldCoffee from "../assets/images/menu/cold-coffee.jpg";
import brownie from "../assets/images/menu/brownie.jpg";

const menuData = [
  {
    id: 1,
    name: "Cappuccino",
    category: "Coffee",
    price: 249,
    rating: 4.8,
    image: cappuccino,
    description: "Rich espresso with steamed milk."
  },
  {
    id: 2,
    name: "Latte",
    category: "Coffee",
    price: 279,
    rating: 4.7,
    image: latte,
    description: "Smooth latte with creamy milk."
  },
  {
    id: 3,
    name: "Espresso",
    category: "Coffee",
    price: 199,
    rating: 4.9,
    image: espresso,
    description: "Strong & bold espresso shot."
  },
  {
    id: 4,
    name: "Mocha",
    category: "Coffee",
    price: 299,
    rating: 4.8,
    image: mocha,
    description: "Chocolate flavored premium coffee."
  },
  {
    id: 5,
    name: "Cold Coffee",
    category: "Cold",
    price: 229,
    rating: 4.6,
    image: coldCoffee,
    description: "Chilled coffee with fresh cream."
  },
  {
    id: 6,
    name: "Brownie",
    category: "Dessert",
    price: 189,
    rating: 4.9,
    image: brownie,
    description: "Chocolate brownie with ice cream."
  }
];

export default menuData;