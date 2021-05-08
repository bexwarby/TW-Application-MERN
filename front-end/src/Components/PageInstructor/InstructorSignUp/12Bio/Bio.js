/**
 *  components/InstructorSignUp/12Bio.js - Bio component
 * */

/* Imports */
import "./bio.css";
import "../general.css"
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function Bio(props) {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/instructor/signup/step13");
  };

  const backClick = () => {
    props.history.push("/instructor/signup/step11");
  };

  const homeClick = () => {
    props.history.push("/instructor");
    window.location = ("/instructor")
  };

  return (
    <div className="signUp">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formSection">
          <div className="form-group">
            <div className="numberQuestion">
              <p>12</p>
            </div>
            <div>
              <label htmlFor="bio">
                Do you want to add something ? or a quick Bio ?
              </label>
              <p> Or click OK to pass the question.</p>
              <input
                {...register("bio")}
                type="text"
                className="form-control"
                id="bio"
                placeholder="Type your answer here"
                rows="10"
                cols="20"
              />
            </div>
          </div>

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

export default Bio;
