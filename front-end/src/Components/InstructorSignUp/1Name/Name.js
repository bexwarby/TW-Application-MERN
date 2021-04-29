/* Imports */
import "./name.css";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function NamePilot(props) {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/Instructor/SignUp/step2");
  };

  return (
    <div className="signUp">
      <form onSubmit={handleSubmit(onSubmit)} className="submitSignUp">
        <div className="formSection">
          <div className="form-group">
            <div className="numberQuestion">
              <p>1</p>
            </div>
            <label for="fullName">
              First things first, what's your full name ?
            </label>
            <p>
              The information requested will help the trainee to choose their
              instructor.
            </p>
            <input
              {...register("fullName")}
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Type your answer here"
            />
          </div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default NamePilot;
