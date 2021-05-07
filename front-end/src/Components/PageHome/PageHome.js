/**
 * Conteneur de la page Home principale
 *
 * Je peux importer les composants nécessaire uniquement sur cette page depuis
 * le dossier Components de CE dossier ou importer un composant partagé.
 * ex: import { SharedComponentEXAMPLE } '../../Components/index'
 */

import { BrowserRouter as Router, Redirect, Route, Switch, Link } from "react-router-dom";

import logo from "./logoHome.png";
import "./PageHome.css";

import PageInstructor from '../PageInstructor/PageInstructor'
import PageTrainee from '../PageTrainee/PageTrainee'


function PageHome() {
  return (
    <div id="homePage">
      <Router>
        <Switch>

          <Route exact path="/instructor" component={PageInstructor} />
          <Route exact path="/trainee" component={PageTrainee} />

          <Redirect to="/" />

        </Switch>
      </Router>

      <div className="contentLogo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="contentTraineeInstructor">
        <div className="linkTrainee">
          <Link to="/trainee">
            <p className="link">TRAINEE</p>
          </Link>
        </div>
        <div className="linkInstructor">
          <Link to="/instructor">
            <p className="link">INSTRUCTOR</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageHome;
