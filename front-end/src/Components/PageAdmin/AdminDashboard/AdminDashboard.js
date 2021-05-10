/**
 * Dashboard Admin 
 */

import './AdminDashboard.css'
import { useEffect, useState, useContext } from 'react'
import { AppContext } from '../../../AppContext'


function AdminDashboard() {
  const [users, setUsers] = useState([])
  const [view, setView] = useState(0)
  const [ids, setIds] = useState({})
  const context = useContext(AppContext)

  useEffect(() => {
    const getUsers = async () => {
      const token = localStorage.getItem('jwt')
      try {
        const res = await fetch(`${process.env.REACT_APP_SERVER}/admin/users`,
        {
          headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
          },
        })

        const allUsers = await res.json()
        setUsers(allUsers.users)

      } catch (err) {
        console.log(err);
      }
    }
    getUsers()
  }, [context.userID?.token, view])


  const handleAddAdmin = () => {
    const inputs = document.querySelectorAll('.inputsAddmin')
    if(!view) {
      inputs.forEach(i => i.removeAttribute('hidden'))
      setView(1)
      console.log(ids);
    } else {
      if (ids.fullName && ids.email && ids.password) {
        const addAdmin = async () => {
          const token = localStorage.getItem('jwt')
          try {
            const res = await fetch(`${process.env.REACT_APP_SERVER}/admin/signup`,
            {
              method: 'POST',
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify(ids)
            })
            
            const newOne = await res.json()
            console.log(newOne.message);
          } catch (err) {
            console.log(err);
          }
          inputs.forEach(i => i.value = '')
        }
        addAdmin()
      }
      inputs.forEach(i => i.setAttribute('hidden', true))
      setView(0)
    }
  }


  async function handleDelAdmin (id) {
    const token = localStorage.getItem('jwt')
    try {
      await fetch(`${process.env.REACT_APP_SERVER}/admin/delete/${id}`,
      {
        method: 'DELETE',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        },
      })
      
    } catch (err) {
      console.log(err);
    }  
    setView(1)     
    setView(0)     
  }

  const handleAddmin = (e) => {
    const idChanges = { ...ids, [e.target.name]: e.target.value }
    setIds(idChanges)
  }


  return (
    <div className="admin-dashboard">
      <h1>Dashboard admin</h1>
      
      <h4>ADMINS <span onClick={handleAddAdmin}>[+]</span></h4>
      <input className="inputsAddmin" hidden type="text" name="fullName" placeholder="name" onChange={handleAddmin} style={{ height: '25px', width: 'auto', }} />
      <input className="inputsAddmin" hidden type="email" name="email" placeholder="mail" onChange={handleAddmin} style={{ height: '25px', width: 'auto', margin: 5 }} />
      <input className="inputsAddmin" hidden type="password" name="password" placeholder="password" onChange={handleAddmin} style={{ height: '25px', width: 'auto', }} />
      
      <ul>
        {users.map(user => 
          user.role === 'admin' &&
          <li key={user._id}>
            {user.fullName} - [{user.email}] <span onClick={() => handleDelAdmin(user._id)}>[delete]</span>
          </li>
        
        )}
      </ul>

      <h4>INSTRUCTORS</h4>
      <ul>
        {users.map(user => 
          user.role === 'instructor' &&
          <li key={user._id}>
            {user.fullName} - [{user.email}]
          </li>
        
        )}
      </ul>

      <h4>TRAINEES</h4>
      <ul>
        {users.map(user => 
          user.role === 'trainee' &&
          <li key={user._id}>
            {user.fullName} - [{user.email}] - credits({user.credits})
          </li>
        
        )}
      </ul>

    </div>
  )
}

export default AdminDashboard;
