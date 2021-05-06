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
//import InstructorSignUp from "./navigation/instructorSignUp";
//import SignUpPilot from "./Components/instructorSignUp/SignUp";
//import InstructorHome from "./Components/PageInstructor/PageInstructor";
//import TraineeHome from "./Components/PageTrainee/PageTrainee";
//import AdminHome from "./Components/PageAdmin/PageAdmin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StateMachineProvider } from "little-state-machine";

import PageAdmin from "./Components/PageAdmin/PageAdmin";
import CalendrierTrainee from "./Components/CalendrierTrainee/CalendrierTrainee";

import Welcome from "./Components/InstructorSignUp/Welcome/Welcome";
import Name from "./Components/InstructorSignUp/1Name/Name";
import HoursTotal from "./Components/InstructorSignUp/2HoursTotal/HoursTotal";
import Ratings from "./Components/InstructorSignUp/3Ratings/Ratings";
import Types from "./Components/InstructorSignUp/4Types/Types";
import Equipment from "./Components/InstructorSignUp/5Equipment/Equipment";
import Software from "./Components/InstructorSignUp/6Software/Software";
import HoursClass from "./Components/InstructorSignUp/7HoursClass/HoursClass";
import Time from "./Components/InstructorSignUp/8Time/Time";
import Language from "./Components/InstructorSignUp/9Language/Language";
import LicenseFile from "./Components/InstructorSignUp/10LicenseFile/LicenseFile";
import Birthday from "./Components/InstructorSignUp/11Birthday/Birthday";
import Bio from "./Components/InstructorSignUp/12Bio/Bio";
import Email from "./Components/InstructorSignUp/13Email/Email";
import Password from "./Components/InstructorSignUp/14bisPassword/Password";
import Submit from "./Components/InstructorSignUp/14Submit/Submit";
import Result from "./Components/InstructorSignUp/Result/Result";
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
            {/* IntructorSignUp */}
            <div>
              <Route path="/welcome" component={Welcome} />
              <Route path="/instructor/signup/step1" component={Name} />
              <Route path="/instructor/signup/step2" component={HoursTotal} />
              <Route path="/instructor/signup/step3" component={Ratings} />
              <Route path="/instructor/signup/step4" component={Types} />
              <Route path="/instructor/signup/step5" component={Equipment} />
              <Route path="/instructor/signup/step6" component={Software} />
              <Route path="/instructor/signup/step7" component={HoursClass} />
              <Route path="/instructor/signup/step8" component={Time} />
              <Route path="/instructor/signup/step9" component={Language} />
              <Route path="/instructor/signup/step10" component={LicenseFile} />
              <Route path="/instructor/signup/step11" component={Birthday} />
              <Route path="/instructor/signup/step12" component={Bio} />
              <Route path="/instructor/signup/step13" component={Email} />
              <Route path="/instructor/signup/step14" component={Password} />
              <Route path="/instructor/signup/submit" component={Submit} />
              <Route path="/instructor/signup/result" component={Result} />
            </div>
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
