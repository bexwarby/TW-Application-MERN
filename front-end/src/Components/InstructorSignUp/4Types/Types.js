/** 
 *  components/InstructorSignUp/4Types.js - Types component 
 * */

/* Imports */
import { useState } from "react";
import "./types.css";
import 'bootstrap/dist/css/bootstrap.css';

/**
 *  Contact component */
function Types() {

    /*create state for each input*/
    const [types, setTypes] = useState([""]);

    {/** TO DO
- tick after every selected item 
*/}

    return (
        <div className="signUp">

            {/* Form to submit new Message
            NEED COMPLETION BAR AT THE BOTTOM
            */}
            <form className="submitSignUp">

                {/* 4 Training Types Input */}
                <div className="formSection">
                    <div className="form-group">
                        <div className="numberQuestion">
                            <p>4</p>
                            {/* ADD ARROW ICON */}
                        </div>
                        <label for="types">What training types would you like to teach ?</label>
                        <p>
                            Reminder : On TW you <b>just need to have the rating</b> to teach
                            the same rating. Instructor/examiner ratings will just allow you to
                            do checkrides in addition.
                        <br />
                            <em>
                                Instructor guides and training syllabus will be readily
                                available to you.
                            </em>
                        </p>
                        <p>Choose as many as apply</p>
                        <select 
                            id="types" 
                            name="types" 
                            size="8" 
                            value={types}
                            onChange={(e) => setTypes(e.target.value)} 
                            multiple
                        >
                            <option value="CPL">PPL</option>
                            <option value="CPL">CPL</option>
                            <option value="IFR">IFR</option>
                            <option value="multi">Multi-engines initial</option>
                            <option value="jet">Jet operating course</option>
                            <option value="LVO">LVO</option>
                            <option value="type">Type rating prep</option>
                            <option value="sim">Sim assessment prep</option>
                        </select>
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
export default Types;