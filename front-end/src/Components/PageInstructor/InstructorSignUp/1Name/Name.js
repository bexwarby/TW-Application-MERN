/* Imports */
import "./name.css";
import "../general.css"
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function NamePilot(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/instructor/signup/step2");
  };
  const backClick = () => {
    props.history.push("/instructor/signup/welcome");
  };
  const homeClick = () => {
    props.history.push("/instructor");
    window.location = ("/instructor")
  };

  return (
    <div className="signUp">
      <form onSubmit={handleSubmit(onSubmit)} className="submitSignUp">
        <div className="formSection">
          <div className="form-group">
            <div className="numberQuestion">
              <p>1</p>
            </div>
            <label htmlFor="fullName">
              First things first, what's your full name ?
            </label>
            <p>
              The information requested will help the trainee to choose their
              instructor.
            </p>
            <input
              {...register("fullName", {
                required: "required",
                minLength: { value: 2, message: "Please enter answer" },
              })}
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Type your answer here"
            />
          </div>
          {errors.fullName && (
            <span role="alert">{errors.fullName.message}</span>
          )}
          <input type="submit" value="Submit" />

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

export default NamePilot;
