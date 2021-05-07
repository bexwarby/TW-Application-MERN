/**
 * Conteneur de la page Home pour l'instructeur
 * 
 * Je peux importer les composants nécessaire uniquement sur cette page depuis 
 * le dossier Components de CE dossier ou importer un composant partagé. 
 * ex: import { SharedComponentEXAMPLE } '../../Components/index'
 */
 import { useEffect, useState } from "react";
 import './PageTrainee.css'

import TraineeNav from '../../navigation/TraineeNav'
import TraineeSignIn from '../PageTrainee/TraineeSignIn/TraineeSignIn'

function PageTrainee({setUserID}) {
  const [traineeId, setTraineeId] = useState(false)

  // useEffect(() => {
  //   setUserID(traineeId)
  // }, [traineeId]);

  return (
    <div>

      {traineeId ? <TraineeNav traineeId={traineeId} /> : <TraineeSignIn setTraineeId={setTraineeId} setUserID={setUserID} />}

    </div>
  );
}

export default PageTrainee;
