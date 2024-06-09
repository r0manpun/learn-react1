import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import CreateProducts from "../productComponent/CreateProducts";
import Products from "../productComponent/Products";
import GetProductDetails from "../productComponent/GetProductDetails";
// import UpdateProduct from "../productComponent/UpdateProduct";
import Footer from "./Footer";
import CreateProduct from "../productComponent/withFormik/CreateProduct";
import UpdateProduct from "../productComponent/withFormik/UpdateProduct";

const ProductsRoute = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route index element={<div>Home page</div>}></Route>
          <Route path="products" element={<Outlet />}>
            <Route
              index
              element={
                <div>
                  Get all products <Products />
                </div>
              }
            ></Route>
            <Route
              path="create"
              element={
                // <CreateProducts />
                <CreateProduct />
              }
            ></Route>
            <Route path=":id" element={<GetProductDetails />}></Route>
            <Route path="update" element={<Outlet />}>
              <Route path=":id" element={<UpdateProduct />}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default ProductsRoute;
