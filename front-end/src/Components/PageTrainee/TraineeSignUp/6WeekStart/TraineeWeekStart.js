/**
 * Module de l'eleve
 */

import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";
function TraineeWeekStart(props) {
  const { register, handleSubmit } = useForm();

  const { actions } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/trainee/signup/step7");
  };
  const backClick = () => {
    props.history.push("/trainee/signup/step5");
  };
  const homeClick = () => {
    props.history.push("/");
    window.location = "/"
  };
  return (
    <div className="mainModule">
      <h1 className="titleModule">
        Ideally, in how many weeks would you like to start ?This question is
        required. *
      </h1>
      <form className="modulForm" onSubmit={handleSubmit(onSubmit)}>
        <select {...register("availability")} id="availability" name="availability">
          <option value="Choose number of week">
            --Choose number of week--
          </option>
          <option value="week1">1</option>
          <option value="week2">2</option>
          <option value="week3">3</option>
          <option value="week4">4</option>
          <option value="week5">5</option>
          <option value="week6">6</option>
          <option value="week7">7</option>
          <option value="week8">8</option>
          <option value="week9">9</option>
          <option value="week10">10</option>
          <option value="week11">11</option>
        </select>
        <input type="submit" value="OK" />
      </form>

      <button className="button" onClick={backClick}>
        return
      </button>
      <button className="button" onClick={homeClick}>
        Home
      </button>
    </div>
  );
}

export default TraineeWeekStart;
