/**
 * Barre de navidation Instructeur
 */

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Imports des composants qui seront affichés
import InstructorDashboard from "../Components/InstructorDashboard/InstructorDashboard";
import InstructorFly from "../Components/InstructorFly/InstructorFly";
import InstructorProfile from "../Components/InstructorProfile/InstructorProfile";

export default function InstructorNav() {
    return (
        <Router>
            <div>
                
                <Switch>
                    <Route exact path="/Instructor/dashboard">
                        <InstructorDashboard />
                    </Route>
                    <Route exact path="/Instructor/fly">
                        <InstructorFly />
                    </Route>
                    <Route exact path="/Instructor/profile">
                        <InstructorProfile />
                    </Route>
                </Switch>

                <nav>
                    <ul>
                        <li>
                            <Link to="/Instructor/dashboard">
                                Dashboard instructeur
                            </Link>
                        </li>
                        <li>
                            <Link to="/Instructor/fly">Fly instructeur</Link>
                        </li>
                        <li>
                            <Link to="/Instructor/profile">
                                Profil instructeur
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Router>
    );
}
