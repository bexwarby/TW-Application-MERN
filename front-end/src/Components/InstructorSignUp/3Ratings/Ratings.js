/** 
 *  components/InstructorSignUp/3Ratings.js - Ratings component 
 * */

/* Imports */
import { useState } from "react";
import "./ratings.css";
/* import 'bootstrap/dist/css/bootstrap.css';
 */
/**
 *  Contact component */
function Ratings() {

    /*create state for each input*/
    const [rating, setRating] = useState(""); 
    const [otherRating, setOtherRating] = useState(""); 

{/** TO DO - tick after every selected item */}

    return (
        <div className="signUp">

            {/* Form to submit new Message
            NEED COMPLETION BAR AT THE BOTTOM
            */}
            <form className="submitSignUp">

                {/* 3 Ratings Input */}
                <div className="formSection">
                    <div className="form-group">
                        <div className="numberQuestion">
                            <p>3</p>
                            {/* ADD ARROW ICON */}
                        </div>
                        <label for="ratings">Which ratings do you have ?</label>
                        <p>
                            Tick even expired.
                        <br />
                            Special skill (Type rating, military, mountain, heli, etc.)?
                            Write it down in "other".
                        </p>
                        <p>Choose as many as apply</p>
                        <select 
                            id="ratings" 
                            className="ratings" 
                            name="ratings" 
                            size="9" 
                            value={rating} 
                            onChange={(e) => setRating(e.target.value)} 
                            multiple
                        >
                            <option value="CPL">CPL IR/ME</option>
                            <option value="unfrozen">unfrozen ATPL</option>
                            <option value="FI">FI/FE</option>
                            <option value="CRI">CRI/CRE</option>
                            <option value="IRI">IRI/IRE</option>
                            <option value="TRI">TRI/TRE</option>
                            <option value="A320">A320 TR</option>
                            <option value="B737">B737 TR</option>
                            <div className="other">
                                <option value="other">Other</option>
                                {/* NEEDS TO ONLY SHOW IF WE CLICK OTHER */}
                                <textarea
                                    className="form-control"
                                    id="rating"
                                    placeholder="Write your rating here"
                                    value={otherRating}
                                    onChange={(e) => setOtherRating(e.target.value)}
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
export default Ratings;