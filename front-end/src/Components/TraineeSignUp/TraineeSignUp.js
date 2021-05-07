/**
 * Trainee SignUp -- page d'inscription de l'eleve
 *
 */
import { useState } from "react";
import "./TraineeSignUp.css";
import "../general.css"

function TraineeSignUp() {
  /*variable d'état*/
  const [newSignup, setnewSignup] = useState({});
  function handleData(e) {
    let inscription = {
      ...newSignup,
      [e.target.name]: e.target.value,
    };
    console.log(inscription);
    setnewSignup(inscription);
  }

  const handleSignup = async () => {
    /*fetch*/
    console.log(newSignup);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/usr/trainee/signup`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newSignup),
        }
      );
      /*       console.log(response); */
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="newTrainee">
      {/* TITRE FORMULAIRE */}
      <h2 className="title">SIGNUP TRAINEE</h2>
      <div className="inputSection">
        {/* INPUT FULLNAME */}
        <label>Enter your full name: </label>
        <input type="text" name="fullName" onChange={handleData} required />

        {/* INPUT EMAIL */}
        <label>Enter your email: </label>
        <input type="text" name="email" onChange={handleData} required />

        {/* INPUT PASSWORD */}
        <label>Enter password *: </label>
        <input type="password" name="password" onChange={handleData} required />

        {/* BUTTON VALIDER */}
        <button className="enter" onClick={handleSignup}>
          Enter
      </button>
      </div>
    </div>
  );
}

export default TraineeSignUp;
