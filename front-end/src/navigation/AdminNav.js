/**
 * Barre de navidation Admin
 */

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

// Imports des composants qui seront affichés
import AdminDashboard from '../Components/AdminDashboard/AdminDashboard'
import AdminValidation from '../Components/AdminValidation/AdminValidation'

export default function AdminNav({ auth }) {
  return (
    <Router>
      <div>

        <Switch>
          <Route exact path="admin/signin" render={ () => {
            return (
              auth ? 
              <Redirect to="/admin/validation" /> :
              <Redirect to="admin/signin" />
            )
          }} />
          
          <Route exact path="/admin/dashboard">
            <AdminDashboard />
          </Route>

          <Route exact path="/admin/validation">
            <AdminValidation />
          </Route>

        </Switch>

        <nav>
          <ul>
            <li>
              <Link to="/admin/dashboard">Dashboard Admin</Link>
            </li>
            <li>
              <Link to="/admin/validation">Fly instructeur</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}
