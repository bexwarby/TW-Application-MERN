import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";
function TraineeSimEquipment(props) {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/Trainee/profile/step9");
  };
  const backClick = () => {
    props.history.push("/Trainee/profile/step7");
  };
  const homeClick = () => {
    props.history.push("/");
  };

  return (
    <div className="mainTraineeSoftware">
      <form className="TraineeSoftwareForm" onSubmit={handleSubmit(onSubmit)}>
        <h1>
          In which language do you prefer to be trained ?This question is
          required. *
        </h1>
        <h2>
          We recommend English as it's the aviation language and it's easier to
          find an instructor.
        </h2>
        <select
          {...register("language")}
          id="language"
          name="language"
          size="5"
          multiple
        >
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="italian">Italian</option>
          <option value="spanish">Spanish</option>
          <option type="text" value="other">
            Other
          </option>
        </select>

        <input type="submit" value="OK" />
        <button className="button" onClick={backClick}>
          Return
        </button>
        <button className="button" onClick={homeClick}>
          Home
        </button>
      </form>
    </div>
  );
}
export default TraineeSimEquipment;
