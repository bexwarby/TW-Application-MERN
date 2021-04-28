/**
 * Conteneur de la page Home pour l'instructeur
 * 
 * Je peux importer les composants nécessaire uniquement sur cette page depuis 
 * le dossier Components de CE dossier ou importer un composant partagé. 
 * ex: import { SharedComponentEXAMPLE } '../../Components/index'
 */

import './PageTrainee.css'

import TraineeNav from '../../navigation/TraineeNav'

function PageTrainee() {


  return (
    <div>
      <h3>Trainee Home Component</h3>
      <p>Rendu conditionnel</p>
      <p>SI pas de module selectionné ALORS composant choix module SINON composant du module en cours</p>

      <p>Trainee Navigation PROGRES / MODULE EN COURS / FLYBOOK / PROFILE</p>
      <TraineeNav />
    </div>
  );
}

export default PageTrainee;
