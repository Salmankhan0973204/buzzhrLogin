import React from "react";
import { Grid, TextField, Checkbox, Button } from "@mui/material";
import "./ResetPassword.scss";
import { useFormik } from "formik";
import loginIcon from "../../assets/login/main-logo.svg";
import * as Yup from "yup";
import makeStyles from "@mui/styles/makeStyles";
import errorIcon from "../../assets/login/errorIcon.svg";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PasswordCritera from "./PasswordCritera";

// textfields hover color change
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

const ResetPassword: React.FC = () => {
  const classes = useStyles();

  //States
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState<boolean>(false);
  const [showPassCriteria, setShowPassCriteria] = React.useState<boolean>(false);

  //password function hide or show
  const showPasswodHandler = () => {
    setShowPassword(!showPassword);
  };

  const showConfirmPasswodHandler = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const hidePasswordCriteria = () => {
    setShowPassCriteria(false);
  };

  //initialSchema of formik
  const initialSchema = {
    password: "",
    confirmPassword: "",
  };

  //Basic validation
  const validate = Yup.object({
    password: Yup.string().required("Required Field"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password does not match")
      .required("Required Field"),
  });

  //form submittion
  const ResetPasswordSubmitHandler = () => {
    const resetPasswordData = {
      password:values.password,
      confirmPasword:values.confirmPassword
    }
    console.log(resetPasswordData);
  };

  //formik functions
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialSchema,
      validationSchema: validate,
      onSubmit: ResetPasswordSubmitHandler,
    });


  return (
    <div className="reset-password">
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
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <FormControl
                className={classes.root}
                size="small"
                sx={{ margin: "10px 0" }}
              >
                <OutlinedInput
                  fullWidth
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange}
                  onFocus={() => setShowPassCriteria(true)}
                  id="password"
                  // onBlur={handleBlur}
                  error={!!errors.password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOff onClick={showPasswodHandler} />
                        ) : (
                          <Visibility onClick={showPasswodHandler} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              {errors.password && (
                <span className="error-message">
                  <img src={errorIcon} />
                  <small>{errors.password}</small>
                </span>
              )}
              {showPassCriteria && <PasswordCritera value={values.password} />}

              <FormControl
                className={classes.root}
                size="small"
                sx={{ margin: "10px 0" }}
              >
                <OutlinedInput
                  fullWidth
                  placeholder="Re-type Password"
                  type={showConfirmPassword ? "text" : "password"}
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onFocus={hidePasswordCriteria}
                  id="confirmPassword"
                  // onBlur={handleBlur}
                  error={!!(errors.confirmPassword && touched.confirmPassword)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff onClick={showConfirmPasswodHandler} />
                        ) : (
                          <Visibility onClick={showConfirmPasswodHandler} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              {errors.confirmPassword && touched.confirmPassword && (
                <span className="error-message">
                  <img src={errorIcon} />
                  <small>{errors.confirmPassword}</small>
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
                className="change-password"
                type="submit"
              >
                Change Password
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResetPassword;
