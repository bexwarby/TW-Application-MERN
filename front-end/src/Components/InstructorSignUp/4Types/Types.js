/* Imports */
import "./types.css";
import "../general.css"
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function Types(props) {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/instructor/signup/step5");
  };

  const backClick = () => {
    props.history.push("/instructor/signup/step3");
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
              <p>4</p>
            </div>
            <label htmlFor="modules">
              What training types would you like to teach?
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
              {...register("modules")}
              id="modules"
              name="modules"
              size="13"
              multiple
            >
              <option value="Coms master">MSFS</option>
              <option value="PPL Theoretical support & coaching">Xplane 11</option>
              <option value="Coaching to become a successful pilot">Prepa 3D</option>
              <option value="IFR basics">IFR basics</option>
              <option value="IFR flights">IFR flights</option>
              <option value="IFR approaches">IFR approaches</option>
              <option value="Tailored training">Tailored training</option>
              <option value="CPL IR-ME Theoretical support">CPL IR-ME</option>
              <option value="Flying the A320">Flying the A320</option>
              <option value="Flying the B737">Flying the B737</option>
              <option value="Airline assessment prep & coaching">Airline assessment prep & coaching</option>
              <option value="Specific theoretical support">Specific theoretical support</option>
              <option value="Tailored advanced training">Tailored advanced training</option>
            </select>
          </div>
          <input type="submit" value="Submit" />

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
export default Types;
