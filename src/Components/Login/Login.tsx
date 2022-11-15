import { Grid, TextField, Checkbox, Button } from "@mui/material";
import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import loginIcon from "../../assets/login/main-logo.svg";
import errorIcon from "../../assets/login/errorIcon.svg";
import "./Login.scss";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { checkboxClasses } from "@mui/material/Checkbox";
import makeStyles from '@mui/styles/makeStyles';
import LoginModal from "./Modals/LoginModal";
import IncorrectAttempts from "./Modals/IncorrectAttempts";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const useStyles = makeStyles({
  root:{
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#f78812",
      
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#f78812",
      
    },
  }
  })
type userType={
  email:string,
  password:string,
}
const Login: React.FC = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [attemptsRemainingModal, setAttemptsRemainingModal] = React.useState<boolean>(false);
  const [incorrectAttemptsModal, setIncorrectAttempts] = React.useState<boolean>(false);

  const showPasswodHandler = () => {
    setShowPassword(!showPassword);
  };
  const initialSchema = {
    email: "",
    password: "",
    rememberMe: false,
  };
  const validate = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Enter a valid email"),
    password: Yup.string().required("Password is required"),
  });
  const registeredUsers = [
    { email: "admin@buzzhr.co.uk", password: "Admin@123" }
  ];


  const SignInSubmitHandler = () => {
    const logindata = {
      email:values.email,
      Pasword:values.password,
      rememberMe:values.rememberMe
    }
    console.log(logindata)
    
  
    let userFound:(userType | undefined) = registeredUsers.find((element:userType) => {
      return ( element.email === values.email && element.password === values.password );
    });
    if (userFound) {
      alert("Login Done succufully")
    
    }
  else{
    alert("Invalid User")
  }}
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialSchema,
      validationSchema: validate,
      onSubmit: SignInSubmitHandler,
    });
  
  return (
    <div className="login">
      <Grid container spacing={2}>
        <Grid item xs={12} md={7} lg={6} xl={7}>
          <div className="login-main">
            <div>
              <img src={loginIcon} />
            </div>
            <div>
              <h2 className="login-title">Get Started!</h2>
            </div>

            <form className="form" onSubmit={handleSubmit}>
              <TextField  sx={{ marginBottom:"3px",backgroundColor:'white'}}
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
             

              <FormControl className={classes.root} size="small"  sx={{marginTop:"30px", marginBottom:"3px",backgroundColor:'white'}}>
                <OutlinedInput
                  fullWidth
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange}
                  id="password"
                  onBlur={handleBlur}
                  error={!!(errors.password && touched.password)}
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
              {errors.password && touched.password && (
                <span className="error-message">
                  <img src={errorIcon} />
                  <small>{errors.password}</small>
                </span>
              )}

              <div className="checkbox-div">
                <div className="checkbox">
                  <Checkbox
                    id="rememberMe"
                    onChange={handleChange}
                    value={values.rememberMe}
                    {...label}
                    sx={{
                      [`&, &.${checkboxClasses.checked}`]: {
                        color: "#4C0027",
                      }, 
                    }}
                  />
                  <span> Remember me</span>
                </div>
                <div className="forgot-text">
                  <p>Forgot your password ?</p>
                </div>
              </div>
              <Button
                sx={{
                  background: "#4C0027",
                  margin: "10px 0",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  textTransform:"capitalize"
                }}
                variant="contained"
                className="button"
                type="submit"
               
              >
                Sign in
              </Button>
              <Button onClick={()=> setAttemptsRemainingModal(true)}> Remining attempts</Button>
              <Button onClick={()=> setIncorrectAttempts(true)}>incorrect attemps</Button>
            </form>

            <div>
              <p className="footer-text">
                <span className="content">Don't have an account? &nbsp;</span>
                <span className="signUp-text">sign up</span>
              </p>
            </div>
          </div>
        </Grid>
      
        <LoginModal setOpenViewModal={setAttemptsRemainingModal} openViewModal={attemptsRemainingModal}/>
        <IncorrectAttempts setOpenViewModal={setIncorrectAttempts} openViewModal={incorrectAttemptsModal}/>

        <Grid item sm={5} lg={6} xl={5} sx={{ display: { xs: "none", md: "block" } }}>
          <div className="loginBg"></div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
