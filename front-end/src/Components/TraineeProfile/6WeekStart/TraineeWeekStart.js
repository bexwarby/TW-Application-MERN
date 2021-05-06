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
    props.history.push("/Trainee/profile/step7");
  };
  const backClick = () => {
    props.history.push("/Trainee/profile/step5");
  };
  const homeClick = () => {
    props.history.push("/");
  };
  return (
    <div className="mainModule">
      <h1 className="titleModule">
        Ideally, in how many weeks would you like to start ?This question is
        required. *
      </h1>
      <form className="modulForm" onSubmit={handleSubmit(onSubmit)}>
        <button type="button" onClick={homeClick}>
          Home
        </button>
        <input
          type="submit"
          className="inputStart"
          value="1"
          {...register("weekStart1")}
        />

        <input
          type="submit"
          className="inputStart"
          value="2"
          {...register("weekStart2")}
        />
        <input
          type="submit"
          className="inputStart"
          value="3"
          {...register("weekStart3")}
        />
        <input
          type="submit"
          className="inputStart"
          value="4"
          {...register("weekStart4")}
        />
        <input
          type="submit"
          className="inputStart"
          value="5"
          {...register("weekStart5")}
        />
        <input
          type="submit"
          className="inputStart"
          value="6"
          {...register("weekStart6")}
        />
        <input
          type="submit"
          className="inputStart"
          value="7"
          {...register("weekStart7")}
        />
        <input
          type="submit"
          className="inputStart"
          value="8"
          {...register("weekStart8")}
        />
        <input
          type="submit"
          className="inputStart"
          value="9"
          {...register("weekStart9")}
        />
        <input
          type="submit"
          className="inputStart"
          value=" 10"
          {...register("weekStart10")}
        />

        <input
          type="submit"
          className="inputStart"
          value="11"
          {...register("weekStart11")}
        />
      </form>
      <input type="submit" value="OK" />
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
