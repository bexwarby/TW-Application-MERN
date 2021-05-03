import "./calendrierTrainee.css";
import React, { useState } from "react";
import Calendar from "react-calendar";

function CalendrierTrainee() {
    /*function envoyer date*/
  const [rdv, setRdv] = useState(new Date());
  const onChange = (rdv) => {
    setRdv(rdv);
    console.log(rdv);
  };
/*dates NON disponibles*/
  const disabledDates = [
  new Date(2021, 4, 10),
  new Date(2021, 4, 13),
  new Date(2021, 4, 25),
];
/*function envoyer horaire*/
  const [horaire, setHoraire] = useState({});
  function handleChange(e) {
    let sendHoraire = {
      ...horaire,
      [e.target.name]: e.target.value,
    };
    setHoraire(sendHoraire);
  }
/*function envoyer date ET horaire*/
  async function submitRdv(event) {
    const option ={
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            Authorization : "bearer",
        },
        body: JSON.stringify({
            date : rdv,
            time : horaire
        }),
    };
  }

  return (
    <div>
      <Calendar onChange={onChange} value={rdv} tileDisabled={({date, view}) =>
                    (view === 'month') && // Block day tiles only
                    disabledDates.some(disabledDate =>
                      date.getFullYear() === disabledDate.getFullYear() &&
                      date.getMonth() === disabledDate.getMonth() &&
                      date.getDate() === disabledDate.getDate()
                    )} />

      <p>Choose time</p>
      <select id="horaire" name="horaire" size="" onChange={handleChange}>
        <option value="1">8-9</option>
        <option value="2">9-10</option>
        <option value="3">10-11</option>
        <option value="4">11-12</option>
        <option value="5">13-14</option>
        <option value="6">14-15</option>
        <option value="7">15-16</option>
        <option value="8">16-17</option>
      </select>

      <button type="button" onClick={submitRdv}>
        Envoyer
      </button>
    </div>
  );
}

export default CalendrierTrainee;
