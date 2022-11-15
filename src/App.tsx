import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import LoginAgain from './Components/LoginAgain/LoginAgain';
import EmailSent from './Components/EmailSent/EmailSent';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import PasswordResetSuccessful from './Components/ResetPassword/PasswordResetSuccessful';
import AntDesign from './Components/AntDesign/AntDesign';

function App() {
  return (
    <div className="App">
      {/* <AntDesign/> */}
      <Login/>
      {/* <ForgotPassword/> */}
      {/* <LoginAgain/> */}
      {/* <EmailSent/> */}
      {/* <ResetPassword/> */}
      {/* <PasswordResetSuccessful/> */}
 
    </div>
  );
}

export default App;
