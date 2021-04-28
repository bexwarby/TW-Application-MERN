/**
 * Trainee SignIn -- page de connection de l'eleve
 *
 */

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
    <div id="traineeLogin">
      <h1 id="mainTitle">True-wings trainee only</h1>

      <div className="loginArea">
        <h2>Enter the password*</h2>
        <h3 className="scriptSign">In your sign up confirmation email</h3>

        <input type="text" name="password" onChange={handleData} />

        <h2>E-mail*</h2>
        <input type="text" name="password" onChange={handleData} />

        <br></br>

        <div className="checkBoxArea">
          <input className="checkBox" type="checkbox" name="checkbox" />
          <span className="checkBoxText">
            I confirmed that i'm a TW trainee ans i don't have the right to paid
            directly a TW instructor.*
          </span>
        </div>

        <br></br>
        <br></br>

        <button onClick={handleSignUp}>Access page</button>
      </div>
      <div>
        <span>Don't have an account? Sign-up </span>
        <Link className="link" to="/Trainee/SignUp">
          here
        </Link>
      </div>
    </div>
  );
}

export default TraineeSignIn;
