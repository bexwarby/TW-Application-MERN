/* Imports */
import "./types.css";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function Types(props) {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/Instructor/SignUp/step5");
  };

  return (
    <div className="signUp">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formSection">
          <div className="form-group">
            <div className="numberQuestion">
              <p>4</p>
            </div>
            <label for="types">
              What training types would you like to teach ?
            </label>
            <p>
              Reminder : On TW you <b>just need to have the rating</b> to teach
              the same rating. Instructor/examiner ratings will just allow you
              to do checkrides in addition.
              <br />
              <em>
                Instructor guides and training syllabus will be readily
                available to you.
              </em>
            </p>
            <p>Choose as many as apply</p>
            <select
              {...register("moduleName")}
              id="moduleName"
              name="moduleName"
              size="8"
              multiple
            >
              <option value="PPL">PPL</option>
              <option value="CPL">CPL</option>
              <option value="IFR">IFR</option>
              <option value="multi">Multi-engines initial</option>
              <option value="jet">Jet operating course</option>
              <option value="LVO">LVO</option>
              <option value="type">Type rating prep</option>
              <option value="sim">Sim assessment prep</option>
            </select>
          </div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

/* Export */
export default Types;
