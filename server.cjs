const express = require('express');
const app = express();

const affirmations = [`I`, `am`, `so`, `cool`]

app.use(express.static('dist'))

app.get(`/`, (req, res, next) => {
  res.sendFile(`${__dirname}/index.html`);
})

app.get(`/api/v1/list`, (req, res, next) => {
  res.send(affirmations);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {console.log(`server on`)})