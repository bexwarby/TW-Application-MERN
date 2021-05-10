/**
 *  components/InstructorSignUp/10File.js - File component
 * */

/* Imports */
import "./LicenseFile.css";
import "../general.css"
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

function LicenseFile(props) {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("/instructor/signup/step11");
  };

  const backClick = () => {
    props.history.push("/instructor/signup/step9");
  };

  const homeClick = () => {
    props.history.push("/instructor");
    window.location = ("/instructor")
  };
  return (
    <div className="signUp">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formInput">
          <div className="form-group">
            <div className="bg-warning text-dark p-2 text-center">
              <p>10</p>
            </div>
            <div className="mt-5 ml-3 mr-3" >
              <label htmlFor="licenceFile">
                Add a picture or your license or <b>later</b> by email
              </label>
              <p>
                You can skip this question for now with the arrow at the bottom of
                the page
              </p>
            </div>
            <div className="file-uploader">
              <input
                {...register("licenseFile")}
                id="licenseFile"
                type="file"
              />
            </div>
          </div>

          <input className="enter" type="submit" value="Submit" />
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

/* Export */
export default LicenseFile;
