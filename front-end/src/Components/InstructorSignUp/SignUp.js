/** UPDATE THIS
 *  components/Contact/Contact.js - Contact component
 * */

/* Imports */
import { useState } from "react";
import "./inscription.css";
import "bootstrap/dist/css/bootstrap.css";
import MultiStep from "react-multistep";
import Name from "./1Name/Name";
import HoursTotal from "./2HoursTotal/HoursTotal";
import Ratings from "./3Ratings/Ratings";
import Types from "./4Types/Types";
import Equipment from "./5Equipment/Equipment";
import Software from "./6Software/Software";
import HoursClass from "./7HoursClass/HoursClass";
import Time from "./8Time/Time";
import Language from "./9Language/Language";
import File from "./10File/File";
import Birthday from "./11Birthday/Birthday";
import Bio from "./12Bio/Bio";
import Email from "./13Email/Email";
import Thanks from "./14Thanks/Thanks";

/**
 *  Contact component */
function SignUpPilot() {
    /*create state for all output together*/

    /*create state for all output together*/
    useState = {
        step: 1,
        contactName: "",
        hours: "",
        ratings: "",
        types: "",
        equipment: [""],
        software: [""],
        hoursTraining: "",
        time: "",
        language: language[""],
        file: "",
        date: "",
        bio: "",
        email: "",
    };

    // useState of the overall form object
    const {
        contactName,
        hours,
        ratings,
        types,
        equipment,
        software,
        hoursTraining,
        time,
        language,
        file,
        date,
        bio,
        email,
    } = useState(" ");

    // Const steps in order:
    const steps = [
        { component: <Name /> },
        { component: <HoursTotal /> },
        { component: <Ratings /> },
        { component: <Types /> },
        { component: <Equipment /> },
        { component: <Software /> },
        { component: <HoursClass /> },
        { component: <Time /> },
        { component: <Language /> },
        { component: <File /> },
        { component: <Birthday /> },
        { component: <Bio /> },
        { component: <Email /> },
        { component: <Thanks /> },
    ];

    // Const to definte previous and next styles
    const prevStyle = { background: "#33c3f0", "border-width": "2px" };
    const nextStyle = { background: "#33c3f0", "border-width": "2px" };

    /* const handleSubmitButton = async (e) => {
        e.preventDefault();
        const message = await fetch("process.env.REACT_APP_SERVER/trainee/signup", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contactName: contactName,
                hours: hours,
                ratings: ratings,
                types: types,
                equipment: equipment,
                software: software,
                hoursTraining: hoursTraining,
                time: time,
                language: language,
                file: file,
                date: date,
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
            <MultiStep
                steps={steps}
                prevStyle={prevStyle}
                nextStyle={nextStyle}
            />

            {/* Title Page */}
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

            {/* Form to submit new Message
            NEED COMPLETION BAR AT THE BOTTOM
            */}
            <form className="submitSignUp">
                <Name />
                <HoursTotal />
                <Ratings />
                <Types />
                <Equipment />
                <Software />
                <HoursClass />
                <Time />
                <Language />
                <File />
                <Birthday />
                <Bio />
                <Email />
                <Thanks />
            </form>
        </div>
    );
}

/* Export */
export default SignUpPilot;
