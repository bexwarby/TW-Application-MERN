import React from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function TraineeBirth(props) {
  const { register, handleSubmit } = useForm();
  const { action } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    action.updateAction(data);
    props.history.push("/Trainee/profile/step10");
  };
  const backClick = () => {
    props.history.push("./Trainee/profile/step8");
  };
  const homeClick = () => {
    props.history.push("/");
  };

  return (
    <div className="mainTraineeBirth">
      <form className="TraineeBirth" onSubmit={handleSubmit(onSubmit)}>
        <h1>Last question !</h1>
        <input type="date" label="birth" {...register("birth")} />
        <input type="submit" className="inputSubmit" value="OK" />
        <button className="button" onClick={backClick}>
          Return
        </button>
        <button className="button" onClick={homeClick}>
          Home
        </button>
      </form>
    </div>
  );
}
export default TraineeBirth;