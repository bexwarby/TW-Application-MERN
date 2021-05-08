/**
 * Dashboard de l'eleve
 */

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './TraineeDashboard.css'


function TraineeDashboard() {

  const value = 0;
  const maxValue = 25;
  const level = level;

  function onLoad () {
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
  }

  return (
    <div>
      <h3>Dashboard</h3>
      <div style={{ width: 200, height: 200 }}>
        <CircularProgressbar 
          onLoad={onLoad}
          value={value} 
          maxValue={maxValue} 
          text={`${value / maxValue * 100}%`}/>
      </div>
    </div>
  );
}

export default TraineeDashboard;
