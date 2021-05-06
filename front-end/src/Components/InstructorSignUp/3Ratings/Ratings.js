/**
 *  components/InstructorSignUp/3Ratings.js - Ratings component
 * */

/* Imports */
import "./ratings.css";
import "../general.css"
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function Ratings(props) {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/instructor/signup/step4");
  };

  const backClick = () => {
    props.history.push("/instructor/signup/step2");
  };

  const homeClick = () => {
    props.history.push("/");
  };

  return (
    <div className="signUp">
      <form className="submitSignUp" onSubmit={handleSubmit(onSubmit)}>
        <div className="formSection">
          <div className="form-group">
            <div className="numberQuestion">
              <p>3</p>
            </div>
            <label htmlFor="ratings">Which ratings do you have ?</label>
            <p>
              Tick even expired.
              <br />
              Special skill (Type rating, military, mountain, heli, etc.)? Write
              it down in "other".
            </p>
            <p>Choose as many as apply</p>
            <select
              {...register("ratings")}
              id="ratings"
              name="ratings"
              size="11"
              multiple
            >
              <option value="FI">FI</option>
              <option value="CRI">CRI/CRE</option>
              <option value="FE">FE</option>
              <option value="CPL">CPL IR ME</option>
              <option value="CPL2000">CPL IR ME +2000 hour</option>
              <option value="IRI">IRI/IRE</option>
              <option value="unfrozen">unfrozen ATPL</option>
              <option value="TRI">TRI/TRE or SFI/SFE</option>
              <option value="A320">A320 TR</option>
              <option value="B737">B737 TR</option>
              <option value="other">Other</option>
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
export default Ratings;
