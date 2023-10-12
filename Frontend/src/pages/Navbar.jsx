import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="account-header">
        <Link to="/">Home</Link>
        <Link to="/home">Detail</Link>
        <Link to="/home/wishlist">MyFavourite</Link>
      </div>
    </div>
  );
};

export default Navbar;
