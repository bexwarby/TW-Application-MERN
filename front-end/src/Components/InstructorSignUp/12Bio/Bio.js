/**
 *  components/InstructorSignUp/12Bio.js - Bio component
 * */

/* Imports */
import "./bio.css";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function Bio(props) {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/Instructor/SignUp/step13");
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
              <label for="bio">
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
        </div>
      </form>
    </div>
  );
}

export default Bio;
