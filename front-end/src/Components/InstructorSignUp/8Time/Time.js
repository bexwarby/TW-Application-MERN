/** 
 *  components/InstructorSignUp/8Time.js - Time component 
 * */

/* Imports */
import { useState } from "react";
import "./time.css";
import 'bootstrap/dist/css/bootstrap.css';

/**
 *  Contact component */
function Time() {

    /*create state for each input*/
    const [timeTrain, setTimeTrain] = useState(" ");

    return (
        <div className="signUp">

            {/* Form to submit new Message
            NEED COMPLETION BAR AT THE BOTTOM
            */}
            <form className="submitSignUp">

                {/* 8 Convenient Time */}
                <div className="formSection">
                    <div className="form-group">
                        <div className="numberQuestion">
                            <p>8</p>
                            {/* ADD ARROW ICON */}
                        </div>
                        <label for="time">
                            Please let us know the more convenient time for you to train ?
                        </label>
                        <p>Day of the week, part of the day...</p>
                        <input
                            type="text"
                            className="form-control"
                            id="time"
                            placeholder="Type your answer here"
                            value={timeTrain}
                            onChange={(e) => setTimeTrain(e.target.value)}
                        />
                    </div>
                    <div className="buttonSection">
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
export default Time;