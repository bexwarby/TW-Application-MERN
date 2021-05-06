/**
 *  components/InstructorSignUp/9Language.js - Language component
 * */

/* Imports */
import "./language.css";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function Language(props) {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/instructor/signup/step10");
  };

  const backClick = () => {
    props.history.push("/instructor/signup/step8");
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
              <p>9</p>
            </div>
            <label htmlFor="language">In which language(s) can you train?</label>
            <p>
              We recommend English as it's the aviation language and it's easier
              to find an instructor.
            </p>
            <p>Choose as many as apply</p>
            <select
              {...register("language")}
              id="language"
              name="language"
              size="5"
              multiple
            >
              <option value="english">English</option>
              <option value="french">French</option>
              <option value="italian">Italian</option>
              <option value="spanish">Spanish</option>
              <option value="other">Other</option>
            </select>
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
export default Language;
