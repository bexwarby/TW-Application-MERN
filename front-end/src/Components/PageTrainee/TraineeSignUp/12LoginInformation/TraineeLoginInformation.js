import React from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function TraineeLoginInformation(props) {
  const {
    register,
    handleSubmit,
  } = useForm();
  const { actions } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/trainee/signup/result");
  };
  const backClick = () => {
    props.history.push("/trainee/signup/step11");
  };
  const homeClick = () => {
    props.history.push("/");
    window.location = "/"
  };
  return (
    <div className="mainLoginInfo">
      <form className="loginInfoForm" onSubmit={handleSubmit(onSubmit)}>
        <h1>Please choose fullname and password</h1>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="your name"
          {...register("fullName", {
            required: "required",

            minLength: { value: 3, message: "Please enter fullname" },
          })}
        />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          {...register("password", {
            required: "required",

            minLength: { value: 3, message: "Please enter password" },
          })}
        />

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

export default TraineeLoginInformation;
