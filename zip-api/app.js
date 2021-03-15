const express = require('express');
const app = express();

const zipdb = require('./zipData');

// const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({ test: 'Yay' });
});


app.get('/zip/:zipcode', (req, res) => {
  const queriedZips = zipdb.byZip[req.params.zipcode];

  if (queriedZips === undefined) {
    res.status(404).send("Not found");
  }
  else {
    res.status(200).json(queriedZips);
  }
  // fill in...
});


app.get('/city/:cityname', (req, res) => {
  const param = req.params.cityname.toUpperCase()
  const queriedCities = zipdb.byCity[param];

  if (queriedCities === undefined) {
    res.status(404).send("Not found");
  }
  else {
    res.status(200).json(queriedCities);
  }
  // fill in...
});


// app.listen(PORT, () => {
//   console.log(`zip-api is up and running on ${PORT}`);
// });
module.exports = app;
