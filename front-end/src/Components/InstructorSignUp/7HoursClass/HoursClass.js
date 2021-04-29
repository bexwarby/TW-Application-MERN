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
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/Instructor/SignUp/step8");
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
              {...register("hoursRequested")}
              type="text"
              className="form-control"
              id="hoursRequested"
              placeholder="Type your answer here"
            />
          </div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default HoursClass;
