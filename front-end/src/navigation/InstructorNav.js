/**
 * Barre de navidation Instructeur
 */

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import React from 'react'

import InstructorDashboard from "../Components/PageInstructor/InstructorDashboard/InstructorDashboard";
import InstructorFly from "../Components/PageInstructor/InstructorFly/InstructorFly";
import InstructorProfile from "../Components/PageInstructor/InstructorProfile/InstructorProfile";


export default function InstructorNav({ instructorId }) {
  return (
    <Router>
      <div>

        <nav>
          <ul>
            <li>
              <Link to="/instructor/dashboard">Dashboard instructeur</Link>
            </li>
            <li>
              <Link to="/instructor/fly">Fly instructeur</Link>
            </li>
            <li>
              <Link to="/instructor/profile">Profil instructeur</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/instructor" render={() => {
            return (instructorId ? <Redirect to="/instructor/dashboard" /> : <Redirect to="/instructor/signin" />)
          }} />

          <Route exact path="/instructor/dashboard" component={InstructorDashboard} />
          <Route exact path="/instructor/fly" component={InstructorFly} />
          <Route exact path="/instructor/profile" component={InstructorProfile} />

        </Switch>

      </div>
    </Router>
  );
}
