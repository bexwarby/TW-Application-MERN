/**
 * Validation users Admin 
 */

import './AdminValidation.css'
import { useEffect, useState, useContext } from 'react'
import { AppContext } from '../../../AppContext'


function AdminValidation() {
  const context = useContext(AppContext)
  const [pendingInstructor, setPendingInstructor] = useState([])
  const [validating, setValidating] = useState(0)

  useEffect(() => {
    const getPendings = async () => {
      const token = localStorage.getItem('jwt')
      try {
        const res = await fetch(`${process.env.REACT_APP_SERVER}/admin/pending`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              'Authorization': `Bearer ${token}`
            },
          })

        const pendings = await res.json()
        console.log(pendings);
        setPendingInstructor(pendings.pendings)
      } catch (err) {
        console.log(err);
      }
    }
    getPendings()
  }, [validating, context.userID?.token]);

  async function handleCheck(id) {
    const token = localStorage.getItem('jwt')
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER}/admin/validate/${id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
          },
        })

      const newOne = await res.json()
      if (!newOne.instructor) console.log(newOne.message);
      else console.log(newOne.instructor)
      console.log(newOne);
      setValidating(validating + 1)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div >
      <h1>Validation instructor</h1>
      <ul>
        {pendingInstructor.map(pending =>
          <li key={pending._id}>
            {pending.fullName}
            <input type="checkbox" name="validating" onClick={() => handleCheck(pending._id)} style={{ width: '15px', position: 'relative', top: '13px', left: '5px' }} />
          </li>
        )}
      </ul>
    </div>
  )
}

export default AdminValidation;
