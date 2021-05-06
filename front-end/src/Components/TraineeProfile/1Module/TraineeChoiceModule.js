/**
 * Module de l'eleve
 */

import "./TraineeChoiceModule.css";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";
function TraineeModule(props) {
  const { register, handleSubmit } = useForm();

  const { actions } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/Trainee/profile/step2");
  };
  const homeClick = () => {
    props.history.push("/");
  };
  return (
    <div className="mainModule">
      <h3 className="titleModule">
        Please confirm the training pack you paid for ?This question is
        required. *
      </h3>
      <form className="modulForm" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="submit"
          className="inputModule"
          value="Global overview"
          {...register("Global overview")}
        />

        <input
          type="submit"
          className="inputModule"
          value="Stick&rudder master"
          {...register("Stick&rudder master")}
        />
        <input
          type="submit"
          className="inputModule"
          value="Cross-country master"
          {...register("Cross-country master")}
        />
        <input
          type="submit"
          className="inputModule"
          value="Patterns&emergencies"
          {...register("Patterns&emergencies")}
        />
        <input
          type="submit"
          className="inputModule"
          value="Private tailored training"
          {...register("Private tailored training")}
        />
        <input
          type="submit"
          className="inputModule"
          value="Multi-engines"
          {...register("Multi-engines")}
        />
        <input
          type="submit"
          className="inputModule"
          value="IFR basics"
          {...register("IFR basics")}
        />
        <input
          type="submit"
          className="inputModule"
          value="IFR departure"
          {...register("IFR departure")}
        />
        <input
          type="submit"
          className="inputModule"
          value="IFR approach"
          {...register("IFR approach")}
        />
        <input
          type="submit"
          className="inputModule"
          value=" IFR flight"
          {...register("IFR flight")}
        />
        <input
          type="submit"
          className="inputModule"
          value="Pro tailored training"
          {...register("Pro tailored training")}
        />
        <input
          type="submit"
          className="inputModule"
          value="Jet transition"
          {...register("Jet transition")}
        />
        <input
          type="submit"
          className="inputModule"
          value="Flying the A320"
          {...register("Flying the A320")}
        />
        <input
          type="submit"
          className="inputModule"
          value="Flying the B737"
          {...register("Flying the B737")}
        />
        <input
          type="submit"
          className="inputModule"
          value="Airline assessment"
          {...register("Airline assessment")}
        />
        <input
          type="submit"
          className="inputModule"
          value="Expert tailored training"
          {...register("Expert tailored training")}
        />
      </form>
      <input type="submit" className="inputSubmit" value="OK" />
      <button type="button" onClick={homeClick}>
        Home
      </button>
    </div>
  );
}

export default TraineeModule;
