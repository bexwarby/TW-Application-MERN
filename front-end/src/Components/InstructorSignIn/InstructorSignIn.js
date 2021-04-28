/**
 * Trainee SignIn -- page de connection de l'instructeur
 *
 */

import "./InstructorSignIn.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function InstructorSignIn(e) {
  const [signIn, setSignIn] = useState({});

  function handleData(e) {
    let connexion = {
      ...signIn,
      [e.target.name]: e.target.value,
    };
    setSignIn(connexion);
  }
  const handleSignIn = () => {
    const url = "http://localhost:3000/users/signIn";
    fetch(url, {
      method: "POST",
      header: {
        Accept: "application/json",
        authorization: "bearer token",
      },
      body: JSON.stringify(signIn),
    }).then((value) => value.json());
  };

  return (
    <div id="signIn">
      <h1 id="mainTitle">True-wings crew only </h1>

      <br></br>
      <div className="loginArea">
        <label>Enter the password in your sign up confirmation email</label>

        <input type="password" name="password" onChange={handleData} />
        <label>Email</label>
        <input type="email" name="email" onChange={handleData} />
        <div className="checkBoxArea">
          <input
            className="checkBox"
            type="checkbox"
            name="checkbox"
            onClick="action()"
          />
          <label>
            confirmed that i'm a TW instructor and i don't have the right to get
            paid directly by a TW customer
          </label>
        </div>
        <div className="button">
          <button onClick={handleSignIn}>Acces page</button>
        </div>
        <div>
          <span>Don't have an account? Sign-up</span>
          <Link className="link" to="/Instructor/SignUp">
            here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InstructorSignIn;
