/**
 * Conteneur de la page Home pour l'instructeur
 */

import { useContext } from "react";
import './PageTrainee.css'
import { AppContext } from '../../AppContext'


import TraineeNav from '../../navigation/TraineeNav'
import TraineeSignIn from '../PageTrainee/TraineeSignIn/TraineeSignIn'

function PageTrainee() {
  const context = useContext(AppContext)


  return (
    <div>
      {context.userID?.traineeId ? <TraineeNav traineeId={context.userID.traineeId} /> : <TraineeSignIn />}
    </div>
  );
}

export default PageTrainee;
