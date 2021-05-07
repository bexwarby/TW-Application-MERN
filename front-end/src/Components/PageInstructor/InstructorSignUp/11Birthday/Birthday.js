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
    props.history.push("/instructor/signup/step12");
  };

  const backClick = () => {
    props.history.push("/instructor/signup/step10");
  };

  const homeClick = () => {
    props.history.push("/instructor");
  };
  return (
    <div className="signUp">
      <form className="submitSignUp" onSubmit={handleSubmit(onSubmit)}>
        <div className="formSection">
          <div className="form-group">
            <div className="numberQuestion">
              <p>11</p>
            </div>
            <label htmlFor="birthday">
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

/* Export */
export default Birthday;