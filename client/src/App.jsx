import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'

import Students from './components/Students'
import Meetings from './components/Meetings'

function App() {
  const [students, setStudents] = useState([])
  const [student, setStudent] = useState('')
  const [token, setToken] = useState()

  useEffect(() => {
    localStorage.setItem('Authorization', '2444011b-7b70-4608-aa17-bdfb67359553')
    setToken(localStorage.getItem('Authorization'))
  }, [token]);

  return (
    <>
      <h1>Take Me Home</h1>
      <div className="card">
        <Students
          student={student}
          setStudent={setStudent}
          students={students}
          setStudents={setStudents}
          token={token} />
        <Meetings student={student} token={token} />
      </div>
    </>
  )
}

export default App
