import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";
import { useForm } from "react-hook-form";

function Result(props) {
  const { state } = useStateMachine(updateAction);
  const { actions } = useStateMachine({ updateAction });
  const { handleSubmit } = useForm();
  const onSubmit = async () => {
    actions.updateAction();
    props.history.push("/");

    const message = await fetch(
      `${process.env.REACT_APP_SERVER}/TraineeModule`,
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
    <form className="submitTraineeModule" onSubmit={handleSubmit(onSubmit)}>
      {/*<pre> {JSON.stringify(state, null, 2)} </pre>*/}
      <p>
        Thank you very much for joining us. We will be in touch very soon! Have
        a great day.
      </p>
      <input type="submit" value="Finish" />
    </form>
  );
}

export default Result;
