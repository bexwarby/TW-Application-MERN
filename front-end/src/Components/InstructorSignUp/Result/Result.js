import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function Result(props) {
  const { state } = useStateMachine(updateAction);
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
        body: JSON.stringify(state, null, 2),
      }
    );
    console.log(message);
    const data = await message.json();
    console.log(data);
  };

  return (
    <div>
      <pre> {JSON.stringify(state, null, 2)} </pre>
      <button className="valider" onClick={onSubmit}>
        VALIDER
      </button>
    </div>
  );
}

export default Result;
