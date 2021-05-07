/**
 * Conteneur de la page Home pour l'instructeur
 * 
 * Je peux importer les composants nécessaire uniquement sur cette page depuis 
 * le dossier Components de CE dossier ou importer un composant partagé. 
 * ex: import { SharedComponentEXAMPLE } '../../Components/index'
 */

import { useEffect, useState } from "react";
import './PageInstructor.css'


import InstructorNav from '../../navigation/InstructorNav'
import InstructorSignIn from './InstructorSignIn/InstructorSignIn'


function PageInstructor({ setUserID }) {
  const [instructorId, setInstructorId] = useState(false)

  // useEffect(() => {
  //   setUserID(instructorId)
  // }, [instructorId]);

  return (
    <div>
      {instructorId ? <InstructorNav instructorId={instructorId} /> : <InstructorSignIn setInstructorId={setInstructorId} setUserID={setUserID} />}

    </div>
  );
}

export default PageInstructor;
