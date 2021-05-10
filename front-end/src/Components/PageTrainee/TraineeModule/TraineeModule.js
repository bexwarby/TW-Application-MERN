/**
 * Module de l'eleve
 */

import "./TraineeModule.css";
import { useState, useEffect, useContext } from "react";
import { AppContext } from '../../../AppContext'


function TraineeModule() {
  const context = useContext(AppContext)

  const [moduleData, setModuleData] = useState([])
  const [level, setLevel] = useState({})
  const [step, setStep] = useState({})
  const [idxL, setIdxL] = useState(null)

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_SERVER}/trainee/modules`,
          {
            headers: {
              'Accept': "application/json",
              "Content-Type": "application/json",
              'Authorization': `Bearer ${context.userID.token}`
            },
          })

        const modules = await res.json()
        setModuleData(modules)
        console.log(modules);

      } catch (err) {
        console.log(err);
      }
    }
    fetchModules()
  }, []);

  const selectLevel = (e) => {
    const lvl = {
      [e.target.name]: e.target.value
    }
    setLevel(lvl)
    moduleData.forEach((mod, idx) => {
      if (mod.levelName === e.target.value) {
        setIdxL(idx)
      }
    })
    console.log(moduleData[idxL]);
  }

  const selectStep = (e) => {
    const stp = {
      [e.target.name]: e.target.value
    }
    setStep(stp)

    console.log(level, step);
  }

  const handleSubmit = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER}/trainee/module/${context.userID.traineeId}`,
        {
          method: 'post',
          headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': `Bearer ${context.userID.token}`
          },
          body: JSON.stringify({level, step})
        })
        const confirm = await res.json()
        console.log(confirm);
    } catch (err) {
      console.log(err);
    }


  }


  return (
    <div id="traineeModule" className="formInput">

      <h3>Modules</h3>

      <select name="levelName" onChange={selectLevel}>
        {moduleData.map((module, idx) =>
          <option value={module.levelName} key={idx}>
            {module.levelName}
          </option>
        )}
      </select>

      <br />

      {idxL &&
        <select name="steps" onChange={selectStep}>
          {moduleData[idxL].steps.map((step, idx) =>
            <option value={step.name} key={idx}>
              {step.name}
            </option>
          )}
        </select>
      }


      <button className="enter" type="submit" onClick={handleSubmit} >
        Selectionner
      </button>

    </div>
  );
}

export default TraineeModule;
