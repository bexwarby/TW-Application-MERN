/**
 * Conteneur de la page Admin s
 */

import { useContext } from "react";
import './PageAdmin.css'
import { AppContext } from '../../AppContext'

import AdminNav from '../../navigation/AdminNav'
import AdminSignIn from '../PageAdmin/AdminSignIn/AdminSignIn'


function PageAdmin() {
  const context = useContext(AppContext)


  return (
    <div>
      {context.userID?.adminId ? <AdminNav adminId={context.userID.adminId} /> : <AdminSignIn />}
    </div>
  );
}

export default PageAdmin;
