const express = require('express');
const cors = require('cors');
const app = express();
const studentRouter = require('./routes/student');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use('/students', studentRouter);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));