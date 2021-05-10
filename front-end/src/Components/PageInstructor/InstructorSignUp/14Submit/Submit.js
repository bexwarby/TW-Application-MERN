/**
 *  components/InstructorSignUp/Submit.js - Submit component
 * */

/* Imports */
import "./submit.css";
import "../general.css"
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
    window.location = ("/instructor")
  };
  return (
    <div className="signUp">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 14 Thank You Page */}
        <div className="formInput">
          <div className="mt-5 ml-3 mr-3">
            <h3 className="title">Thank you very much for joining the crew.</h3>
            <p className="mt-5">
              We already have some students undertraining.
              <br />
              We will contact you as soon as a new one wants to book a lesson
              with you.
            </p>

            <h5 className="boldItalic text-warning text-center mb-4">
              "If you really want to master something, teach it"
            </h5>
          </div>
          <input className="enter" type="submit" value="Time to Fly" />
          <button className="enter" type="button" onClick={backClick}>
            Back
          </button>
          <button className="enter" type="button" onClick={homeClick}>
            Home
          </button>
        </div>
      </form>
    </div>
  );
}

export default Thanks;
