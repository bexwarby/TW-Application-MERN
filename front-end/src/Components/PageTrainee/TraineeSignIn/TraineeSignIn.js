/**
 * Trainee SignIn -- page de connection de l'eleve
 *
 */

/* import logo from "../PageHome/logoHome.png";
 */import "./TraineeSignIn.css";
import { useState } from "react";
import { Link } from "react-router-dom";


function TraineeSignIn({ setTraineeId, setUserID }) {
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
      localStorage.setItem("jwt", res.token);
      setTraineeId(res.traineeId)
      setUserID(res.traineeId)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="content">
      <div className="contentLogo">{/* <img src={logo} /> */}</div>
      <section className="underLogo">
        <div className="contentInput">
          <input
            className="myMail"
            type="text"
            name="email"
            onChange={handleData}
          />

          <input
            className="myPassword"
            type="password"
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
            <Link to="/trainee/signup">
              <span className="linkHere">here</span>
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default TraineeSignIn;
