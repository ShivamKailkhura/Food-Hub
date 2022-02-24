import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { db, auth } from "../../firebase";
import Burger from "./Burger.png";
import Pizza from "./Pizza.png";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
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
    <div className="login">
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
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <button
          type="submit"
          onClick={register}
          className="login__registerButton"
        >
          Create your account
        </button>
      </div>
    </div>
  );
}

export default Login;
