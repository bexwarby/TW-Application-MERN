import "./InstructorCalendrier.css";
import React, { useState } from "react";
import Calendar from "react-calendar";

function InstructorCalendrier() {
  /* Variables d'état */
  const [selectedDate, onChange] = useState(new Date()); // Date sélectionnée
  const [newAvailability, setNewAvailability] = useState({});
  const [availabilities, setAvailabilities] = useState([]); // Disponilités

  /* Méthodes */

  /**
   * Gestion des dates
   * @param {*} e
   */
  function handleDate(e) {
    // TODO: Vérifier que startDate et endDate sont le même jour

    /* Enregistrement de la date au format date */
    setNewAvailability({
      ...newAvailability,
      [e.target.name]: new Date(e.target.value),
    });
  }

  /**
   * Ajout de la nouvelle disponibilité à la liste
   */
  function addAvailability() {
    /* Ajout de la nouvelle disponibilité à la liste */
    setAvailabilities([...availabilities, newAvailability]);

    /* Vidage la nouvelle disponibilité */
    setNewAvailability({});

    // TODO: Envoyer les disponibiltés à jour au back-end
  }

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={selectedDate}
        onClickDay={(endDate) => alert("Heures disponibles: " + endDate)}
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
      <p>Availability start date:</p>
      <input type="datetime-local" name="startDate" onChange={handleDate} />

      <p>Availability end date:</p>
      <input type="datetime-local" name="endDate" onChange={handleDate} />

      <button className="submitCalendar" onClick={addAvailability}>
        Save
      </button>
    </div>
  );
}
// function InstructorCalendrier() {
//   /*function envoyer date*/
//   const [day, setDay] = useState(new Date());
//   const onChange = (day) => {
//     setDay(day);
//     console.log(day);
//   };
//   /*dates NON disponibles*/
//   const disabledDates = [
//     new Date(2021, 4, 10),
//     new Date(2021, 4, 13),
//     new Date(2021, 4, 25),
//   ];
//   /*function envoyer horaire*/
//   const [time, setTime] = useState({});
//   function handleChange(e) {
//     let sendTime = {
//       ...time,
//       [e.target.name]: e.target.value,
//     };
//     setTime(sendTime);
//     console.log(sendTime)
//   }

//   const submitRdv = async () => {
//     /*fetch*/

//     try {
//       const response = await fetch(
//         `${process.env.REACT_APP_SERVER}/calendrier/instructor/unavailability`,
//         {
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             date: day,
//             time: time,
//           }),
//         }
//       );
//       const res = await response.json();
//       console.log(res);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div>
//       <Calendar
//         onChange={onChange}
//         name="day"
//         value={day}
//         tileDisabled={({ date, view }) =>
//           view === "month" && // Block day tiles only
//           disabledDates.some(
//             (disabledDate) =>
//               date.getFullYear() === disabledDate.getFullYear() &&
//               date.getMonth() === disabledDate.getMonth() &&
//               date.getDate() === disabledDate.getDate()
//           )
//         }
//       />

//       <p>Choose time</p>
//       <select
//         id="time"
//         name="time"
//         size=""
//         onChange={handleChange}
//         value="timeSend"
//         key="timeSend"
//       >
//         <option value="8-9">8-9</option>
//         <option value="9-10">9-10</option>
//         <option value="10-11">10-11</option>
//         <option value="11-12">11-12</option>
//         <option value="13-14">13-14</option>
//         <option value="14-15">14-15</option>
//         <option value="15-16">15-16</option>
//         <option value="16-17">16-17</option>
//       </select>

//       <button type="button" onClick={submitRdv}>
//         Envoyer
//       </button>
//     </div>
//   );
// }

export default InstructorCalendrier;