import React from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";
function TraineeWeekStart(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { actions } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/trainee/signup/step8");
  };
  const backClick = () => {
    props.history.push("/trainee/signup/step6");
  };
  const homeClick = () => {
    props.history.push("/");
  };
  return (
    <div className="mainTimeForTrained">
      <form className="TimeForTrainedForm" onSubmit={handleSubmit(onSubmit)}>
        <h1>
          Please let us know the more convenient time for you to be trained ?
        </h1>
        <h2>Day of the week, part of the day...</h2>
        <input
          type="text"
          id="wishedWork"
          name="wishedWork"
          {...register("wishedWork", {
            required: "required",

            minLength: { value: 1, message: "Type your answer here" },
          })}
        />
        {errors.hours && <span role="alert">{errors.hours.message}</span>}

        <input type="submit" value="OK" />
        <button className="button" onClick={backClick}>
          return
        </button>
        <button className="button" onClick={homeClick}>
          Home
        </button>
      </form>
    </div>
  );
}

export default TraineeWeekStart;
