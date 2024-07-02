import React from "react";
import LoginButton from "./LoginButton";
import './Login.css'

function LoginView() {
  return(
    <div className="login-popup">
      <p>Log in or sign up to use the website</p>
      <LoginButton />
    </div>
  )
}

export default LoginView;