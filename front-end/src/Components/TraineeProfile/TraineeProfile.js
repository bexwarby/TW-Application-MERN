/**
 * Routers du react-hook-form - InstructorSignUp
 */

import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider } from "little-state-machine";

import TraineeChoiceModule from "./Components/TraineeProfile/1Module/TraineeChoiceModule";
import TraineeEmail from "./Components/TraineeProfile/2Email/TraineeEmail";
import TraineeFlyHours from "./Components/TraineeProfile/3FlyHours/TraineeFlyHours";
import TraineeSimEquipment from "./Components/TraineeProfile/4SimEquipment/TraineeSimEquipment";
import TraineeSoftware from "./Components/TraineeProfile/5Software/TraineeSoftware";
import TraineeWeekStart from "./Components/TraineeProfile/6WeekStart/TraineeWeekStart";
import TraineeTimeForTrained from "./Components/TraineeProfile/7TimeForTrained/TraineeTimeForTrained";
import TraineeLanguage from "./Components/TraineeProfile/8Language/TraineeLanguage";
import TraineeBirth from "./Components/TraineeProfile/9Birth/TraineeBirth";
import TraineeComment from "./Components/TraineeProfile/10AddComment/TraineeComment";
import React from "react";

function TraineeProfile() {

    return (

        <StateMachineProvider>
            <Router>

                <Route path="/usr/trainee/profile/step1" component={TraineeChoiceModule} />
                <Route path="/usr/trainee/profile/step2" component={TraineeEmail} />
                <Route path="/usr/trainee/profile/step3" component={TraineeFlyHours} />
                <Route path="/usr/trainee/profile/step4" component={TraineeSimEquipment} />
                <Route path="/usr/trainee/profile/step5" component={TraineeSoftware} />
                <Route path="/usr/trainee/profile/step6" component={TraineeWeekStart} />
                <Route path="/usr/trainee/profile/step7" component={TraineeTimeForTrained} />
                <Route path="/usr/trainee/profile/step8" component={TraineeLanguage} />
                <Route path="/usr/trainee/profile/step9" component={TraineeBirth} />
                <Route path="/usr/trainee/profile/step9" component={TraineeComment} />

            </Router>
        </StateMachineProvider>

    );
}

export default TraineeProfile;