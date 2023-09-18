import React from "react";
import { Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Account from "./context/Account";
import CheckAuth from "./pages/CheckAuth";
import ProductDetail from "./pages/ProductDetail";
import Wishlist from "./pages/Wishlist";

const AllRoute = () => {
  const clientId =
    "184262426582-vvtv55dcvq3v234n8920n5416njiujfq.apps.googleusercontent.com";
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
