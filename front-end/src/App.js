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
//import InstructorSignUp from "./navigation/InstructorSignUp";
//import SignUpPilot from "./Components/InstructorSignUp/SignUp";
//import InstructorHome from "./Components/PageInstructor/PageInstructor";
//import TraineeHome from "./Components/PageTrainee/PageTrainee";
//import AdminHome from "./Components/PageAdmin/PageAdmin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StateMachineProvider } from "little-state-machine";

import PageAdmin from "./Components/PageAdmin/PageAdmin";

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

function App() {
  return (
    <div className="contentApp">
      <StateMachineProvider>
        <Router>
          <Switch>
            <Route exact path="/admin">
              <PageAdmin />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/TraineeSignIn">
              <TraineeSignIn />
            </Route>
            <Route path="/Trainee/SignUp">
              <TraineeSignUp />
            </Route>
            <Route path="/InstructorSignIn">
              <InstructorSignIn />
            </Route>
            <div>
              <Route
                path="/Trainee/profile/step1"
                component={TraineeChoiceModule}
              />
              <Route path="/Trainee/profile/step2" component={TraineeEmail} />
              <Route
                path="/Trainee/profile/step3"
                component={TraineeFlyHours}
              />
              <Route
                path="/Trainee/profile/step4"
                component={TraineeSimEquipment}
              />
              <Route
                path="/Trainee/profile/step5"
                component={TraineeSoftware}
              />
              <Route
                path="/Trainee/profile/step6"
                component={TraineeWeekStart}
              />
              <Route
                path="/Trainee/profile/step7"
                component={TraineeTimeForTrained}
              />
              <Route
                path="/Trainee/profile/step8"
                component={TraineeLanguage}
              />
              <Route path="/Trainee/profile/step9" component={TraineeBirth} />
              <Route
                path="/Trainee/profile/step10"
                component={TraineeComment}
              />
            </div>
            <div>
              <Route path="/Welcome" component={Welcome} />
              <Route path="/Instructor/signup/step1" component={Name} />
              <Route path="/Instructor/signup/step2" component={HoursTotal} />
              <Route path="/Instructor/signup/step3" component={Ratings} />
              <Route path="/Instructor/signup/step4" component={Types} />
              <Route path="/Instructor/signup/step5" component={Equipment} />
              <Route path="/Instructor/signup/step6" component={Software} />
              <Route path="/Instructor/signup/step7" component={HoursClass} />
              <Route path="/Instructor/signup/step8" component={Time} />
              <Route path="/Instructor/signup/step9" component={Language} />
              <Route path="/Instructor/signup/step10" component={LicenseFile} />
              <Route path="/Instructor/signup/step11" component={Birthday} />
              <Route path="/Instructor/signup/step12" component={Bio} />
              <Route path="/Instructor/signup/step13" component={Email} />
              <Route path="/Instructor/signup/step14" component={Password} />
              <Route path="/Instructor/signup/submit" component={Submit} />
              <Route path="/Instructor/signup/result" component={Result} />
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
