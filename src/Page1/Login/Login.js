import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { db, auth } from "../../firebase";
import Burger from "./Burger.png";
import Pizza from "./Pizza.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Myfuncs = (e) => {
    diffToasts();
    SignIn(e);
  };

  const myfuncr = (e) => {
    diffToastr();
    register(e);
  };

  const diffToastr = () => {
    toast.success(email + " your account is successfuly created", {
      position: "bottom-center",
      autoClose: 1500,
      theme: "colored",
      closeButton: "true",
      hideProgressBar: "true",
    });
  };

  const diffToasts = () => {
    toast.success(email + " Welcome back!", {
      position: "bottom-center",
      autoClose: 1500,
      theme: "colored",
      closeButton: "true",
      hideProgressBar: "true",
    });
  };

  const SignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        history("/");
      })
      .catch((error) => alert(error.message));

    //some fancy firebase login
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //it successfully created a new user with email and password.
        console.log(auth);
        if (auth) {
          history("/");
        }
      })
      .catch((error) => alert(error.message));
    // do some fancy firebase register
  };

  return (
    <>
      <div className="login" style={{ marginBottom: "50px" }}>
        <div className="login__container">
          <h2>Sign-in</h2>
          <img className="Burger" src={Burger} alt="A Floating Burger" />
          <img className="Pizza" src={Pizza} alt="Image of a Pizza"></img>

          <form>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="E-mail"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />

            <button
              type="submit"
              onClick={Myfuncs}
              className="login__signInButton"
            >
              Sign In
            </button>

            <button
              type="submit"
              onClick={myfuncr}
              className="login__registerButton"
            >
              Create your account
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
