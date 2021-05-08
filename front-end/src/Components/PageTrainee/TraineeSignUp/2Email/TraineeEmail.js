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
    props.history.push("/trainee/signup/step3");
  };
  const backClick = () => {
    props.history.push("/trainee/signup/step1");
  };
  const homeClick = () => {
    props.history.push("/");
    window.location = "/"
  };
  return (
    <div className="mainEmail">
      <form className="emailChoiceForm" onSubmit={handleSubmit(onSubmit)}>
        <h1>First things first, what's your email ?</h1>
        <h2>To link your paypal/cb order, please.</h2>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="name@example.com"
          {...register("email", {
            required: "required",

            minLength: { value: 1, message: "Please enter answer" },
          })}
        />
        {errors.hours && <span role="alert">{errors.hours.message}</span>}

        <input type="submit" className="inputSubmit" value="OK" />

        <button className="buttonBack" onClick={backClick}>
          Return
        </button>
        <button type="button" onClick={homeClick}>
          Home
        </button>
      </form>
    </div>
  );
}

export default EmailChoice;
