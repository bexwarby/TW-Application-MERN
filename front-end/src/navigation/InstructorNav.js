/**
 * Barre de navidation Instructeur
 */

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import React from 'react'

import InstructorCalendar from "../Components/PageInstructor/InstructorCalendrier/InstructorCalendrier"
import InstructorFly from "../Components/PageInstructor/InstructorFly/InstructorFly";
import InstructorLesson from "../Components/PageInstructor/InstructorLesson/InstructorLesson";
import InstructorProfile from "../Components/PageInstructor/InstructorProfile/InstructorProfile";


export default function InstructorNav({ instructorId }) {
  return (
    <Router>
      <div>

        <nav>
          <ul>
            <li>
              <Link to="/instructor/calendar">Calendrier instructeur</Link>
            </li>
            <li>
              <Link to="/instructor/fly">Dashboard instructeur</Link>
            </li>
            <li>
              <Link to="/instructor/lesson">Lesson instructeur</Link>
            </li>
            <li>
              <Link to="/instructor/profile">Profil instructeur</Link>
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
