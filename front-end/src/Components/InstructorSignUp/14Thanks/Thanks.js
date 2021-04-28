/** 
 *  components/InstructorSignUp/14Thanks.js - Thanks component 
 * */

/* Imports */
import "./thanks.css";
import 'bootstrap/dist/css/bootstrap.css';

/**
 *  Thanks component */
function Thanks() {

    /**ADD FUNCTION TO SEND SIGN UP WHEN THE BUTTON IS PRESSED */

    return (
        <div className="signUp">

            {/* Form to submit new Message
            NEED COMPLETION BAR AT THE BOTTOM
            */}
            <form className="submitSignUp">

                {/* 14 Thank You Page */}
                <div className="formSection">
                    <div>
                        <h3>
                            Thank you very much for joining the crew.
                        </h3>

                        <p>
                            We already have some students undertraining.
                            <br />
                            We will contact you as soon as a new one wants to
                            book a lesson with you.
                        </p>

                        <p className="boldItalic">
                            "If you really want to master something, teach it"
                        </p>

                    </div>
                    <div className="buttonOK">
                        <button
                            type="submit"
                            className="btn btn-block buttonSubmit"
                        /* onClick={handleSubmitButton} */
                        >
                            Join the crew!
                        </button>
                    </div>
                </div>

            </form>

        </div>

    );
}

/* Export */
export default Thanks;