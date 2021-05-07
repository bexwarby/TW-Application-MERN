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
    props.history.push("/trainee/profile/step2");
  };
  const homeClick = () => {
    props.history.push("/");
  };

  return (
    <div className="mainModule">
      <form className="submitSignUp" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="titleModule">
          Please confirm the training pack you paid for ?
        </h3>
        <select {...register("modules")} id="modules" name="modules">
          <option value="Choose your Module">--Choose your module--</option>
          <option value="Coms master">Coms master</option>
          <option value="PPL Theoretical support & coaching">
            PPL Theoretical support & coaching
          </option>
          <option value="Coaching to become a successful pilot">
            Coaching to become a successful pilot
          </option>
          <option value="IFR basics">IFR basics</option>
          <option value="IFR flights">IFR flights</option>
          <option value="IFR approaches">IFR approaches</option>
          <option value="Tailored training">Tailored training</option>
          <option value="CPL IR-ME Theoretical support">
            CPL IR-ME Theoretical support
          </option>
          <option value="Flying the A320">Flying the A320</option>
          <option value="Flying the B737">Flying the B737</option>
          <option value="Airline assessment prep & coaching">
            Airline assessment prep & coaching
          </option>
          <option value="Specific theoretical support">
            Specific theoretical support
          </option>
          <option value="Tailored advanced training">
            Tailored advanced training
          </option>
        </select>

        <input type="submit" value="Submit" />
        <button type="button" onClick={homeClick}>
          Home
        </button>
      </form>
    </div>
  );
}

export default TraineeModule;
