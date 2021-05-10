/**
 *  components/InstructorSignUp/8Time.js - Time component
 * */

/* Imports */
import "./time.css";
import "../general.css"
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function Time(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/instructor/signup/step9");
  };

  const backClick = () => {
    props.history.push("/instructor/signup/step7");
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
              <p>8</p>
            </div>
            <div className="mt-5 ml-3 mr-3" >
              <label htmlFor="timeTeaching">
                Please let us know the more convenient time for you to train ?
              </label>
              <p>Day of the week, part of the day...</p>
            </div>
            <input
              {...register("timeTeaching", {
                required: "required",
                minLength: { value: 1, message: "Please enter answer" },
              })}
              type="text"
              className="form-control"
              id="timeTeaching"
              placeholder="Type your answer here"
            />
          </div>
          {errors.timeTeaching && (
            <span role="alert">{errors.timeTeaching.message}</span>
          )}
          
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

/* Export */
export default Time;
