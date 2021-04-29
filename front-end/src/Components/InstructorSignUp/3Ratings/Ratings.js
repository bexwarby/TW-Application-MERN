/**
 *  components/InstructorSignUp/3Ratings.js - Ratings component
 * */

/* Imports */
import "./ratings.css";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function Ratings(props) {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/Instructor/SignUp/step4");
  };

  return (
    <div className="signUp">
      <form className="submitSignUp" onSubmit={handleSubmit(onSubmit)}>
        <div className="formSection">
          <div className="form-group">
            <div className="numberQuestion">
              <p>3</p>
            </div>
            <label for="ratingName">Which ratings do you have ?</label>
            <p>
              Tick even expired.
              <br />
              Special skill (Type rating, military, mountain, heli, etc.)? Write
              it down in "other".
            </p>
            <p>Choose as many as apply</p>
            <select
              {...register("ratingName")}
              id="ratingName"
              className="ratings"
              name="ratingName"
              size="9"
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
            </select>
          </div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

/* Export */
export default Ratings;
