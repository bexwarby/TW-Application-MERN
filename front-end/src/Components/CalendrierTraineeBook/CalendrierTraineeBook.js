import "./calendrierTraineeBook.css";
import React, { useState } from "react";
import Calendar from "react-calendar";

function CalendrierTrainee() {
  /*function envoyer date*/
  const [day, setDay] = useState(new Date());
  const onChange = (day) => {
    setDay(day);
    console.log(day);
  };
  /*dates disponibles*/
  const availabilities = [
    {
      startDate: new Date(2021, 4, 10, 8),
      endDate: new Date(2021, 4, 10, 11),
    },
    {
      startDate: new Date(2021, 4, 11, 13),
      endDate: new Date(2021, 4, 11, 17),
    },
    {
      startDate: new Date(2021, 4, 23, 14),
      endDate: new Date(2021, 4, 2, 15),
    },
  ];

  /*function envoyer horaire*/
  const [time, setTime] = useState({});
  function handleChange(e) {
    let sendTime = {
      ...time,
      [e.target.name]: e.target.value,
    };
    setTime(sendTime);
    console.log(sendTime);
  }

  const submitRdv = async () => {
    /*fetch*/
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/calendrier/trainee/book`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            date: day,
            time: time,
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

      <label htmlFor="time">Choose horary</label>
      <select
        id="time"
        name="time"
        size=""
        onChange={handleChange}
        value="timeSend"
        key="timeSend"
        isDisabled={(time) => {
          let greyedOut = true;
          availabilities.forEach((a) => {
            a.startDate.setHours(0, 0, 0, 0);
            a.endDate.setHours(0, 0, 0, 0);

            const dateTimestamp = time.getHours();

            if (
              dateTimestamp >= a.startDate.getTime() &&
              dateTimestamp <= a.endDate.getTime()
            ) {
              greyedOut = false;
            }
          });
          return greyedOut;
        }}
      >
        <option>Time</option>
        <option value="8-9">8-9</option>
        <option value="9-10">9-10</option>
        <option value="10-11">10-11</option>
        <option value="11-12">11-12</option>
        <option value="13-14">13-14</option>
        <option value="14-15">14-15</option>
        <option value="15-16">15-16</option>
        <option value="16-17">16-17</option>
      </select>
      {renderOptions()}
      <button type="button" onClick={submitRdv}>
        Envoyer
      </button>
    </div>
  );
}

export default CalendrierTrainee;

/*const availabilities = [
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
      endDate: new Date(2021, 4, 26, 15),
    },
  ];

const date = new Date(2021, 4, 29);
let greyedOut = true;
availabilities.forEach((a) => {
            a.startDate.setHours(0, 0, 0, 0);
            a.endDate.setHours(0, 0, 0, 0);
            const dateTimestamp = date.getTime();

            if (
              dateTimestamp >= a.startDate.getTime() &&
              dateTimestamp <= a.endDate.getTime()){
              greyedOut = false;
            }
});
        
        console.log(greyedOut);*/
