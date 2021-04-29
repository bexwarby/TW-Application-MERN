/**
 *  components/InstructorSignUp/8Time.js - Time component
 * */

/* Imports */
import "./time.css";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function Time(props) {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/Instructor/SignUp/step9");
  };

  return (
    <div className="signUp">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formSection">
          <div className="form-group">
            <div className="numberQuestion">
              <p>8</p>
            </div>
            <label for="time">
              Please let us know the more convenient time for you to train ?
            </label>
            <p>Day of the week, part of the day...</p>
            <input
              {...register("timeTeaching")}
              type="text"
              name="timeTeaching"
              className="form-control"
              id="timeTeaching"
              placeholder="Type your answer here"
            />
          </div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

/* Export */
export default Time;
