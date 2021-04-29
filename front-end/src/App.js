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

//import InstructorSignUp from "./navigation/InstructorSignUp";
//import SignUpPilot from "./Components/InstructorSignUp/SignUp";
import InstructorHome from "./Components/PageInstructor/PageInstructor";
import TraineeHome from "./Components/PageTrainee/PageTrainee";
import AdminHome from "./Components/PageAdmin/PageAdmin";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";

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
import Submit from "./Components/InstructorSignUp/14Submit/Submit";

function App() {
  return (
<<<<<<< HEAD
    <div className="contentApp">
      <Router>
        <Switch>
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
          <Route path="/Instructor/SignUp">
            <InstructorSignUp />
          </Route>

          {/*<InstructorHome />*/}
          {/* <TraineeHome /> */}
          {/* <AdminHome /> */}
        </Switch>
      </Router>
=======
    <div>
      <StateMachineProvider>
        <Router>
          <Switch>
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
              <Route path="/Welcome" component={Welcome} />
              <Route path="/Instructor/SignUp/step1" component={Name} />
              <Route path="/Instructor/SignUp/step2" component={HoursTotal} />
              <Route path="/Instructor/SignUp/step3" component={Ratings} />
              <Route path="/Instructor/SignUp/step4" component={Types} />
              <Route path="/Instructor/SignUp/step5" component={Equipment} />
              <Route path="/Instructor/SignUp/step6" component={Software} />
              <Route path="/Instructor/SignUp/step7" component={HoursClass} />
              <Route path="/Instructor/SignUp/step8" component={Time} />
              <Route path="/Instructor/SignUp/step9" component={Language} />
              <Route path="/Instructor/SignUp/step10" component={LicenseFile} />
              <Route path="/Instructor/SignUp/step11" component={Birthday} />
              <Route path="/Instructor/SignUp/step12" component={Bio} />
              <Route path="/Instructor/SignUp/step13" component={Email} />
              <Route path="/Instructor/SignUp/submit" component={Submit} />
            </div>
            {/*<InstructorHome />*/}
            {/* <TraineeHome /> */}
            {/* <AdminHome /> */}
          </Switch>
        </Router>
      </StateMachineProvider>
>>>>>>> 8dfb5fd27c0ea1534e518b92518255f74ab8c964
    </div>
  );
}

export default App;
