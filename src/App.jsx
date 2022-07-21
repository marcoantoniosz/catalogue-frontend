import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import NewProduct from "./pages/Admin/NewProduct";
import NewCategory from "./pages/Admin/NewCategory";
import NewImages from "./pages/Admin/NewImages";
import EditProduct from "./pages/Admin/EditProduct";
import EditCategory from "./pages/Admin/EditCategory";
import Custom from "./pages/Admin/Custom";
import EditProductId from "./pages/Admin/EditProductId";
import EditCategoryId from "./pages/Admin/EditCategoryId";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/new-product" element={<NewProduct />} />
      <Route path="/admin/new-category" element={<NewCategory />} />
      <Route path="/admin/new-images" element={<NewImages />} />
      <Route path="/admin/edit-product" element={<EditProduct />} />
      <Route path="/admin/edit-category" element={<EditCategory />} />
      <Route path="/admin/custom" element={<Custom />} />
      <Route path="/admin/edit-product/:id" element={<EditProductId />} />
      <Route path="/admin/edit-category/:id" element={<EditCategoryId />} />
    </Routes>
  );
}

export default App;
