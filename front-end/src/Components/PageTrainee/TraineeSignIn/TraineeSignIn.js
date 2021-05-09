/**
 * Trainee SignIn -- page de connection de l'eleve
 *
 */

import { useState, useContext } from "react";
import { AppContext } from '../../../AppContext'
import { Link } from "react-router-dom";
import "./TraineeSignIn.css";
import 'bootstrap/dist/css/bootstrap.min.css';



function TraineeSignIn() {
  const context = useContext(AppContext)
  const [traineeLogin, setTraineeLogin] = useState({});

  function handleData(e) {
    let connexion = {
      ...traineeLogin,
      [e.target.name]: e.target.value,
    };
    setTraineeLogin(connexion);
  }
  const handleSignUp = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/usr/trainee/signin`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(traineeLogin),
        }
      );
      const res = await response.json();
      if (res.token) {
        localStorage.setItem("jwt", res.token);
        context.setUserID({ traineeId: res.traineeId, token: res.token })
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="content">
      <section className="underLogo">
        <div className="contentInput" >
          <label>Email</label>
          <input
            className="myMail"
            type="text"
            name="email"
            style={{ 'color': 'white' }}
            onChange={handleData}
          />
          <label>Password</label>
          <input
            className="myPassword"
            type="password"
            name="password"
            style={{ 'color': 'white' }}
            onChange={handleData}
          />
        </div>
        <div className="contentButton">
          <button className="enter" onClick={handleSignUp}>
            Login
          </button>
        </div>
        <div className="contentLink">
          <p className="subButton">
            Don't have an account? <br />
            <Link to="/trainee/signup/step1">
              <span className="linkHere"> Sign-up here</span>
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default TraineeSignIn;
