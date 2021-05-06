/**
 *  components/InstructorSignUp/2HoursTotal.js - HoursTotal component
 * */

import "./hoursTotal.css";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function HoursTotal(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/instructor/signup/step3");
  };
  const backClick = () => {
    props.history.push("/instructor/signup/step1");
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
              <p>2</p>
            </div>
            <label htmlFor="flightHours">
              How many "real-world flight hours" do you have approximately?
            </label>
            <input
              {...register("flightHours", {
                required: "required",
                minLength: { value: 1, message: "Please enter answer" },
              })}
              type="text"
              id="flightHours"
              name="flightHours"
              placeholder="Type your answer here"
            />
          </div>
          {errors.flightHours && <span role="alert">{errors.flightHours.message}</span>}
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

export default HoursTotal;
