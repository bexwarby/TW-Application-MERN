/**
 * Barre de navidation Eleve
 */

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { useContext } from 'react';
import { AppContext } from '../AppContext';

import TraineeDashboard from '../Components/PageTrainee/TraineeDashboard/TraineeDashboard';
import TraineeCalendar from '../Components/PageTrainee/TraineeCalendar/TraineeCalendar'
import TraineeModule from '../Components/PageTrainee/TraineeModule/TraineeModule';
import TraineeProfile from '../Components/PageTrainee/TraineeProfile/TraineeProfile';


export default function TraineeNav({ traineeId }) {
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
              <Link to="/trainee/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/trainee/module">Module</Link>
            </li>
            <li>
              <Link to="/trainee/calendar">Calendar</Link>
            </li>
            <li>
              <Link to="/trainee/profile">Profile</Link>
            </li>
            <li>
              <Link to="/" onClick={logout}>logout</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/trainee" render={() => {
            return (traineeId ? <Redirect to="/trainee/calendar" /> : <Redirect to="/trainee/signin" />)
          }} />
          <Route exact path="/trainee/dashboard" component={TraineeDashboard} />
          <Route exact path="/trainee/module" component={TraineeModule} />
          <Route exact path="/trainee/calendar" component={TraineeCalendar} />
          <Route exact path="/trainee/profile" component={TraineeProfile} />
        </Switch>


      </div>
    </Router>
  );
}