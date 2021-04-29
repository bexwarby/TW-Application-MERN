/**
 *  components/InstructorSignUp/7HoursClass.js - HoursClass component
 * */

/* Imports */
import "./hoursClass.css";
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
    props.history.push("/Instructor/SignUp/step8");
  };

  const backClick = () => {
    props.history.push("/Instructor/SignUp/step6");
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
            <label for="hoursTraining">
              How many hours of flightsim training could you give per week?
            </label>
            <p>
              <em>(Think about unproductive layover with Netflix...)</em>
            </p>
            <input
              {...register("hoursRequested", {
                required: "required",
                minLength: { value: 1, message: "Please enter answer" },
              })}
              type="text"
              className="form-control"
              id="hoursRequested"
              placeholder="Type your answer here"
            />
          </div>
          {errors.hoursRequested && (
            <span role="alert">{errors.hoursRequested.message}</span>
          )}
          <input type="submit" value="Submit" />

          <button type="button" onClick={backClick}>
            Back
          </button>
          <button type="button" onClick={homeClick}>
            Home
          </button>
        </div>
      </form>
    </div>
  );
}

export default HoursClass;
