import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";
function TraineeSimEquipment(props) {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/trainee/signup/step6");
  };
  const backClick = () => {
    props.history.push("/trainee/signup/step4");
  };
  const homeClick = () => {
    props.history.push("/");
  };

  return (
    <div className="mainTraineeSoftware">
      <form className="TraineeSoftwareForm" onSubmit={handleSubmit(onSubmit)}>
        <h1>
          Which simulation software do you want to use for your training ?This
          question is required. *
        </h1>
        <h2>Our instructors mostly use MSFS or Xplane 11.</h2>
        <select {...register("software")} id="software" name="software">
          <option value="Choose your software">--Choose your software--</option>
          <option value="MSFS">MSFS</option>
          <option value="Xplane">Xplane 11</option>
          <option value="Prepa">Prepa 3D</option>
          <option value="FSX">FSX</option>

          <option type="text" value="other">
            Other
          </option>
        </select>
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
