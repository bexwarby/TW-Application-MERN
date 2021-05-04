import React from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";
function EmailChoice(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { actions } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/Trainee/module/step3");
  };
  const backClick = () => {
    props.history.push("/Trainee/module/step1");
  };
  return (
    <div className="mainEmail">
      <form className="emailChoiceForm" onSubmit={handleSubmit(onSubmit)}>
        <h1>First things first, what's your email ?</h1>
        <h2>To link your paypal/cb order, please.</h2>
        <input
          type="text"
          className="inputEmail"
          name="email"
          {...register("email", {
            required: "required",

            minLength: { value: 1, message: "Please enter answer" },
          })}
        />
        {errors.hours && <span role="alert">{errors.hours.message}</span>}
        <span>
          <input type="submit" className="inputSubmit" value="submit" />
        </span>
        <button className="buttonBack" onClick={backClick}>
          Return
        </button>
      </form>
    </div>
  );
}

export default EmailChoice;
