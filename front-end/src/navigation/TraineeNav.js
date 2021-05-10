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
import { FaBook } from "react-icons/fa";
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
              <Link className="lien" to="/trainee/dashboard">
                <FaCircleNotch />
              </Link>
            </li>
            <li>
              <Link className="lien" to="/trainee/module">
                <FaBook />
              </Link>
            </li>
            <li>
              <Link className="lien" to="/trainee/calendar">
                <FaRegCalendar />
              </Link>
            </li>
            <li>
              <Link className="lien" to="/trainee/profile">
                <FaUser />
              </Link>
            </li>
            <li>
              <Link className="lien" to="/" onClick={logout}>
                <FaLongArrowAltRight />
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
                <Redirect to="/trainee/module" />
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
