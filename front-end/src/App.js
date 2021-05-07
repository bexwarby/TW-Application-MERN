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
import CalendrierInstructor from "./Components/CalendrierInstructor/CalendrierInstructor";

import InstructorSignUp from "./Components/InstructorSignUp/InstructorSignUp";
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
            <Route path="/usr/trainee/profile">
              <TraineeProfile />
            </Route>
            <Route path="/usr/instructor/signin">
              <InstructorSignIn />
            </Route>
            <Route path="/usr/instructor/signup">
              <InstructorSignUp />
            </Route>
            <Route path="/usr/trainee/profile">
              <InstructorSignUp />
            </Route>

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
