/**
 *  components/InstructorSignUp/13Email.js - Email component
 * */

/* Imports */
import "./email.css";
import "../general.css"
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function Email(props) {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/instructor/signup/step14");
  };

  const backClick = () => {
    props.history.push("/instructor/signup/step12");
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
              <p>13</p>
            </div>
            <div className="mt-5 ml-3 mr-3">
              <label htmlFor="email">Please write down your email.</label>
              <p>
                It will only be used to let you know when a student requests an
                instructor.
              </p>
              <input
                {...register("email")}
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>
          </div>

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
export default Email;
