import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";

import Welcome from "../Components/InstructorSignUp/Welcome/Welcome";
import Name from "../Components/InstructorSignUp/1Name/Name";
import HoursTotal from "../Components/InstructorSignUp/2HoursTotal/HoursTotal";
import Ratings from "../Components/InstructorSignUp/3Ratings/Ratings";
import Types from "../Components/InstructorSignUp/4Types/Types";
import Equipment from "../Components/InstructorSignUp/5Equipment/Equipment";
import Software from "../Components/InstructorSignUp/6Software/Software";
import HoursClass from "../Components/InstructorSignUp/7HoursClass/HoursClass";
import Time from "../Components/InstructorSignUp/8Time/Time";
import Language from "../Components/InstructorSignUp/9Language/Language";
import File from "../Components/InstructorSignUp/10File/File";
import Birthday from "../Components/InstructorSignUp/11Birthday/Birthday";
import Bio from "../Components/InstructorSignUp/12Bio/Bio";
import Email from "../Components/InstructorSignUp/13Email/Email";
import Submit from "../Components/InstructorSignUp/14Submit/Submit";

createStore({
    data: {
        useState = {
            fullName: " ",
            flightHours: " ",
            ratingName: " ",
            moduleName: " ",
            equipmentName: " ",
            software: " ",
            hoursRequested: " ",
            timeTeaching: " ",
            languageCodeIso: " ",
            licenceFile: " ",
            birthday: " ",
            bio: " ",
            email: " ",
        }
    }
});

function InstructorSignUp() {
    return (
        <StateMachineProvider>
            <Router>
                <Route exact path="/" component={Welcome} />
                <Route path="/step1" component={Name} />
                <Route path="/step2" component={HoursTotal} />
                <Route path="/step3" component={Ratings} />
                <Route path="/step4" component={Types} />
                <Route path="/step5" component={Equipment} />
                <Route path="/step6" component={Software} />
                <Route path="/step7" component={HoursClass} />
                <Route path="/step8" component={Time} />
                <Route path="/step9" component={Language} />
                <Route path="/step10" component={File} />
                <Route path="/step11" component={Birthday} />
                <Route path="/step12" component={Bio} />
                <Route path="/step13" component={Email} />
                <Route path="/submit" component={Submit} />
            </Router>
        </StateMachineProvider>
    );
}

export default InstructorSignUp;
