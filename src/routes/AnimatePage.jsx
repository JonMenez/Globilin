import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "@containers/Layout";
import Home from "@pages/Home";

const AnimatePage = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {/* <ScrollToTop /> */}
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<div>Quienes Somos</div>} />
            <Route path="products" element={<div>Productos</div>} />
            <Route
              path="products/categories"
              element={<div>Categoria 1</div>}
            />
            <Route path="contact" element={<div>Contacto</div>} />
            <Route path="*" element={<div>Error 404</div>} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatePage;
