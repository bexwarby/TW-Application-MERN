import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";
import { useForm } from "react-hook-form";
import "../general.css"

function Result(props) {
  const { state } = useStateMachine(updateAction);
  const { actions } = useStateMachine({ updateAction });
  const { handleSubmit } = useForm();
  const onSubmit = async () => {
    actions.updateAction();
    props.history.push("/");

    const message = await fetch(
      `${process.env.REACT_APP_SERVER}/usr/instructor/signup`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      }
    );
    console.log(message);
    const data = await message.json();

    console.log(data);
  };

  return (
    <form className="submitSignUp" onSubmit={handleSubmit(onSubmit)}>
      {/* <pre> {JSON.stringify(state, null, 2)} </pre> */}
      <p>
        Thank you very much for joining us. We will be in touch very soon! Have
        a great day.
      </p>
      
      <input type="submit" value="Finish" />
    </form>
  );
}

export default Result;
