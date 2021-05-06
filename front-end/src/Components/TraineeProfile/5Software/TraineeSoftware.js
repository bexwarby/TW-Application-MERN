import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";
function TraineeSimEquipment(props) {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/Trainee/profile/step6");
  };
  const backClick = () => {
    props.history.push("/Trainee/profile/step4");
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
        <input
          type="submit"
          className="inputSoftware"
          value="MSFS"
          {...register("MSFS")}
        />
        <input
          type="submit"
          className="inputSoftware"
          value="Xplane 11"
          {...register("Xplane 11")}
        />
        <input
          type="submit"
          className="inputSoftware"
          value="Prepa 3D"
          {...register("Prepa 3D")}
        />
        <input
          type="submit"
          className="inputSoftware"
          value="FSX"
          {...register("FSX")}
        />
        <input
          type="submit"
          className="inputSoftware"
          value="Other"
          {...register("Other")}
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
