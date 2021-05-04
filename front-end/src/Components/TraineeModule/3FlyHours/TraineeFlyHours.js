import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";
function TraineeFlyHours(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { actions } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/Trainee/module/step4");
  };
  const backClick = () => {
    props.history.push("/Trainee/module/step2");
  };
  const homeClick = () => {
    props.history.push("/");
  };
  return (
    <div className="mainTraineeFlyHours">
      <form className="TrianeeFlyHoursForm" onSubmit={handleSubmit(onSubmit)}>
        <h1>
          How many "real-world flight hours" do you have ?This question is
          required. *
        </h1>
        <h2>Approx. None is fine, TW is a smart first step !</h2>
        <input
          type="text"
          className="flyHourInput"
          {...register("flyHours")}
          placeholder="Type your answer here"
        />
        {errors.timeTeaching && (
          <span role="alert">{errors.timeTeaching.message}</span>
        )}
        <input type="submit" value="Submit" />
        <button type="button" onClick={backClick}>
          Back
        </button>
        <button type="button" onClick={homeClick}>
          Home
        </button>
      </form>
    </div>
  );
}
export default TraineeFlyHours;
