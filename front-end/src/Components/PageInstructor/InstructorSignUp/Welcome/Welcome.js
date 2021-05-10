/**
 *  components/InstructorSignUp/Welcome.js - Welcome component
 * */

/* Imports */
import "./welcome.css";
import "../general.css"
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

const Welcome = (props) => {
  const { handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/instructor/signup/step1");
  };
  const backClick = () => {
    props.history.push("/instructor/signup/step12");
  };

  return (
    <form className="formInput" onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-5 ml-3 mr-3">
        <h1 className="title">TrueWings</h1>
        <p className="subtitle">
          Ready to make money from your expertise?
          <br />
          It starts here.
          <br />
          Less than 1 min
        </p>
      </div>
      {/* Submit Button  */}
      <input className="enter" type="submit" value="Let's Start" />
      <button className="enter" type="button" onClick={backClick}>
        Back
      </button>
    </form>
  );
};

export default Welcome;
