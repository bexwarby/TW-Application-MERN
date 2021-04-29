/** 
 *  components/InstructorSignUp/6Software.js - Software component 
 * */

/* Imports */
import { useState } from "react";
import "./software.css";
import 'bootstrap/dist/css/bootstrap.css';

/**
 *  Contact component */
function Software() {

    /*create state for each input*/
    // ADD STATE FOR TEXT AREA
    const [software, setSoftware] = useState([" "]);

    {/** TO DO
- tick after every selected item 
*/}

    return (
        <div className="signUp">

            {/* Form to submit new Message
            NEED COMPLETION BAR AT THE BOTTOM
            */}
            <form className="submitSignUp">

                {/* 6 Sim Software Input */}
                <div className="formSection">
                    <div className="form-group">
                        <div className="numberQuestion">
                            <p>6</p>
                            {/* ADD ARROW ICON */}
                        </div>
                        <label for="software">
                            Which simulation software do you plan to use for training?
                        </label>
                        <p>
                            <em>Our students mostly use MSFS or Xplane 11.</em>
                        </p>
                        <p>Choose 1</p>
                        <select 
                            id="software" 
                            name="equipment" 
                            size="5"
                            value={software}
                            onChange={(e) => setSoftware(e.target.value[0])}
                        >
                            <option value="MSFS">MSFS</option>
                            <option value="Xplane">Xplane 11</option>
                            <option value="Prepa">Prepa 3D</option>
                            <option value="FSX">FSX</option>
                            <div className="other">
                                <option value="other">Other</option>
                                {/* NEEDS TO ONLY SHOW IF WE CLICK OTHER */}
                                <textarea
                                    className="form-control"
                                    id="otherSoft"
                                    value={software}
                                    placeholder="Write your rating here"
                                    /* onChange={(e) => setRatingSubmitted(e.target.value)} */
                                    rows="10"
                                    cols="20"
                                >
                                </textarea>
                            </div>
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
export default Software;