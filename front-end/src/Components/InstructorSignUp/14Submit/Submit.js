/** 
 *  components/InstructorSignUp/Submit.js - Submit component 
 * */

/* Imports */
import "./submit.css";
import "bootstrap/dist/css/bootstrap.css";

/**
 *  Submit component */
function Thanks() {

/*     const { state } = useStateMachine(updateAction);
 */
    /* const onSubmit = async (e) => {
        e.preventDefault();
        const message = await fetch("process.env.REACT_APP_SERVER/trainee/signup", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullName: fullName,
                flightHours: flightHours,
                ratingName: ratingName,
                moduleName: moduleName,
                equipmentName: equipmentName,
                software: software,
                hoursRequested: hoursRequested,
                timeTeaching: timeTeaching,
                languageCodeIso: languageCodeIso,
                licenceFile: licenceFile,
                birthday: birthday,
                bio: bio,
                email: email,
            }),
        });
        console.log(message);
        const data = await message.json();
        console.log(data);
    }; */

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
/*                             onClick={handleSubmit(onSubmit)}
 */                        >
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