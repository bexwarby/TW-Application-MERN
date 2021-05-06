/**
 * Trainee SignIn -- page de connection de l'instructeur
 *
 */

import "./InstructorSignIn.css";
import "../general.css"

import { useState } from "react";
import { Link } from "react-router-dom";
function InstructorSignIn() {
  const [signIn, setSignIn] = useState({});

  function handleData(e) {
    let connexion = {
      ...signIn,
      [e.target.name]: e.target.value,
    };
    setSignIn(connexion);
  }
  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/usr/instructor/signin`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signIn),
        }
      );
      const res = await response.json();
      console.log("res", res);
      if (res) {
        localStorage.setItem("jwt", res.token);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="signIn">
      <h1 id="mainTitle">True-wings crew only </h1>

      <br></br>
      <div className="loginArea">
        <label>Email</label>
        <input type="email" name="email" onChange={handleData} />
        <label>Password</label>
        <input type="password" name="password" onChange={handleData} />
        <div className="checkBoxArea">
          <input
            className="checkBox"
            type="checkbox"
            name="checkbox"
            onClick="action()"
          />
          <label>
            confirmed that I'm a TW instructor and i don't have the right to get
            paid directly by a TW customer
          </label>
        </div>
        <div className="button">
          <button className="enter" onClick={handleSignIn}>Access page</button>
        </div>
        <div>
          <p>
            <Link className="link" to="/welcome">
              Don't have an account? Sign-up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default InstructorSignIn;
