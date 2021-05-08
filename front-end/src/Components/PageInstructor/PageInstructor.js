/**
 * Conteneur de la page Home pour l'instructeur
 */

import { useContext } from "react";
import { AppContext } from '../../AppContext'
import './PageInstructor.css'


import InstructorNav from '../../navigation/InstructorNav'
import InstructorSignIn from './InstructorSignIn/InstructorSignIn'


function PageInstructor() {
  const context = useContext(AppContext)


  return (
    <div>
      {context.userID?.instructorId ? <InstructorNav instructorId={context.userID?.instructorId} /> : <InstructorSignIn />}

    </div>
  );
}

export default PageInstructor;
