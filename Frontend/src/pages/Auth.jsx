import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useContext } from "react";
import { AccountContext } from "../context/Account";
import "../css/Auth.css";

const Auth = () => {
  const { setAccount } = useContext(AccountContext);

  const onLoginScucess = (res) => {
    const decode = jwt_decode(res.credential);
    setAccount(decode);
  };
  const onLoginError = (res) => {
    console.log("login failed", res);
  };
  return (
    <div className="main">
      <div>
        <h1>Welcome to Recipe Application</h1>
        <GoogleLogin
          className="google-login-btn"
          onSuccess={onLoginScucess}
          onError={onLoginError}
        />
      </div>
    </div>
  );
};

export default Auth;
