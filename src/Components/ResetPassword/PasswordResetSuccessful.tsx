import React from "react";
import { Grid, TextField, Checkbox, Button } from "@mui/material";
import "./PasswordResetSuccessful.scss";
import loginIcon from "../../assets/login/main-logo.svg";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const PasswordResetSuccessful = () => {
  return (
    <div className="password-reset-successful">
      <Grid container>
        <Grid
          item
          md={6}
          lg={6}
          xl={5}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <div className="forgot-background"></div>
        </Grid>
        <Grid item xs={12} md={6} lg={6} xl={7}>
          <div className="forgot-main">
            <div className=" logo">
              <img src={loginIcon} />
            </div>
            <div className="forgot-conetent">
              <h2 className="forgot-title">Reset Password</h2>
              <p className="forgot-title">Successful</p>
            </div>
            <div className="animation-ctn">
              <div className="icon icon--order-success svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="154px"
                  height="154px"
                >
                  <g fill="none" stroke="#22AE73" stroke-width="2">
                    <circle
                      cx="77"
                      cy="77"
                      r="72"
                      style={{
                        strokeDasharray: "480px 480px",
                        strokeDashoffset: "960px",
                      }}
                    ></circle>
                    <circle
                      id="colored"
                      fill="#22AE73"
                      cx="77"
                      cy="77"
                      r="72"
                      style={{
                        strokeDasharray: "480px 480px",
                        strokeDashoffset: "960px",
                      }}
                    ></circle>
                    <polyline
                      className="st0"
                      stroke="#fff"
                      stroke-width="10"
                      points="43.5,77.8 63.7,97.9 112.2,49.4 "
                      style={{
                        strokeDasharray: "100px 100px",
                        strokeDashoffset: "200px",
                      }}
                    />
                  </g>
                </svg>
              </div>
            </div>
            <p>your password has been updated successfully</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default PasswordResetSuccessful;
