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
import TraineeProfile from "./Components/TraineeProfile/TraineeProfile";
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
            <Route path="/trainee/profile/step1">
              <TraineeProfile />
            </Route>
            {/*IntructorSignUp
            <React.Fragment>
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
            </React.Fragment>*/}
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
