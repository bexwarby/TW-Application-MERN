/**
 * Composant Principal
 *
 * Les composants de chaque partie peuvent etre affiché (dé)commentez au besoin
 */

import "./App.css";
import Home from "./Components/PageHome/PageHome";
import TraineeSignIn from "./Components/TraineeSignIn/TraineeSignIn";
import TraineeSignUp from "./Components/TraineeSignUp/TraineeSignUp";
import InstructorSignIn from "./Components/InstructorSignIn/InstructorSignIn";
//////Trainee profile///
/* import TraineeChoiceModule from "./Components/TraineeProfile/1Module/TraineeChoiceModule";
import TraineeEmail from "./Components/TraineeProfile/2Email/TraineeEmail";
import TraineeFlyHours from "./Components/TraineeProfile/3FlyHours/TraineeFlyHours";
import TraineeSimEquipment from "./Components/TraineeProfile/4SimEquipment/TraineeSimEquipment";
import TraineeSoftware from "./Components/TraineeProfile/5Software/TraineeSoftware";
import TraineeWeekStart from "./Components/TraineeProfile/6WeekStart/TraineeWeekStart";
import TraineeTimeForTrained from "./Components/TraineeProfile/7TimeForTrained/TraineeTimeForTrained";
import TraineeLanguage from "./Components/TraineeProfile/8Language/TraineeLanguage";
import TraineeBirth from "./Components/TraineeProfile/9Birth/TraineeBirth";
import TraineeComment from "./Components/TraineeProfile/10AddComment/TraineeComment"; */
//import InstructorSignUp from "./navigation/instructorSignUp";
//import SignUpPilot from "./Components/instructorSignUp/SignUp";
//import InstructorHome from "./Components/PageInstructor/PageInstructor";
//import TraineeHome from "./Components/PageTrainee/PageTrainee";
//import AdminHome from "./Components/PageAdmin/PageAdmin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StateMachineProvider } from "little-state-machine";

import PageAdmin from "./Components/PageAdmin/PageAdmin";
import CalendrierTrainee from "./Components/CalendrierTrainee/CalendrierTrainee";
import CalendrierInstructor from "./Components/CalendrierInstructor/CalendrierInstructor";

import InstructorSignUp from "./Components/InstructorSignUp/InstructorSignUp"
import React from "react";

function App() {
  return (
    <div className="contentApp">
      <StateMachineProvider>
        <Router>
          <Switch>
            <Route exact path="/admin">
              <PageAdmin />
            </Route>
            <Route exact path="/calendrierTrainee">
              <CalendrierTrainee />
            </Route>
            <Route exact path="/calendrierInstructor">
              <CalendrierInstructor />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/usr/trainee/signin">
              <TraineeSignIn />
            </Route>
            <Route path="/usr/trainee/signup">
              <TraineeSignUp />
            </Route>
            <Route path="/usr/instructor/signin">
              <InstructorSignIn />
            </Route>
            <Route path="/usr/instructor/signup">
              <InstructorSignUp />
            </Route>
            {/* TraineeProfile */}
            {/* <div>
              <Route
                path="/trainee/profile/step1"
                component={TraineeChoiceModule}
              />
              <Route path="/trainee/profile/step2" component={TraineeEmail} />
              <Route
                path="/trainee/profile/step3"
                component={TraineeFlyHours}
              />
              <Route
                path="/trainee/profile/step4"
                component={TraineeSimEquipment}
              />
              <Route
                path="/trainee/profile/step5"
                component={TraineeSoftware}
              />
              <Route
                path="/trainee/profile/step6"
                component={TraineeWeekStart}
              />
              <Route
                path="/trainee/profile/step7"
                component={TraineeTimeForTrained}
              />
              <Route
                path="/trainee/profile/step8"
                component={TraineeLanguage}
              />
              <Route path="/trainee/profile/step9" component={TraineeBirth} />
              <Route
                path="/trainee/profile/step10"
                component={TraineeComment}
              />
            </div> */}
          
            {/*<InstructorHome />*/}
            {/* <TraineeHome /> */}
            {/* <AdminHome /> */}
          </Switch>
        </Router>
      </StateMachineProvider>
    </div>
  );
}

export default App;
