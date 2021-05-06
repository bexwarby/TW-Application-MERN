import "./calendrierTrainee.css";
import "../general.css"

import React, { useState } from "react";
import Calendar from "react-calendar";

function CalendrierTrainee() {
  /*function envoyer date*/
  const [day, setDay] = useState(new Date());
  const onChange = (day) => {
    setDay(day);
    //console.log(day);
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
    //console.log(sendHoraire)
  }
  /*function envoyer date ET horaire*/
  /*async function submitRdv(event) {
    const message = await fetch(
      `${process.env.REACT_APP_SERVER}/trainee/calendrier`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: day,
          horaire: horaire,
        }),
      }
    );
    console.log(message);
    const data = await message.json();
    console.log(data);
  }*/

  const submitRdv = async () => {
    /*fetch*/

    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/trainee/calendrier`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            date: day,
            horaire: horaire,
          }),
        }
      );
      const res = await response.json();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Calendar
        onChange={onChange}
        name="day"
        value={day}
        tileDisabled={({ date, view }) =>
          view === "month" && // Block day tiles only
          disabledDates.some(
            (disabledDate) =>
              date.getFullYear() === disabledDate.getFullYear() &&
              date.getMonth() === disabledDate.getMonth() &&
              date.getDate() === disabledDate.getDate()
          )
        }
      />

      <p>Choose time</p>
      <select
        id="horaire"
        name="horaire"
        size=""
        onChange={handleChange}
        value="horaireSend"
      >
        <option value="8-9">8-9</option>
        <option value="9-10">9-10</option>
        <option value="10-11">10-11</option>
        <option value="11-12">11-12</option>
        <option value="13-14">13-14</option>
        <option value="14-15">14-15</option>
        <option value="15-16">15-16</option>
        <option value="16-17">16-17</option>
      </select>

      <button type="button" onClick={submitRdv}>
        Envoyer
      </button>
    </div>
  );
}

export default CalendrierTrainee;
