/**
 * Conteneur de la page Admin s
 */

import { useState } from 'react';
import './AdminSignIn.css'
import "../general.css"


function AdminSignIn({setAuth}) {
  const [ ids, setIds ] = useState({})


  const handleChange = (e) => {
    const idChange = { ...ids, [e.target.name]: e.target.value }
    setIds(idChange)
  }

  const signIn = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/usr/admin/signin`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            'Content-Type': "application/json"
          },
          body: JSON.stringify(ids),
        })
      const res = await response.json()
      console.log(res);

      if(!res.message && res.token) {
        localStorage.setItem("jwt", res.token);
        setAuth(true)
      } 

    } catch (err) {
      console.log(err);
    }

 
  }


  return (
    <div className="adminContainer">
      <form>
        <h2>True Wings Admin</h2>
        <input type="text" name="email" id="email" placeholder="email" onChange={handleChange} />
        <input type="password" name="password" id="password" placeholder="password" onChange={handleChange} />
        <button onClick={signIn}>Connection</button>
      </form>
    </div>
  )
}

export default AdminSignIn;
