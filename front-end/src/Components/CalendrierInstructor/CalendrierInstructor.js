import "./calendrierInstructor.css";

import React, { useState } from "react";
import Calendar from "react-calendar";
function CalendrierInstructor() {
  const [value, onChange] = useState(new Date());
  const [hours, setHours] = useState("");
  const [data, setData] = useState({});

  function handleHours(event) {
    let selectHours = {
      [event.target.name]: event.target.value,
    };
    setHours(selectHours);
  }
  function handleData() {
    let donnee = {
      ...data,
      date: value,
      heure: hours,
    };
    setData(donnee);
    console.log(data);
  }
  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <p>Choose time</p>
      <select id="time" name="time" onChange={handleHours} value="timeSend">
        {/**/}
        <option value=" ">--Please choose hours time slot--</option>
        <option value="8-9">8h-9h</option>
        <option value="9-10">9h-10h</option>
        <option value="10-11">10h-11h</option>
        <option value="11-12">11h-12h</option>
        <option value="13-14">13h-14h</option>
        <option value="14-15">14h-15h</option>
        <option value="15-16">15h-16h</option>
        <option value="16-17">16h-17h</option>
      </select>
      <input type="submit" className="submitCalendar" onClick={handleData} />
    </div>
  );
}
// function CalendrierInstructor() {
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

export default CalendrierInstructor;
