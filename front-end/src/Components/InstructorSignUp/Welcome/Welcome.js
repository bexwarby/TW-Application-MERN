/** 
 *  components/InstructorSignUp/Welcome.js - Welcome component 
 * */

/* Imports */
import "./welcome.css";
import 'bootstrap/dist/css/bootstrap.css';

/**
 *  Thanks component */
function Welcome() {

    return (

        <div className="startSignUp">

            <div className="textBlock">
                <h1 className="title">TrueWings</h1>
                <p className="subtitle">
                    Ready to make money from your expertise?
                    <br />
                    It starts here.
                    <br />
                    Less than 1 min
                </p>
            </div>
            {/* Submit Button  */}
            <div className="buttonStart">
                <button
                    className="start"
                    type="submit"
                    className="btn btn-block buttonSubmit"
                /* onClick={ } */
                >
                    Start
                    </button>
                <p
                    className="enter"
                /* onChange={ } */
                >
                    Press Enter
                    </p>
            </div>

        </div>

    );
}

export default Welcome;