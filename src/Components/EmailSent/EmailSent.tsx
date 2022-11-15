import React from 'react'
import './EmailSent.scss'
import { Grid, TextField, Checkbox, Button } from "@mui/material";
import loginIcon from "../../assets/login/main-logo.svg";

const EmailSent = () => {
  return (
    <div className='email-sent'>
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
              <h2 className="forgot-title">Email Sent</h2>
              <p>
              Password reset email has been sent to registered email.
              </p>
            </div>
          
            <div className="footer">
              <span className="brown-text">Back to </span>
              <span className="yallow-text">Login</span>
            </div>
          </div>
        </Grid>
      </Grid>

    </div>
  )
}

export default EmailSent