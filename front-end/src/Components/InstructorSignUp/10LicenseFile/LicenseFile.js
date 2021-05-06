/**
 *  components/InstructorSignUp/10File.js - File component
 * */

/* Imports */
import "./LicenseFile.css";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function LicenseFile(props) {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/Instructor/SignUp/step11");
  };

  const backClick = () => {
    props.history.push("/Instructor/SignUp/step9");
  };

  const homeClick = () => {
    props.history.push("/");
  };
  return (
    <div className="signUp">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formSection">
          <div className="form-group">
            <div className="numberQuestion">
              <p>10</p>
            </div>
            <label htmlFor="file">
              Add a picture or your license or <b>later</b> by email
            </label>
            <p>
              You can skip this question for now with the arrow at the bottom of
              the page
            </p>
            <div className="file-uploader">
              <input
                {...register("licenseFile")}
                id="licenseFile"
                type="file"
              />
            </div>
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

/* Export */
export default LicenseFile;
