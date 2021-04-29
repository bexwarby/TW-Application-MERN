/**
 * Trainee SignIn -- page de connection de l'eleve
 *
 */

import logo from "../PageHome/logoHome.png";
import "./TraineeSignIn.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function TraineeSignIn() {
  const [traineeLogin, setTraineeLogin] = useState({});

  function handleData(e) {
    let connexion = {
      ...traineeLogin,
      [e.target.name]: e.target.value,
    };
    setTraineeLogin(connexion);
  }
  const handleSignUp = () => {
    const url = "http://localhost:5555/users/signUp";
    fetch(url, {
      method: "POST",
      header: {
        Accept: "application/json",
        authorization: "bearer token",
      },
      body: JSON.stringify(traineeLogin),
    }).then((value) => value.json());
  };

  return (
    <div id="content">
      <div className="contentLogo">
        <img src={logo} />
      </div>
      <section className="underLogo">
        <div className="contentInput">
          <input
            className="myMail"
            type="text"
            name="password"
            onChange={handleData}
          />

          <input
            className="myPassword"
            type="text"
            name="password"
            onChange={handleData}
          />
        </div>
        <div className="contentButton">
          <button className="buttonLogin" onClick={handleSignUp}>
            Login
          </button>
        </div>
        <div className="contentLink">
          <p className="subButton">
            Don't have an account? Sign-up
            <Link to="/Trainee/SignUp">
              <span className="linkHere">here</span>
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default TraineeSignIn;
