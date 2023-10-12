import React, { useContext } from "react";
import { AccountContext } from "../context/Account";
import ProductList from "./ProductList";
import "../css/Home.css";
import { Link } from "react-router-dom";

const Home = ({ userId }) => {
  const { account } = useContext(AccountContext);
 
  return (
    <div>
      <div className="account-header">
        <img className="account-image" src={account.picture} alt="profile" />
        <h1 className="account-name">{account.given_name}</h1>  

        <Link to="/">Home</Link>
 
        <Link to="/home/wishlist">MyFavourite</Link>
      </div>
      <ProductList userId={userId} />
    </div>
  );
};

export default Home;
