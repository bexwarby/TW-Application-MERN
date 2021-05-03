/**
 * Trainee SignUp -- page d'inscription de l'eleve
 *
 */
import { useState } from "react";
import "./TraineeSignUp.css";

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
        `${process.env.REACT_APP_SERVER}/trainee/signup`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          'Content-Type': "application/json"
        },
        body: JSON.stringify(newSignup),
      })
      const res = await response.json()
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="newTrainee">
      {/* TITRE FORMULAIRE */}
      <h2 className="title">SIGNUP TRAINEE</h2>

      {/* INPUT FULLNAME */}
      <label>Enter your full name * : </label>
      <br></br>
      <br></br>
      <input type="text" name="FullName" onChange={handleData} />

      <br></br>
      <br></br>

      {/* INPUT EMAIL */}
      <label>Enter your email *: </label>
      <br></br>
      <br></br>
      <input type="text" name="email" onChange={handleData} />

      <br></br>
      <br></br>

      {/* INPUT PASSWORD */}
      <label>Enter password *: </label>
      <br></br>
      <br></br>
      <input type="password" name="password" onChange={handleData} />
      <br></br>
      <br></br>

      <p> * fields required</p>
      <br></br>

      {/* BUTTON VALIDER */}
      <button className="valider" onClick={handleSignup}>
        Validate
      </button>
    </div>
  );
}

export default TraineeSignUp;
