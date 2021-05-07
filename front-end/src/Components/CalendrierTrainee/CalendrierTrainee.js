import "./calendrierTrainee.css";
import "../general.css";

import React, { useState } from "react";
import Calendar from "react-calendar";

function CalendrierTrainee() {
  /*function envoyer date*/
  const [day, setDay] = useState(new Date());
  const onChange = (day) => {
    setDay(day);
    console.log(day);
  };
  /*dates NON disponibles*/
  const availabilities = [
    {
      startDate: new Date(2021, 4, 10, 9),
      endDate: new Date(2021, 4, 10, 11),
    },
    {
      startDate: new Date(2021, 4, 11, 13),
      endDate: new Date(2021, 4, 11, 19),
    },
    {
      startDate: new Date(2021, 4, 23, 14),
      endDate: new Date(2021, 4, 23, 15),
    },
  ];

  /*function envoyer horaire*/
  const [time, setTime] = useState(0);
  function handleChange(e) {
    let sendTime = {
      ...time,
      [e.target.name]: e.target.value,
    };
    setTime(sendTime);
    console.log(sendTime);
  }

  /*fetch*/
  const submitRdv = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/trainee/calendar/book`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            traineeId: "609424c66354f85420ebc75a",
            startDate: day,
            endDate: day,
            time: Number(time.time),
          }),
        }
      );
      const res = await response.json();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  function renderOptions() {
    /* Liste des heures disponibles */
    let avaibleHours = [];

    /* Timestamp du jour sélectionné à 0h */
    const dayTimestamp = day.getTime();

    availabilities.forEach((availability) => {
      /* Jour de la disponibilité */
      let startDay = new Date(availability.startDate.getTime()); // Nouvel objet date

      /* Passage de l'heure à minuit */
      startDay.setHours(0, 0, 0, 0);

      /* Si le jour de la disponibilité correspond au jour sélectionné */
      if (dayTimestamp == startDay.getTime()) {
        /* Récupération des heures de début et de fin de la disponiblité */
        const startHour = availability.startDate.getHours();
        const endHour = availability.endDate.getHours();

        /* Création de la liste des heure de l'heure de début à l'heure de fin */
        for (let i = startHour; i <= endHour; i++) {
          avaibleHours.push(i);
        }
      }
    });

    /* Génération du JSX */
    return avaibleHours.map((hour) => (
      <option value={hour}>
        {hour}h - {hour + 1}h
      </option>
    ));
  }

  return (
    <div>
      <Calendar
        onChange={onChange}
        name="day"
        value={day}
        tileDisabled={({ date }) => {
          let greyedOut = true;

          availabilities.forEach((a) => {
            a.startDate.setHours(0, 0, 0, 0);
            a.endDate.setHours(0, 0, 0, 0);

            const dateTimestamp = date.getTime();

            if (
              dateTimestamp >= a.startDate.getTime() &&
              dateTimestamp <= a.endDate.getTime()
            ) {
              greyedOut = false;
            }
          });

          return greyedOut;
        }}
      />

      <p>Choose time</p>
      <select
        id="time"
        name="time"
        size=""
        onChange={handleChange}
        value="timeSend"
        key="timeSend"
      >
        {renderOptions()}
      </select>

      <button type="button" onClick={submitRdv}>
        Envoyer
      </button>
    </div>
  );
}

export default CalendrierTrainee;
