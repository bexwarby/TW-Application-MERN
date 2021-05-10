/**
 *  components/InstructorSignUp/2HoursTotal.js - HoursTotal component
 * */

import "./hoursTotal.css";
import "../general.css"
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
    props.history.push("/instructor");
    window.location = ("/instructor")
  };
  return (
    <div className="signUp">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formInput">
          <div className="form-group">
            <div className="bg-warning text-dark p-2 text-center">
              <p>2</p>
            </div>
            <div className="mt-5 ml-3 mr-3" >
              <label htmlFor="flightHours">
                How many "real-world flight hours" do you have approximately?
              </label>
            </div>
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
          <input className="enter" type="submit" value="Submit" />
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

export default HoursTotal;
