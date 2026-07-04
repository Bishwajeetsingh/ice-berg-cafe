import Layout from "../components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Contact from "../pages/Contact";
import Reservation from "../pages/Reservation";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />

        <Route
          path="/menu"
          element={
            <Layout>
              <Menu />
            </Layout>
          }
        />

        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />

        <Route
          path="/reservation"
          element={
            <Layout>
              <Reservation />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;