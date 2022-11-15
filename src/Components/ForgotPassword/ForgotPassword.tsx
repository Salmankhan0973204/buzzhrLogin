import React from "react";
import { Grid, TextField, Checkbox, Button } from "@mui/material";
import "./ForgotPassword.scss";
import { useFormik } from "formik";
import loginIcon from "../../assets/login/main-logo.svg";
import * as Yup from "yup";
import makeStyles from "@mui/styles/makeStyles";
import errorIcon from "../../assets/login/errorIcon.svg";
const useStyles = makeStyles({
  root: {
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#f78812",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#f78812",
    },
  },
});
type userType = {
  email: string;
};

const ForgotPassword: React.FC = () => {
  const classes = useStyles();
  const initialSchema = {
    email: "",
  };
  const validate = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Enter a valid email"),
  });
  const SignInSubmitHandler = () => {};
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialSchema,
      validationSchema: validate,
      onSubmit: SignInSubmitHandler,
    });
  return (
    <div className="forgot-password">
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
              <h2 className="forgot-title">Forgot Password</h2>
              <p>
                Enter the email assosiated with your account and we’ll send an
                email with instructions to reset your password.
              </p>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <TextField
                sx={{ margin: "30px 0" }}
                fullWidth
                size="small"
                type="email"
                id="email"
                className={classes.root}
                variant="outlined"
                placeholder="Email"
                error={!!(errors.email && touched.email)}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <span className="error-message">
                  <img src={errorIcon} />
                  <small>{errors.email}</small>
                </span>
              )}
              <Button
                sx={{
                  background: "#4C0027",
                  margin: "10px 0",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  textTransform: "capitalize",
                  width: "100%",
                  cursor: "pointer",
                }}
                variant="contained"
                className="button"
                type="submit"
              >
                Continue
              </Button>
            </form>
            <div className="footer">
              <span className="brown-text">Back to </span>{" "}
              <span className="yallow-text">Login</span>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ForgotPassword;
