import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";

import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Contact from "../pages/Contact";
import Reservation from "../pages/Reservation";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="contact" element={<Contact />} />
          <Route path="reservation" element={<Reservation />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;