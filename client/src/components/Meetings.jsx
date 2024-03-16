import { useEffect, useState } from 'react'
import axios from 'axios'

const Meetings = ({ student, token }) => {
  const [meetings, setMeetings] = useState([])
  const [percentage, setPercentage] = useState(0)

  const findPercentage = () => {
    let total = 0
    let instructional = 0

    if (meetings) {
      for (let i = 0; i < meetings.length; i++) {
        total += meetings[i].days_of_week.length * meetings[i].duration
      }
      for (let i = 0; i < meetings.length; i++) {
        if (meetings[i].tags.includes('instructional'))
          instructional += meetings[i].days_of_week.length * meetings[i].duration
      }
    }
    setPercentage(parseFloat((instructional / total) * 100).toFixed(1))
  }

  async function fetchMeetings() {
    try {
      if (student) {
        const { data: meetings } = await axios.get(`/api/students/${student}/meetings`, {
          headers: { authorization: token }
        })
        setMeetings(meetings)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchMeetings()
  }, [student])

  useEffect(() => {
    findPercentage()
  }, [meetings])


  return (
    <>
      <p>{percentage > 0 ? `${student} spends ${percentage}% of their time in meetings` : null}</p>
    </>
  )
}

export default Meetings
