/**
 * Trainee SignUp -- page d'inscription de l'eleve
 *
 */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StateMachineProvider } from "little-state-machine";
import React from "react";
import "./TraineeSignUp.css";

import TraineeChoiceModule from "./1Module/TraineeChoiceModule";
import TraineeEmail from "./2Email/TraineeEmail";
import TraineeFlyHours from "./3FlyHours/TraineeFlyHours";
import TraineeSimEquipment from "./4SimEquipment/TraineeSimEquipment";
import TraineeSoftware from "./5Software/TraineeSoftware";
import TraineeWeekStart from "./6WeekStart/TraineeWeekStart";
import TraineeTimeForTrained from "./7TimeForTrained/TraineeTimeForTrained";
import TraineeLanguage from "./8Language/TraineeLanguage";
import TraineeBirth from "./9Birth/TraineeBirth";
import TraineeComment from "./10AddComment/TraineeComment";
import TraineeWelcome from "./11Welcome/TraineeWelcome";
import TraineeLoginInformation from "./12LoginInformation/TraineeLoginInformation";
import TraineeResult from "./Result/TraineeResult";



function TraineeSignUp() {


  return (
    <StateMachineProvider>
      <Router>
        <Switch>
          <React.Fragment>
            <Route exact path="/trainee/signup/step1" component={TraineeChoiceModule} />
            <Route exact path="/trainee/signup/step2" component={TraineeEmail} />
            <Route exact path="/trainee/signup/step3" component={TraineeFlyHours} />
            <Route exact path="/trainee/signup/step4" component={TraineeSimEquipment} />
            <Route exact path="/trainee/signup/step5" component={TraineeSoftware} />
            <Route exact path="/trainee/signup/step6" component={TraineeWeekStart} />
            <Route exact path="/trainee/signup/step7" component={TraineeTimeForTrained} />
            <Route exact path="/trainee/signup/step8" component={TraineeLanguage} />
            <Route exact path="/trainee/signup/step9" component={TraineeBirth} />
            <Route exact path="/trainee/signup/step10" component={TraineeComment} />
            <Route exact path="/trainee/signup/step11" component={TraineeWelcome} />
            <Route exact path="/trainee/signup/step12" component={TraineeLoginInformation} />
            <Route exact path="/trainee/signup/result" component={TraineeResult} />
          </React.Fragment>
        </Switch>
      </Router>
    </StateMachineProvider>
  );
}

export default TraineeSignUp;
