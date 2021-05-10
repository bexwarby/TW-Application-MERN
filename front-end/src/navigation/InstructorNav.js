/**
 * Barre de navidation Instructeur
 */
import "./navigation.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { FaCircleNotch } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

import InstructorCalendar from "../Components/PageInstructor/InstructorCalendrier/InstructorCalendrier";
import InstructorFly from "../Components/PageInstructor/InstructorFly/InstructorFly";
import InstructorLesson from "../Components/PageInstructor/InstructorLesson/InstructorLesson";
import InstructorProfile from "../Components/PageInstructor/InstructorProfile/InstructorProfile";

export default function InstructorNav({ instructorId }) {
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
              <Link className="lien" to="/instructor/lesson">
                <FaCircleNotch className="logo" />
              </Link>
            </li>
            <li>
              <Link className="lien" to="/instructor/calendar">
                <FaRegCalendar className="logo" />
              </Link>
            </li>
            <li>
              <Link className="lien" to="/instructor/fly">
                <FaPlane className="logo" />
              </Link>
            </li>
            <li>
              <Link className="lien" to="/instructor/profile">
                <FaUser className="logo" />
              </Link>
            </li>
            <li>
              <Link className="lien" to="/" onClick={logout}>
                <FaLongArrowAltRight className="logo" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route
          exact
          path="/instructor"
          render={() => {
            return instructorId ? (
              <Redirect to="/instructor/lesson" />
            ) : (
              <Redirect to="/instructor/signin" />
            );
          }}
        />

        <Route
          exact
          path="/instructor/calendar"
          component={InstructorCalendar}
        />
        <Route exact path="/instructor/fly" component={InstructorFly} />
        <Route exact path="/instructor/lesson" component={InstructorLesson} />
        <Route exact path="/instructor/profile" component={InstructorProfile} />
      </Switch>
    </Router>
  );
}
