const express = require('express');
const app = express();

app.use(express.static('dist'))

app.get(`/`, (req, res, next) => {
  res.sendFile(`${__dirname}/index.html`);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {console.log(`server on`)})