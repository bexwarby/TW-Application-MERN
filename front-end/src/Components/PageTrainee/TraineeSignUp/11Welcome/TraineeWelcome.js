import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

const TraineeWelcome = (props) => {
  const { handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/trainee/signup/step12");
  };

  const backClick = () => {
    props.history.push("/trainee/signup/step10");
  };

  const homeClick = () => {
    props.history.push("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="title">Welcome on board ! </h1>
        <p className="subtitle">
          We are already looking for the instructor that best suits your need.
          we will keep you informed.
          <br />
          Congrats, as pilots ourselves, we believe in true enthusiasts !
          <br />
          "Great pilots are made not born"
        </p>
      </div>
      {/* Submit Button  */}
      <input type="submit" value="Take Off" />
      <button type="button" onClick={backClick}>
        Back
      </button>
      <button type="button" onClick={homeClick}>
        Home
      </button>
    </form>
  );
};

export default TraineeWelcome;
