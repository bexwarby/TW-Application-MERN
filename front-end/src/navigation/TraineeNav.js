/**
 * Barre de navidation Eleve
 */
import "./navigation.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { FaCircleNotch } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { BsClipboardData } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

import TraineeDashboard from "../Components/PageTrainee/TraineeDashboard/TraineeDashboard";
import TraineeCalendar from "../Components/PageTrainee/TraineeCalendar/TraineeCalendar";
import TraineeModule from "../Components/PageTrainee/TraineeModule/TraineeModule";
import TraineeProfile from "../Components/PageTrainee/TraineeProfile/TraineeProfile";

export default function TraineeNav({ traineeId }) {
  const context = useContext(AppContext);

  const logout = () => {
    context.setUserID({});
    localStorage.removeItem("jwt");
    localStorage.removeItem("userId");
    window.location = "/";
  };

  return (
    <Router>
      <div>
        <nav>
          <ul id="nav-bar">
            <li>
              <Link to="/trainee/dashboard">
                <BsClipboardData size="15" />
              </Link>
            </li>
            <li>
              <Link to="/trainee/module">
                <FaCircleNotch color="white" size="15" />
              </Link>
            </li>
            <li>
              <Link to="/trainee/calendar">
                <FaRegCalendar color="white" size="15" />
              </Link>
            </li>
            <li>
              <Link to="/trainee/profile">
                <FaUser color="white" size="15" />
              </Link>
            </li>
            <li>
              <Link to="/" onClick={logout}>
                <FaLongArrowAltRight color="white" size="15" />
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route
            exact
            path="/trainee"
            render={() => {
              return traineeId ? (
                <Redirect to="/trainee/calendar" />
              ) : (
                <Redirect to="/trainee/signin" />
              );
            }}
          />
          <Route exact path="/trainee/dashboard" component={TraineeDashboard} />
          <Route exact path="/trainee/module" component={TraineeModule} />
          <Route exact path="/trainee/calendar" component={TraineeCalendar} />
          <Route exact path="/trainee/profile" component={TraineeProfile} />
        </Switch>
      </div>
    </Router>
  );
}
