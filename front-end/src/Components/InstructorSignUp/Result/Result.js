import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

function Result(props) {
  const onSubmit = async (e) => {
    e.preventDefault();
    const message = await fetch(
      "process.env.REACT_APP_SERVER/instructor/signup",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: fullName,
          flightHours: flightHours,
          ratingName: ratingName,
          moduleName: moduleName,
          equipmentName: equipmentName,
          software: software,
          hoursRequested: hoursRequested,
          timeTeaching: timeTeaching,
          languageCodeIso: languageCodeIso,
          licenceFile: licenceFile,
          birthday: birthday,
          bio: bio,
          email: email,
        }),
      }
    );
    console.log(message);
    const data = await message.json();
    console.log(data);
  };

  const Result = (props) => {
    const { state } = useStateMachine(updateAction);

    return (
      <div>
        <pre> {JSON.stringify(state, null, 2)} </pre>
        <button className="valider" onClick={onSubmit}>
          VALIDER
        </button>
      </div>
    );
  };
}

export default Result;
