/** 
 *  components/InstructorSignUp/9Language.js - Language component 
 * */

/* Imports */
import { useState } from "react";
import "./language.css";
import 'bootstrap/dist/css/bootstrap.css';

/**
 *  Contact component */
function Language() {

    /*create state for each input*/
    const [language, setLanguage] = useState(" ");
    const [otherLanguage, setOtherLanguage] = useState(" ");
    {/** TO DO
- tick after every selected item 
- icons 
*/}

    return (
        <div className="signUp">

            {/* Form to submit new Message
            NEED COMPLETION BAR AT THE BOTTOM
            */}
            <form className="submitSignUp">

                {/* 9 Languages */}
                <div className="formSection">
                    <div className="form-group">
                        <div className="numberQuestion">
                            <p>9</p>
                            {/* ADD ARROW ICON */}
                        </div>
                        <label for="language">In which language(s) can you train?</label>
                        <p>
                            We recommend English as it's the aviation language and
                            it's easier to find an instructor.
                        </p>
                        <p>Choose as many as apply</p>
                        <select 
                            id="language" 
                            name="language" 
                            size="5" 
                            value={language}
                            onChange={(e) => setLanguage(e.target.value[0])}
                            multiple>
                            <option value="en">
                                English
                                {/* ADD TEA ICON */}
                            </option>
                            <option value="fr">
                                French
                                {/* ADD BAGUETTE ICON */}
                            </option>
                            <option value="it">
                                Italian
                                {/* ADD PIZZA ICON */}
                            </option>
                            <option value="es">
                                Spanish
                                {/* ADD PAELLA ICON */}
                            </option>
                            <div className="other">
                                <option value="other">Other</option>
                                {/* NEEDS TO ONLY SHOW IF WE CLICK OTHER */}
                                <textarea
                                    className="form-control"
                                    id="otherLanguage"
                                    value={otherLanguage}
                                    placeholder="Write your language here"
                                    onChange={(e) => setOtherLanguage(e.target.value)}
                                    rows="10"
                                    cols="10"
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
export default Language;