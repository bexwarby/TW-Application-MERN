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
import TraineeResult from "./Result/TraineeResult";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StateMachineProvider } from "little-state-machine";

function TraineeProfil() {
  return (
    <StateMachineProvider>
      <Router>
        <Switch>
          <React.Fragment>
            <Route
              path="/trainee/profile/step1"
              component={TraineeChoiceModule}
            />
            <Route path="/trainee/profile/step2" component={TraineeEmail} />
            <Route path="/trainee/profile/step3" component={TraineeFlyHours} />
            <Route
              path="/trainee/profile/step4"
              component={TraineeSimEquipment}
            />
            <Route path="/trainee/profile/step5" component={TraineeSoftware} />
            <Route path="/trainee/profile/step6" component={TraineeWeekStart} />
            <Route
              path="/trainee/profile/step7"
              component={TraineeTimeForTrained}
            />
            <Route path="/trainee/profile/step8" component={TraineeLanguage} />
            <Route path="/trainee/profile/step9" component={TraineeBirth} />
            <Route path="/trainee/profile/step10" component={TraineeComment} />
            <Route path="/trainee/profile/step11" component={TraineeWelcome} />
            <Route path="/trainee/profile/result" component={TraineeResult} />
          </React.Fragment>
        </Switch>
      </Router>
    </StateMachineProvider>
  );
}
export default TraineeProfil;
