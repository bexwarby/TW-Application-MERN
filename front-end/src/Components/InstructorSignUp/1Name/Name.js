/** 
 *  components/InstructorSignUp/1name.js - Name component 
 * */

/* Imports */
import { useState } from "react";
import "./name.css";
/* import 'bootstrap/dist/css/bootstrap.css';
 */
/**
 *  Contact component */
function NamePilot() {

    /*create state for each input*/
    const [contactName, setContactName] = useState(" ");

    return (
        <div className="signUp">

            {/* Form to submit new Message
            NEED COMPLETION BAR AT THE BOTTOM
            */}
            <form className="submitSignUp">

                {/* 1 Name Input */}
                <div className="formSection">
                    <div className="form-group">
                        <div className="numberQuestion">
                            <p>1</p>
                            {/* ADD ARROW ICON */}
                        </div>
                        <label for="contactName">First things first, what's your full name ?</label>
                        <p>
                            The information requested will help the trainee to
                            choose their instructor.
                        </p>
                        <input
                            type="text"
                            className="form-control"
                            id="contactName"
                            placeholder="Type your answer here"
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)} 
                        />
                    </div>
                    <div className="buttonStart">
                        <button
                            className="buttonOK"
                            type="submit"
                            className="btn btn-block buttonSubmit"
                        /* onClick={ } */
                        >
                            OK
                        </button>
                        <p
                            className="enter"
                        /* onChange={ } */
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
export default NamePilot;