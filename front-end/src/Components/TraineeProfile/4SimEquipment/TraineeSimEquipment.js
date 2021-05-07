import { useForm } from "react-hook-form";
import { useState } from "react";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";
function TraineeSimEquipment(props) {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });

  const [other, setOther] = useState("");

  function selectOther(e) {
    const equipment = {
      ...other,
      [e.target.name]: e.target.value,
    };
    setOther(equipment);
  }

  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/trainee/profile/step5");
  };
  const backClick = () => {
    props.history.push("/trainee/profile/step3");
  };
  const homeClick = () => {
    props.history.push("/");
  };

  return (
    <div className="mainTraineeSimEquipment">
      <form
        className="traineeSimEquipmentForm"
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
        <select
          {...register("equipment")}
          id="equipment"
          name="equipment"
          multiple
          size="5"
        >
          <option value="">--Choose your equipment--</option>
          <option value="Joystick">Joystick</option>
          <option value="Yoke">Yoke</option>
          <option value="Rudder pedals">Ruder pedals</option>
          <option value="VR/MR headset">VR/MR headset</option>
        </select>
        <input
          {...register("otherEquipment")}
          type="text"
          name="otherEquipment"
          onChange={selectOther}
          placeholder="Other"
        />
        /
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
