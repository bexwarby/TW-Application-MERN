/**
 * Fly Book de l'eleve
 */

import "./TraineeProfile.css";
import photo from "./photoTrainee.jpg";
//import {link} from "react-dom"
function TraineeProfile() {
  return (
    <div id="mainTraineeProfil">
      <div id="TraineeProfil">
        <div className="trainee">
          <img className="photoTrainee" width="100vw" alt="" src={photo}></img>
          <h3 className="traineeName">trainee name</h3>
        </div>
      </div>

      <div>
        <div id="blockStats">
          <ul id="traineeStats">
            <li className="trainningHours">Hours</li>
            <li className="nameTainee">name</li>
            <li className="regularity">Regularity</li>
          </ul>
        </div>
      </div>
      <div className="blockPrivate">
        <h1 className="status">Private wings</h1>
      </div>
      <div>
        <ul id="mainAccount">
          <li className="account">+258 €</li>
          <li className="accountStatus">Refuel</li>
        </ul>
      </div>
      <div className="test">
        <div id="historyBar">
          <ul id="TraineeHistory">
            <li className="li">Private</li>
            <li className="li">12/10/20</li>
            <li className="li">2000</li>
            <li className="li">78€</li>
          </ul>
        </div>
      </div>
      <div id="historyBar">
        <ul id="TraineeHistory">
          <li className="type">Private</li>
          <li className="date">12/10/20</li>
          <li className="lesson">2000</li>
          <li className="price">78€</li>
        </ul>
      </div>
      <div id="historyBar">
        <ul id="TraineeHistory">
          <li className="li">Private</li>
          <li className="date">12/10/20</li>
          <li className="lesson">2000</li>
          <li className="price">78€</li>
        </ul>
      </div>
      <div id="historyBar">
        <ul id="TraineeHistory">
          <li className="type">Private</li>
          <li className="date">12/10/20</li>
          <li className="lesson">2000</li>
          <li className="price">78€</li>
        </ul>
      </div>
      <div id="historyBar">
        <ul id="TraineeHistory">
          <li className="type">Private</li>
          <li className="date">12/10/20</li>
          <li className="lesson">2000</li>
          <li className="price">78€</li>
        </ul>
      </div>
    </div>
  );
}
{
  /*</div>
        
        
        <
        
        <div className="historyBar">
          <ul>
            <li className="type">Private</li>
            <li className="date">12/10/20</li>
            <li className="lesson">2000</li>
            <li className="price">78€</li>
          </ul>
        </div>
        <div className="historyBar">
          <ul>
            <li className="type">Private</li>
            <li className="date">12/10/20</li>
            <li className="lesson">2000</li>
            <li className="price">78€</li>
          </ul>
        </div>
        <div className="historyBar">
          <ul>
            <li className="type">Private</li>
            <li className="date">12/10/20</li>
            <li className="lesson">2000</li>
            <li className="price">78€</li>
          </ul>*/
}
export default TraineeProfile;
