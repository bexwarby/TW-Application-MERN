/**
 * Conteneur de la page Home principale
 *
 * Je peux importer les composants nécessaire uniquement sur cette page depuis
 * le dossier Components de CE dossier ou importer un composant partagé.
 * ex: import { SharedComponentEXAMPLE } '../../Components/index'
 */

import logo from "./logoHome.png";
import "./PageHome.css";
import "../general.css"
import { Link } from "react-router-dom";
function PageHome() {
  return (
    <div id="mainPage">
      <div className="contentLogo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="contentTraineeInstructor">
        <div className="linkTrainee">
          <Link to="/usr/trainee/signin">
            <p className="link">TRAINEE</p>
          </Link>
        </div>
        <div className="linkInstructor">
          <Link to="/usr/instructor/signin">
            <p className="link">INSTRUCTOR</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageHome;
