/**
 * Profil instructeur
 */

import "./InstructorProfile.css";
import photo from "../../../images/pilote.jpeg";
import { FaRegCalendar } from "react-icons/fa";
import { BrowserRouter as Route, Link } from "react-router-dom";

function InstructorProfile() {
  return (
    <div>
      {/*PHOTO INSTRUCTOR*/}
      <img className="photo-pilote" alt="" src={photo}></img>

      {/*INFOS GENERALES*/}
      <div id="info-general">
        <p className="hours-tw">153 TW Hours</p>
        <p className="name-pilote">Martin T.</p>
        <p className="name-pilote">trainee 98% success</p>
      </div>

      {/*LOGO CALENDAR*/}
      <div>
        <Route>
          <h3 className="logo-calendar">
            <Link to="/instructor/calendar">
              {/* ====> TO DO CHANGER ROUTE*/}
              <FaRegCalendar color="white" />
            </Link>
          </h3>
        </Route>

        {/*DESCRIPTION*/}
        <div>
          <a className="title">Instruction : </a>
          <a className="subtitle">Private, Pro, B737 </a>
        </div>
        <div>
          <a className="title">Evaluation : </a>
          <a className="subtitle">Private, Pro </a>
        </div>
        <div>
          <a className="title">Checkride : </a>
          <a className="subtitle">No allowed </a>
        </div>

        {/*ARGENT GAGNE*/}
        <div>
          <a className="gain-last-week">420 euros</a>
        </div>
        <div>
          <a className="gain-last-week">Last week</a>
        </div>

        {/*LESSONS EFFECTUEES*/}
        <div id="lessons-performed">
          <p className="name-module">Private</p>
          <p className="date-lesson">12/10/20 2000/2200</p>
          <p className="gains">48€</p>
        </div>

        <div id="lessons-performed">
          <p className="name-module">Pro</p>
          <p className="date-lesson">13/10/20 1000/1200</p>
          <p className="gains">82€</p>
        </div>

        <div id="lessons-performed">
          <p className="name-module">Special B737</p>
          <p className="date-lesson">15/10/20 1100/1200</p>
          <p className="gains">60€</p>
        </div>
      </div>
    </div>
  );
}

export default InstructorProfile;
