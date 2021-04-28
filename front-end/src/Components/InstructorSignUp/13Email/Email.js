/** 
 *  components/InstructorSignUp/13Email.js - Email component 
 * */

/* Imports */
import { useState } from "react";
import "./email.css";
import 'bootstrap/dist/css/bootstrap.css';

/**
 *  Contact component */
function Email() {

    /*create state for each input*/
    const [email, setEmail] = useState(" ");

    return (
        <div className="signUp">

            {/* Form to submit new Message
            NEED COMPLETION BAR AT THE BOTTOM
            */}
            <form className="submitSignUp">                

                {/* 13 Email */}
                <div className="formSection">
                    <div className="form-group">
                        <div className="numberQuestion">
                            <p>13</p>
                            {/* ADD ARROW ICON */}
                        </div>
                        <div>
                            <label for="email">
                                Please write down your email.
                            </label>
                            <p>
                                It will only be used to let you know when a student
                                requests an instructor.
                            </p>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
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
export default Email;