import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";
function TraineeSimEquipment(props) {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/Trainee/profile/step5");
  };
  const backClick = () => {
    props.history.push("/Trainee/profile/step3");
  };
  const homeClick = () => {
    props.history.push("/");
  };

  return (
    <div className="mainTraineeSimEquipment">
      <form
        className="TraineeSimEquipmentForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>
          What sim equipments do you have or plan to get ?This question is
          required. *
        </h1>
        <h2>
          For most of the online trainings you will need at least a basic
          joystick with yaw axis (39€). VFR : VR glasses required.
        </h2>
        <label>Choose as many as apply</label>
        <br />
        <br />
        <span>
          Joystick
          <input
            type="checkbox"
            className="inputSimEquipment"
            value="Joystick"
            {...register("Joystick")}
          />
        </span>

        <input
          type="submit"
          className="inputSimEquipment"
          value="Yoke"
          {...register("Yoke")}
        />
        <input
          type="submit"
          className="inputSimEquipment"
          value="Rudder pedals"
          {...register("Rudder pedals")}
        />
        <input
          type="submit"
          className="inputSimEquipment"
          value="Force feed back yoke"
          {...register("Force feed back yoke")}
        />
        <input
          type="submit"
          className="inputSimEquipment"
          value="VR/MR headset"
          {...register("VR/MR headset")}
        />
        <input
          type="submit"
          className="inputSimEquipment"
          value="Other"
          {...register("VR/MR headset")}
        />
        <input type="submit" value="OK" />
        <button className="button" onClick={backClick}>
          return
        </button>
        <button className="button" onClick={homeClick}>
          Home
        </button>
      </form>
    </div>
  );
}
export default TraineeSimEquipment;
