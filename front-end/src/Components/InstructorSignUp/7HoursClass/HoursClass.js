/**
 *  components/InstructorSignUp/7HoursClass.js - HoursClass component
 * */

/* Imports */
import "./hoursClass.css";
import "../general.css"
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function HoursClass(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/instructor/signup/step8");
  };

  const backClick = () => {
    props.history.push("/instructor/signup/step6");
  };

  const homeClick = () => {
    props.history.push("/");
  };

  return (
    <div className="signUp">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formSection">
          <div className="form-group">
            <div className="numberQuestion">
              <p>7</p>
            </div>
            <label htmlFor="weeklyHoursGoal">
              How many hours of flightsim training could you give per week?
            </label>
            <p>
              <em>(Think about unproductive layover with Netflix...)</em>
            </p>
            <input
              {...register("weeklyHoursGoal", {
                required: "required",
                minLength: { value: 1, message: "Please enter answer" },
              })}
              type="number"
              className="form-control"
              id="weeklyHoursGoal"
              placeholder="Type your answer here"
            />
          </div>
          {errors.weeklyHoursGoal && (
            <span role="alert">{errors.weeklyHoursGoal.message}</span>
          )}
          <input type="submit" value="Submit" />

          <button className="enter" type="button" onClick={backClick}>
            Back
          </button>
          <button className="enter" type="button" onClick={homeClick}>
            Home
          </button>
        </div>
      </form>
    </div>
  );
}

export default HoursClass;
