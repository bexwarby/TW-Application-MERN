/** 
 *  components/InstructorSignUp/10File.js - File component 
 * */

/* Imports */
import { useState } from "react";
import "./file.css";
import 'bootstrap/dist/css/bootstrap.css';

/**
 *  Contact component */
function File() {

    /*create state for each input*/
    const [file, setFile] = useState(null);

{/** TO DO
- icons
- create custome file uploader:
https://www.pluralsight.com/guides/how-to-use-a-simple-form-submit-with-files-in-react
*/}

    return (
        <div className="signUp">

            {/* Form to submit new Message
            NEED COMPLETION BAR AT THE BOTTOM
            */}
            <form className="submitSignUp">

                {/* 10 License Upload */}
                <div className="formSection">
                    <div className="form-group">
                        <div className="numberQuestion">
                            <p>10</p>
                            {/* ADD ARROW ICON */}
                        </div>
                        <label for="file">
                            Add a picture or your license or <b>later</b> by email
                        </label>
                        <p>
                            You can skip this question for now with the arrow at the
                            bottom of the page
                        </p>
                        <div className="file-uploader">
                            <input 
                                id="file" 
                                type="file" 
                                value={file}
                                onChange={(e) => setFile(e.target.files[0])} />
                        </div>
                    </div>
                    <div className="buttonSection">
                        {/** This needs to display a warning if nothing is added */}
                        <button
                            className="buttonOK"
                            type="submit"
                            className="btn btn-block buttonSubmit"
                        /* onClick={ } */
                        >
                            Upload
                        </button>
                        {/** Goes to next question regardless */}
                        <button
                            className="skip"
                            type="submit"
                            className="btn btn-block buttonSubmit"
                        /* onClick={ } */
                        >
                            {/**Make this into an arrow icon */}
                            Ok
                        </button>
                    </div>
                </div>              

            </form>

        </div>

    );
}

/* Export */
export default File;