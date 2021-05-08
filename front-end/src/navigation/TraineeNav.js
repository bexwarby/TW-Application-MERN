/**
 * Barre de navidation Eleve
 */

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import TraineeDashboard from '../Components/PageTrainee/TraineeDashboard/TraineeDashboard';
import TraineeCalendar from '../Components/PageTrainee/TraineeCalendar/TraineeCalendar'
import TraineeModule from '../Components/PageTrainee/TraineeModule/TraineeModule';
import TraineeProfile from '../Components/PageTrainee/TraineeProfile/TraineeProfile';


export default function TraineeNav({ traineeId }) {
  return (
    <Router>
      <div>

        <nav>
          <ul>
            <li>
              <Link to="/trainee/dashboard">Dashboard élève</Link>
            </li>
            <li>
              <Link to="/trainee/module">Module en cours de l'élève</Link>
            </li>
            <li>
              <Link to="/trainee/calendar">Calendrier élève</Link>
            </li>
            <li>
              <Link to="/trainee/profile">Profil élève</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/trainee" render={() => {
            return (traineeId ? <Redirect to="/trainee/module" /> : <Redirect to="/trainee/signin" />)
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