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
import InstructorSignUp from "./Components/InstructorSignUp/SignUp";
//import SignUpPilot from "./Components/InstructorSignUp/SignUp";
import InstructorHome from "./Components/PageInstructor/PageInstructor";
import TraineeHome from "./Components/PageTrainee/PageTrainee";
import AdminHome from "./Components/PageAdmin/PageAdmin";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
