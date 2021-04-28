/**
 * Barre de navidation Eleve
 */


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Imports des composants qui seront affichés 
import TraineeDashboard from '../Components/TraineeDashboard/TraineeDashboard';
import TraineeFlybook from '../Components/TraineeFlyBook/TraineeFlyBook';
import TraineeModule from '../Components/TraineeModule/TraineeModule';
import TraineeProfile from '../Components/TraineeProfile/TraineeProfile';


export default function TraineeNav() {
  return (
    <Router>
      <div>

        <Switch>
          <Route exact path="/trainee/dashboard">
            <TraineeDashboard />
          </Route>
          <Route exact path="/trainee/module">
            <TraineeModule />
          </Route>
          <Route exact path="/trainee/flybook">
            <TraineeFlybook />
          </Route>
          <Route exact path="/trainee/profile">
            <TraineeProfile />
          </Route>
        </Switch>

        <nav>
          <ul>
            <li>
              <Link to="/trainee/dashboard">Dashboard élève</Link>
            </li>
            <li>
              <Link to="/trainee/module">Module en cours de l'élève</Link>
            </li>
            <li>
              <Link to="/trainee/flybook">Fly et Book élève</Link>
            </li>
            <li>
              <Link to="/trainee/profile">Profil élève</Link>
            </li>
          </ul>
        </nav>

      </div>
    </Router>
  );
}