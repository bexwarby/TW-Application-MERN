/** 
 *  components/InstructorSignUp/7HoursClass.js - HoursClass component 
 * */

/* Imports */
import { useState } from "react";
import "./hoursClass.css";
import 'bootstrap/dist/css/bootstrap.css';

/**
 *  Contact component */
function HoursClass() {

    /*create state for each input*/
    const [hoursClass, setHoursClass] = useState(" "); 


    return (
        <div className="signUp">

            {/* Form to submit new Message
            NEED COMPLETION BAR AT THE BOTTOM
            */}
            <form className="submitSignUp">

                {/* 7 Hours per week */}
                <div className="formSection">
                    <div className="form-group">
                        <div className="numberQuestion">
                            <p>7</p>
                            {/* ADD ARROW ICON */}
                        </div>
                        <label for="hoursTraining">
                            How many hours of flightsim training could you give
                            per week?
                        </label>
                        <p>
                            <em>(Think about unproductive layover with Netflix...)</em>
                        </p>
                        <input
                            type="text"
                            className="form-control"
                            id="hoursTraining"
                            placeholder="Type your answer here"
                            value={hoursClass}
                            onChange={(e) => setHoursClass(e.target.value)} 
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
export default HoursClass;