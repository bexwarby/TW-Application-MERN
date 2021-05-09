/**
 * Module de l'eleve
 */

import "./TraineeModule.css";
import { useState } from "react";

function TraineeModule() {
  const [moduleData, setModuleData] = useState({});
  const [levelMode, setLevelMode] = useState({});
  const [nameMode, setNameMode] = useState({});

  function selectMode(e) {
    let submit = {
      [e.target.name]: e.target.value,
      nbHours: e.target.hours,
      price: e.target.price,
    };

    setLevelMode(submit);

    if (levelMode.name == "Private") {
      return (
        <select
          onChange={(e) => {
            privateChoice = {
              [e.target.name]: e.target.value,
            };
            setNameMode(PrivateChoice);
          }}
        >
          <option name="choiceOption" value="Coms master">
            Coms master
          </option>
          <option
            name="choiceOption"
            value="PPL Theoretic al support  coaching"
          >
            PPL Theoretic al support & coaching
          </option>
          <option
            name="choiceOption"
            value="Coaching to become a successfu l pilot"
          >
            Coaching to become a successful pilot{" "}
          </option>
        </select>
      );
    } else if ((levelMode.name = "Professional")) {
      return (
        <select
          onChange={(e) => {
            proChoice = {
              [e.target.name]: e.target.value,
            };
            setNameMode(proChoice);
          }}
        >
          <option name="choiceOption" value="IFR basics">
            IFR basics{" "}
          </option>
          <option name="choiceOption" value="IFR flights">
            IFR flights
          </option>
          <option name="choiceOption" value="IFR approach">
            IFR approach
          </option>
          <option name="choiceOption" value="Tailored training">
            Tailored training
          </option>
          <option name="choiceOption" value="CPL IRME Theoretic al support">
            CPL IRME Theoretic al support
          </option>
        </select>
      );
    } else if ((levelMode.name = "Expert")) {
      return (
        <select
          onChange={(e) => {
            expertChoice = {
              [e.target.name]: e.target.value,
            };
            setNameMode(expertChoice);
          }}
        >
          <option name="choiceOption" value="Flying the A320">
            Flying the A320
          </option>
          <option name="choiceOption" value="Flying the B737">
            Flying the B737
          </option>
          <option name="choiceOption" value="Airline assessme nt prep coaching">
            Airline assessme nt prep & coaching
          </option>
          <option name="choiceOption" value="Specific theoretic al support">
            Specific theoretic al support
          </option>
          <option name="choiceOption" value="Tailored advanced training">
            Tailored advanced training
          </option>
        </select>
      );
    }
  }
  async function data() {
    let donnee = {
      ...levelMode,
      ...nameMode,
    };
    setModuleData(donnee);
    try {
      let myOption = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(moduleData),
      };
      const reponse = await fetch(
        `${process.env.REACT_APP_SERVER}/trainee/module`,
        myOption
      );
      const result = await reponse.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h3>Module eleves</h3>
      <input value="module">choose your module</input>
      <select onChange={selectMode}>
        <option
          name="moduleSelect"
          price="195"
          hours="5h"
          value="Private pilot (15h)"
        >
          Private pilot (15h)
        </option>
        <option
          name="moduleSelect"
          price="195"
          hours="5h"
          value="  Professional pilot (25h)"
        >
          Professional pilot (25h)
        </option>
        <option
          name="moduleSelect"
          price="195"
          hours="5h"
          value=" Expert pilot (20h)"
        >
          Expert pilot (20h)
        </option>
      </select>

      <input type="submit" value="ok" onClick={data} />

      <p>
        Afficher le module courant ou la selection des modules si aucun n'est en
        cours
      </p>
    </div>
  );
}

export default TraineeModule;
