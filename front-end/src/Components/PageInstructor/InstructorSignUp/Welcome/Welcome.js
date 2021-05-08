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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
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
      <input type="submit" value="Submit" />
      <button className="enter" type="button" onClick={backClick}>
        Back
      </button>
    </form>
  );
};

export default Welcome;
