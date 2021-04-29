/**
 *  components/InstructorSignUp/11Birthday.js - Birthday component
 * */

/* Imports */
import "./birthday.css";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function Birthday(props) {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/Instructor/SignUp/step12");
  };
  return (
    <div className="signUp">
      <form className="submitSignUp" onSubmit={handleSubmit(onSubmit)}>
        <div className="formSection">
          <div className="form-group">
            <div className="numberQuestion">
              <p>11</p>
            </div>
            <label for="birthday">
              Last question!
              <br />
              <br />
              What is your date of birth please ?
            </label>
            <input
              {...register("birthday")}
              id="birthday"
              label="birthday"
              type="date"
            />
          </div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

/* Export */
export default Birthday;
