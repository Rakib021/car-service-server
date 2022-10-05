const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { json } = require('express');
const app = express();
const port =process.env.PORT||5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from genius car service!');
})

app.listen(port, () => {
  console.log(`genius-car-service app listening on port ${port}`);
})