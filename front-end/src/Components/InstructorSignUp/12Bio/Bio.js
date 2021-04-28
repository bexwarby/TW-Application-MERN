/** 
 *  components/InstructorSignUp/12Bio.js - Bio component 
 * */

/* Imports */
import { useState } from "react";
import "./bio.css";
import 'bootstrap/dist/css/bootstrap.css';

/**
 *  Contact component */
function Bio() {

    /*create state for each input*/
    const [bio, setBio] = useState(" ");

    return (
        <div className="signUp">

            {/* Form to submit new Message
            NEED COMPLETION BAR AT THE BOTTOM
            */}
            <form className="submitSignUp">

                {/* 12 Bio */}
                <div className="formSection">
                    <div className="form-group">
                        <div className="numberQuestion">
                            <p>12</p>
                            {/* ADD ARROW ICON */}
                        </div>
                        <div>
                            <label for="bio">
                                Do you want to add something ? or a quick Bio ?
                            </label>
                            <p> Or click OK to pass the question.</p>
                            <input
                                type="text"
                                className="form-control"
                                id="bio"
                                placeholder="Type your answer here"
                                value={bio}
                                onChange={(e) => setBio(e.target.value)} 
                                rows="10"
                                cols="20"
                            />
                        </div>
                    </div>

                    <div className="buttonSection">
                        <button
                            className="buttonOK"
                            type="submit"
                            className="btn btn-block buttonSubmit"
                            onClick={ }
                        >
                            OK
                        </button>
                        <p
                            className="enter"
                            onChange={ }
                        >
                            Press Enter
                        </p>
                    </div>
                </div>

            </form>

        </div>

    );
}

/* Export */
export default Bio;