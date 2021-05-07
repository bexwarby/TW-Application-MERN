/**
 * Routers du react-hook-form - InstructorSignUp
 */

import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider } from "little-state-machine";
import React from "react";

import PageHome from "../../PageHome/PageHome"

import Welcome from "./Welcome/Welcome";
import Name from "./1Name/Name";
import HoursTotal from "./2HoursTotal/HoursTotal";
import Ratings from "./3Ratings/Ratings";
import Types from "./4Types/Types";
import Equipment from "./5Equipment/Equipment";
import Software from "./6Software/Software";
import HoursClass from "./7HoursClass/HoursClass";
import Time from "./8Time/Time";
import Language from "./9Language/Language";
import LicenseFile from "./10LicenseFile/LicenseFile";
import Birthday from "./11Birthday/Birthday";
import Bio from "./12Bio/Bio";
import Email from "./13Email/Email";
import Password from "./14bisPassword/Password";
import Submit from "./14Submit/Submit";
import Result from "./Result/Result";


function InstructorSignUp() {

  return (

    <StateMachineProvider>
      <Router>

        <Route exact path="/" component={PageHome} />
        <Route exact path="/instructor/signup" component={Welcome} />
        <Route exact path="/instructor/signup/step1" component={Name} />
        <Route exact path="/instructor/signup/step2" component={HoursTotal} />
        <Route exact path="/instructor/signup/step3" component={Ratings} />
        <Route exact path="/instructor/signup/step4" component={Types} />
        <Route exact path="/instructor/signup/step5" component={Equipment} />
        <Route exact path="/instructor/signup/step6" component={Software} />
        <Route exact path="/instructor/signup/step7" component={HoursClass} />
        <Route exact path="/instructor/signup/step8" component={Time} />
        <Route exact path="/instructor/signup/step9" component={Language} />
        <Route exact path="/instructor/signup/step10" component={LicenseFile} />
        <Route exact path="/instructor/signup/step11" component={Birthday} />
        <Route exact path="/instructor/signup/step12" component={Bio} />
        <Route exact path="/instructor/signup/step13" component={Email} />
        <Route exact path="/instructor/signup/step14" component={Password} />
        <Route exact path="/instructor/signup/submit" component={Submit} />
        <Route exact path="/instructor/signup/result" component={Result} />

      </Router>
    </StateMachineProvider>

  );
}
export default InstructorSignUp;