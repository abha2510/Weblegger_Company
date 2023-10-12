import React from "react";
import { Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Account from "./context/Account";
import CheckAuth from "./pages/CheckAuth";
import ProductDetail from "./pages/ProductDetail";
import Wishlist from "./pages/Wishlist";
import Home from "./pages/Home";

const AllRoute = () => {
  const clientId =process.env.REACT_APP_CLIENT_ID;

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <GoogleOAuthProvider clientId={clientId}>
              <Account>
                <CheckAuth />
              </Account>
            </GoogleOAuthProvider>
          }
        />
        <Route path="/detail" element={<ProductDetail />} />
        <Route path="/home/wishlist" element={<Wishlist />} />
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </div>
  );
};

export default AllRoute;
