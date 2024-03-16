const express = require('express');
const router = express.Router();
const URL = 'https://crystal-pepsi.herokuapp.com/students';

router.get(`/`, async (req, res) => {
  const students = await fetch(URL, {
    headers: { Authorization: req.headers.authorization }
  }).then(res => res.json())
  res.send(students)
})

router.get(`/:student/meetings`, async (req, res) => {
  const meetings = await fetch(`${URL}/${req.params.student}/meetings`, {
    headers: { Authorization: req.headers.authorization }
  }).then(res => res.json())
  res.send(meetings)
})

module.exports = router;