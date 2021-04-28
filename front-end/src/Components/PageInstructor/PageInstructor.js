/**
 * Conteneur de la page Home pour l'instructeur
 * 
 * Je peux importer les composants nécessaire uniquement sur cette page depuis 
 * le dossier Components de CE dossier ou importer un composant partagé. 
 * ex: import { SharedComponentEXAMPLE } '../../Components/index'
 */

import './PageInstructor.css'


import InstructorNav from '../../navigation/InstructorNav'


function PageInstructor() {


  return (
    <div>
      <h3>Instructor Home Component</h3>
      <p>Rendu conditionnel de BOOK / FLY / PROFILE</p>

      <InstructorNav />
    </div>
  );
}

export default PageInstructor;
