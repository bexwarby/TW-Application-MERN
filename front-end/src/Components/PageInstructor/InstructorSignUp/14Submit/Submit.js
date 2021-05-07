/**
 *  components/InstructorSignUp/Submit.js - Submit component
 * */

/* Imports */
import "./submit.css";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function Thanks(props) {
  const { handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/instructor/signup/result");
  };
  const backClick = () => {
    props.history.push("/instructor/signup/step14");
  };

  const homeClick = () => {
    props.history.push("/instructor");
  };
  return (
    <div className="signUp">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 14 Thank You Page */}
        <div className="formSection">
          <div>
            <h3>Thank you very much for joining the crew.</h3>

            <p>
              We already have some students undertraining.
              <br />
              We will contact you as soon as a new one wants to book a lesson
              with you.
            </p>

            <p className="boldItalic">
              "If you really want to master something, teach it"
            </p>
          </div>
          <input type="submit" value="Submit" />
          <button type="button" onClick={backClick}>
            Back
          </button>
          <button type="button" onClick={homeClick}>
            Home
          </button>
        </div>
      </form>
    </div>
  );
}

export default Thanks;
