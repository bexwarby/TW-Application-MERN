/**
 *  components/InstructorSignUp/6Software.js - Software component
 * */

/* Imports */
import "./software.css";
import "../general.css"
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function Software(props) {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/instructor/signup/step7");
  };
  const backClick = () => {
    props.history.push("/instructor/signup/step5");
  };
  const homeClick = () => {
    props.history.push("/instructor/");
    window.location = ("/instructor")
  };

  return (
    <div className="signUp">
      <form className="submitSignUp" onSubmit={handleSubmit(onSubmit)}>
        <div className="formSection">
          <div className="form-group">
            <div className="numberQuestion">
              <p>6</p>
            </div>
            <label htmlFor="software">
              Which simulation software do you plan to use for training?
            </label>
            <p>
              <em>Our students mostly use MSFS or Xplane 11.</em>
            </p>
            <p>Choose 1</p>
            <select
              {...register("software")}
              id="software"
              name="software"
              size="5"
              multiple
            >
              <option value="MSFS">MSFS</option>
              <option value="Xplane">Xplane 11</option>
              <option value="Prepa">Prepa 3D</option>
              <option value="FSX">FSX</option>

              <option type="text" value="other">
                Other
              </option>
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
export default Software;
