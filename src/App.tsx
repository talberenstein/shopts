import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import { Home } from "./components/Home";

const App: React.FC = () => {
  return (
    <>
      <Link to="/">
        <Header title="RandomMart 🦄" paragraph="😀" />
      </Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Home/>} />
        {/* <Route path="/cart" element={<Cart/>} /> */}
        <Route path="/orders" element={<></>} />
      </Routes>
    </>
  );
};

export default App;
