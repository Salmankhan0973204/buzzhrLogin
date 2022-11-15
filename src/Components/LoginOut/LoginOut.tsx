import React from "react";
import "./LoginAgain.scss";
import logo from "../../assets/login/main-logo.svg";
import background from "../../assets/loginAgain/background-img.svg";
import Button from "@mui/material/Button";
import { margin } from "@mui/system";

const LoginAgain = () => {
  return (
    <div className="loginAgain">
      <div className="main-body">
        <div className="header">
          <img src={logo} alt="logo" width="202px" />
        </div>
        <div className="contant">
            
          <h1>See You Again</h1>
          <span>Do Something good today</span>
          <Button className="btn" sx={{width:"170px" , margin:" 50px auto 0 auto" , background:"#4c0027"}} variant="contained">Log in Again</Button>
        </div>
        <div className="backgound-image"></div>
      </div>
    </div>
  );
};

export default LoginAgain;
