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
      ...levelMode,
      [e.target.name]: e.target.value,
    };

    setLevelMode(submit);

    if (levelMode.name == "Private") {
      return (
        <select
          onChange={(e) => {
            setNameMode(e.target.value);
          }}
        >
          <option value="Coms master">Coms master</option>
          <option value="PPL Theoretic al support  coaching">
            PPL Theoretic al support & coaching
          </option>
          <option value="Coaching to become a successfu l pilot">
            Coaching to become a successful pilot{" "}
          </option>
        </select>
      );
    } else if ((levelMode.name = "Professional")) {
      return (
        <select
          onChange={(e) => {
            setNameMode(e.target.value);
          }}
        >
          <option value="IFR basics">IFR basics </option>
          <option value="IFR flights">IFR flights</option>
          <option value="IFR approach">IFR approach</option>
          <option value="Tailored training">Tailored training</option>
          <option value="CPL IRME Theoretic al support">
            CPL IRME Theoretic al support
          </option>
        </select>
      );
    } else if ((levelMode.name = "Expert")) {
      return (
        <select
          onChange={(e) => {
            setNameMode(e.target.value);
          }}
        >
          <option value="Flying the A320">Flying the A320</option>
          <option value="Flying the B737">Flying the B737</option>
          <option value="Airline assessme nt prep coaching">
            Airline assessme nt prep & coaching
          </option>
          <option value="Specific theoretic al support">
            Specific theoretic al support
          </option>
          <option value="Tailored advanced training">
            Tailored advanced training
          </option>
        </select>
      );
    }
  }
  function data() {
    let donnee = {
      ...levelMode,
      ...nameMode,
    };
    setModuleData(donnee);
  }

  return (
    <div>
      <h3>Module eleves</h3>
      <input value="module">choose your module</input>
      <select onChange={selectMode}>
        <option name="Private" value="Private pilot (15h)">
          Private pilot (15h)
        </option>
        <option name="Professional" value="  Professional pilot (25h)">
          Professional pilot (25h)
        </option>
        <option name="Expert" value=" Expert pilot (20h)">
          Expert pilot (20h)
        </option>
      </select>

      <input type="submit" value="ok" />

      <p>
        Afficher le module courant ou la selection des modules si aucun n'est en
        cours
      </p>
    </div>
  );
}

export default TraineeModule;
