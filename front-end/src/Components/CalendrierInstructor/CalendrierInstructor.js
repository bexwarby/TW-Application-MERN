import "./calendrierInstructor.css";
import React, { useState } from "react";
import CalendarTemplate from "availability-calendar-react";

function CalendrierInstructor() {
  /*Dates indisponibilités Instructor*/
  const [availability, setAvailability] = useState([]);
  const Calendar = CalendarTemplate({
    availability,
    setAvailability,
  });
  console.log(availability);
  return (
    <div>
      <Calendar />
    </div>
  );
}

export default CalendrierInstructor;
