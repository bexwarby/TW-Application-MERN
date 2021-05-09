/**
 *  components/InstructorSignUp/5Equipment.js - Equipment component
 * */

/* Imports */
import "./equipment.css";
import "../general.css"
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function Equipment(props) {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/instructor/signup/step6");
  };

  const backClick = () => {
    props.history.push("/instructor/signup/step4");
  };

  const homeClick = () => {
    props.history.push("/instructor");
    window.location = ("/instructor")
  };

  return (
    <div className="Equipment">
      <form className="submitSignUp" onSubmit={handleSubmit(onSubmit)}>
        <div className="formSection">
          <div className="form-group">
            <div className="numberQuestion">
              <p>5</p>
            </div>
            <label htmlFor="equipment">
              What sim equipment do you have or plan to get?
            </label>
            <p>
              <em>
                For most of the online trainings you will need at least a basic
                joystick with yaw axis (39€).
              </em>
            </p>
            <p>Choose as many as apply</p>
            <select
              {...register("equipment")}
              id="equipment"
              name="equipment"
              size="6"
              multiple
            >
              <option value="joystick">Joystick</option>
              <option value="yoke">Yoke</option>
              <option value="rudder">Rudder pedals</option>
              <option value="force feed">Force feed back yoke</option>
              <option value="VR/MR">VR/MR headset</option>
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
export default Equipment;
