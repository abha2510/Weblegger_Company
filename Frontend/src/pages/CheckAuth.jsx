import React, { useContext } from "react";
import { AccountContext } from "../context/Account";
import Auth from "./Auth";
import Home from "./Home";

const CheckAuth = () => {
  const { account } = useContext(AccountContext);

  const userId = account ? account.sub : null;

  localStorage.setItem("userId", userId);

  return <div>{account ? <Home userId={userId} /> : <Auth />}</div>;
};

export default CheckAuth;
