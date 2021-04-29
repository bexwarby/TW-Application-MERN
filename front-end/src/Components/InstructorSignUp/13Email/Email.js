/**
 *  components/InstructorSignUp/13Email.js - Email component
 * */

/* Imports */
import "./email.css";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function Email(props) {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/Instructor/SignUp/submit");
  };

  return (
    <div className="signUp">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formSection">
          <div className="form-group">
            <div className="numberQuestion">
              <p>13</p>
            </div>
            <div>
              <label for="email">Please write down your email.</label>
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

          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

/* Export */
export default Email;
