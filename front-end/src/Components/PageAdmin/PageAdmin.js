/**
 * Conteneur de la page Admin s
 */

import { useState } from 'react';
import './PageAdmin.css'

import AdminNav from '../../navigation/AdminNav'
import AdminSignIn from '../AdminSignIn/AdminSignIn'



function PageAdmin() {
  const [ auth, setAuth ] = useState(false)

  return (
    <div>
      {auth ? <AdminNav auth={auth} /> : <AdminSignIn setAuth={setAuth} />}

      {/* <p>Liste des instructeurs a valider</p>
      <p>Navigation: VALIDATION / PROFILS DES MEMBRES</p> */}
    </div>
  );
}

export default PageAdmin;

// // TRY
// {!auth && <AdminSignIn setAuth={setAuth} />}
// {auth && <AdminNav />}