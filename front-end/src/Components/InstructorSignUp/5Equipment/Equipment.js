/**
 *  components/InstructorSignUp/5Equipment.js - Equipment component
 * */

/* Imports */
import "./equipment.css";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function Equipment(props) {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/Instructor/SignUp/step6");
  };

  return (
    <div className="Equipment">
      <form className="submitSignUp" onSubmit={handleSubmit(onSubmit)}>
        <div className="formSection">
          <div className="form-group">
            <div className="numberQuestion">
              <p>5</p>
            </div>
            <label for="equipment">
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
              {...register("equipmentName")}
              id="equipmentName"
              name="equipmentName"
              size="6"
              multiple
            >
              <option value="joystick">Joystick</option>
              <option value="yoke">Yoke</option>
              <option value="rudder">Rudder pedals</option>
              <option value="force">Force feed back yoke</option>
              <option value="jet">
                VR/MR headset (FYI : Already in use during type ratings)
              </option>
              <option value="LVO">Other</option>
            </select>
          </div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

/* Export */
export default Equipment;
