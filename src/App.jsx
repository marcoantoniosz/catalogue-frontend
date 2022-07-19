import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Admin from "./pages/Admin";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
