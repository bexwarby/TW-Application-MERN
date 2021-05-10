/**
 * Dashboard de l'eleve
 */

import { CircularProgressbar } from "react-circular-progressbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-circular-progressbar/dist/styles.css";
import "./TraineeDashboard.css";
import "react-slideshow-image/dist/styles.css";

import { Slide } from "react-slideshow-image";

function TraineeDashboard() {
  const value = 10;
  const maxValue = 25;
  /* const level = level; */

  /*  function onLoad () {
     if (level == "private") {
       return {
         minValue: 0,
         maxValue: 15,
         value: 10
       } // faut ajouter les heures accumulés
     }
     else if (level == "professional") {
       return {
         minValue: 0,
         maxValue: 25,
         value: 10
       } // faut ajouter les heures accumulés
     }
     else if (level == "expert") {
       return {
         minValue: 0,
         maxValue: 20,
         value: 10
       } // faut ajouter les heures accumulés
     }
   } */

  return (
    <div className="dashboard">
      <h3 className="title">Dashboard</h3>

      <h5 className="subtitle">Private Pilot:</h5>

      {/* Gauge process */}
      <div
        style={{ width: 200, height: 200 }}
        className="gauge circle"
      >
        <CircularProgressbar
          /* onLoad={onLoad} */
          value={value}
          maxValue={maxValue}
          text={`${(value / maxValue) * 100}%`}
        />
      </div>

      <div>
        <Slide easing="ease">
          {/* 3 levels */}
          <div className="each-slide">
            <div /* style={{ 'backgroundColor': 'black' }} */>
              <span style={{ backgroundColor: "#2b2929" }}>
                <div
                  className="progress"
                  style={{ color: "white", backgroundColor: "#2b2929" }}
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Private
                  </div>
                </div>
                <div
                  className="progress"
                  style={{ color: "white", backgroundColor: "#2b2929" }}
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Professional
                  </div>
                </div>
                <div
                  className="progress"
                  style={{ color: "white", backgroundColor: "#2b2929" }}
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Expert
                  </div>
                </div>
              </span>
            </div>
          </div>
          {/* 5 measurements process */}
          <div className="each-slide">
            <div /* style={{ 'backgroundColor': 'white' }} */>
              <span>
                <div
                  className="progress"
                  style={{ color: "white", backgroundColor: "#2b2929" }}
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="15"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Handling
                  </div>
                </div>
                <div
                  className="progress"
                  style={{ color: "white", backgroundColor: "#2b2929" }}
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Procedures
                  </div>
                </div>

                <div
                  className="progress"
                  style={{ color: "white", backgroundColor: "#2b2929" }}
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Knowledge
                  </div>
                </div>

                <div
                  className="progress"
                  style={{ color: "white", backgroundColor: "#2b2929" }}
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Trajectory
                  </div>
                </div>

                <div
                  className="progress"
                  style={{ color: "white", backgroundColor: "#2b2929" }}
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Communication
                  </div>
                </div>
              </span>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default TraineeDashboard;
