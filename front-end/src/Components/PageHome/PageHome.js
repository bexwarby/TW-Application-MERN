/**
 * Conteneur de la page Home principale
 *
 * Je peux importer les composants nécessaire uniquement sur cette page depuis
 * le dossier Components de CE dossier ou importer un composant partagé.
 * ex: import { SharedComponentEXAMPLE } '../../Components/index'
 */

import "./PageHome.css";
import { Link } from "react-router-dom";
function PageHome() {
  return (
    <div id="mainpage">
      <div className="logo">
        <img src=""></img>
      </div>

      <Link className="link" to="/TraineeSignIn">
        TRAINEE
      </Link>
      <br></br>
      <Link className="link" to="/InstructorSignIn">
        INSTRUCTOR
      </Link>
    </div>
  );
}

export default PageHome;
