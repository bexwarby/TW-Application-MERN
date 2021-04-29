/** 
 *  components/InstructorSignUp/11Birthday.js - Birthday component 
 * */

/* Imports */
import { useState } from "react";
import "./birthday.css";
import 'bootstrap/dist/css/bootstrap.css';

/**
 *  Contact component */
function Birthday() {

    /*create state for each input*/
    const [birthday, setBirthday] = useState(" ");

    return (
        <div className="signUp">

            {/* Form to submit new Message
            NEED COMPLETION BAR AT THE BOTTOM
            */}
            <form className="submitSignUp">

                {/* 11 Birthday */}
                <div className="formSection">
                    <div className="form-group">
                        <div className="numberQuestion">
                            <p>11</p>
                            {/* ADD ARROW ICON */}
                        </div>
                        <label for="date">
                            Last question!
                            <br />
                            <br />
                            What is your date of birth please ?
                        </label>
                        <input
                            id="date"
                            label="Birthday"
                            type="date"
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
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
export default Birthday;