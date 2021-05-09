/**
 * Barre de navidation Instructeur
 */

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

import InstructorCalendar from "../Components/PageInstructor/InstructorCalendrier/InstructorCalendrier"
import InstructorFly from "../Components/PageInstructor/InstructorFly/InstructorFly";
import InstructorLesson from "../Components/PageInstructor/InstructorLesson/InstructorLesson";
import InstructorProfile from "../Components/PageInstructor/InstructorProfile/InstructorProfile";


export default function InstructorNav({ instructorId }) {
  const context = useContext(AppContext)

  const logout = () => {
    context.setUserID({})
    localStorage.removeItem("jwt");
    localStorage.removeItem("userId");
    window.location = "/"
  }


  return (
    <Router>
      <div>

        <nav>
          <ul>
            <li>
              <Link to="/instructor/lesson">Lessons</Link>
            </li>
            <li>
              <Link to="/instructor/calendar">Calendar</Link>
            </li>
            <li>
              <Link to="/instructor/fly">Fly Now</Link>
            </li>
            <li>
              <Link to="/instructor/profile">Profile</Link>
            </li>
            <li>
              <Link to="/" onClick={logout}>logout</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/instructor" render={() => {
            return (instructorId ? <Redirect to="/instructor/calendar" /> : <Redirect to="/instructor/signin" />)
          }} />

          <Route exact path="/instructor/calendar" component={InstructorCalendar} />
          <Route exact path="/instructor/fly" component={InstructorFly} />
          <Route exact path="/instructor/lesson" component={InstructorLesson} />
          <Route exact path="/instructor/profile" component={InstructorProfile} />

        </Switch>

      </div>
    </Router>
  );
}
