import { useEffect, useState } from 'react'
import axios from 'axios'

import Dropdown from './Dropdown'

const Students = ({ student, setStudent, students, setStudents, token }) => {
  const [open, setOpen] = useState(false);

  async function fetchStudents() {
    try {
      if (token) {
        const { data: students } = await axios.get('/api/students', {
          headers: { authorization: token }
        })
        setStudents(students)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchStudents()
  }, [token])

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleGetMeetings = (e) => {
    setStudent(e.target.innerHTML)
    setOpen(!open);
    console.log(student)
  }

  return (
    <>
      <Dropdown
        open={open}
        onHandleOpen={handleOpen}
        onGetMeetings={handleGetMeetings}
        student={student}
        setStudent={setStudent}
        students={students}
        setStudents={setStudents}
      />
    </>
  )
}

export default Students
