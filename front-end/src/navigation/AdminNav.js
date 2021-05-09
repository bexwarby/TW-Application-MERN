/**
 * Barre de navidation Admin
 */
import "./navigation.css";

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { FaUser } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BsClipboardData } from "react-icons/bs";



import AdminDashboard from '../Components/PageAdmin/AdminDashboard/AdminDashboard'
import AdminValidation from '../Components/PageAdmin/AdminValidation/AdminValidation'


export default function AdminNav({ adminId }) {
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
          <ul id="nav-bar">
            <li>
              <Link to="/admin/dashboard">
                <BsClipboardData color="white" size="25" />
              </Link>
            </li>
            <li>
              <Link to="/admin/validation">
                <FaUser color="white" size="25" />
                </Link>
            </li>
            <li>
              <Link to="/" onClick={logout}>
                <FaLongArrowAltRight color="white" size="25" />
              </Link>
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
