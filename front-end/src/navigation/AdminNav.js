/**
 * Barre de navidation Admin
 */

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import AdminDashboard from '../Components/PageAdmin/AdminDashboard/AdminDashboard'
import AdminValidation from '../Components/PageAdmin/AdminValidation/AdminValidation'


export default function AdminNav({ adminId }) {
  return (
    <Router>
      <div>

        <nav>
          <ul>
            <li>
              <Link to="/admin/dashboard">Dashboard Admin</Link>
            </li>
            <li>
              <Link to="/admin/validation">Validation</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/admin" render={() => {
            return (adminId ? <Redirect to="/admin/validation" /> : <Redirect to="/admin/signin" />)
          }} />

          <Route exact path="/admin/dashboard" component={AdminDashboard} />
          <Route exact path="/admin/validation" component={AdminValidation} />

        </Switch>

      </div>
    </Router>
  );
}
