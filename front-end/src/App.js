/**
 * Composant Principal
 *
 */
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { React, useEffect, useState } from "react";
import { AppContext } from "./AppContext";

import "./App.css";
import PageHome from "./Components/PageHome/PageHome";
import PageAdmin from "./Components/PageAdmin/PageAdmin";
import PageInstructor from "./Components/PageInstructor/PageInstructor";
import PageTrainee from "./Components/PageTrainee/PageTrainee";
import InstructorSignUp from "./Components/PageInstructor/InstructorSignUp/InstructorSignUp";
import TraineeSignUp from "./Components/PageTrainee/TraineeSignUp/TraineeSignUp";

function App() {
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    if (userID === null) {
      const uidLS = JSON.parse(localStorage.getItem("userId"));
      setUserID(uidLS);
    } else {
      console.log("UserId Connected", userID);
      localStorage.setItem("userId", JSON.stringify(userID));
    }
  }, [userID]);

  const appContextValue = {
    userID,
    setUserID,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      <div className="contentApp">
        <Router>
          <Switch>
            <Route exact path="/" component={PageHome} />
            <Route exact path="/admin" component={PageAdmin} />
            <Route exact path="/trainee" component={PageTrainee} />
            <Route exact path="/instructor" component={PageInstructor} />

            <Route path="/instructor/signup" component={InstructorSignUp} />
            <Route path="/trainee/signup" component={TraineeSignUp} />
            
            <Redirect to="/" />{" "}
            {/* Pour les autres url => redirection vers la racine */}
          </Switch>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
