import React from "react";
import { Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Account from "./context/Account";
import CheckAuth from "./pages/CheckAuth";
import ProductDetail from "./pages/ProductDetail";
import Wishlist from "./pages/Wishlist";

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
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
};

export default AllRoute;
