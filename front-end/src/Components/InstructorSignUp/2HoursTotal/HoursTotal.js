/** 
 *  components/InstructorSignUp/2HoursTotal.js - HoursTotal component 
 * */

/* Imports */
import { useState } from "react";
import "./hoursTotal.css";
/* import 'bootstrap/dist/css/bootstrap.css';
 */import React from "react";

/**
 *  Contact component */
function HoursTotal() {

    /*create state for each input*/
    const [hoursTotal, sethoursTotal] = useState(" ");

    return (

        <div className="signUp">

            <form>

                {/* 2 Flight Hours Input */}
                <div className="formSection">
                    <div className="form-group">
                        <div className="numberQuestion">
                            <p>2</p>
                            {/* ADD ARROW ICON */}
                        </div>
                        <label for="hours">
                            How many "real-world flight hours"
                            do you have approximately?
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="hours"
                            placeholder="Type your answer here"
                            value={hoursTotal}
                            onChange={(e) => sethoursTotal(e.target.value)} 
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
export default HoursTotal;