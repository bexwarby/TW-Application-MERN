/**
 *  components/InstructorSignUp/2HoursTotal.js - HoursTotal component
 * */

import "./hoursTotal.css";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function HoursTotal(props) {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/Instructor/SignUp/step3");
  };
  return (
    <div className="signUp">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formSection">
          <div className="form-group">
            <div className="numberQuestion">
              <p>2</p>
            </div>
            <label for="flightHours">
              How many "real-world flight hours" do you have approximately?
            </label>
            <input
              {...register("hours")}
              type="text"
              className="form-control"
              id="flightHours"
              placeholder="Type your answer here"
            />
          </div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default HoursTotal;
