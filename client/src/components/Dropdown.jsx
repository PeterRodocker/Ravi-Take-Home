import { useState } from 'react'

const Dropdown = ({ open, onHandleOpen, onGetMeetings, student, setStudent, students }) => {
  return (
    <>
      <button onClick={onHandleOpen}>Select a Student</button>
      {open ? (
        <ul className="menu">
          {students && students.map((student, idx) => (
            <li key={idx} className="menu-item">
              <button onClick={onGetMeetings}>{student}</button>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  )
}

export default Dropdown
