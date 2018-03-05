const express = require('express');
const axios = require('axios');
const hbs = require('hbs');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'Public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/movie', function(req, res) {
  res.send('<h1>Movie</h1>');
})

app.get('/movieInfo', function(req, res) {
  const title = req.query.title;
  // const id = req.query.id;
  // const apiKey = '3fc535bc';
  const apiKey = process.env.API_KEY;
  console.log("hello " + apiKey);

  axios.get(`http://omdbapi.com/?apikey=${apiKey}&s=${title}`)
    .then(function(response) {
      console.log(response.data);
      const poster = response.data.Search[0].Poster;
      res.send({poster});
    })
    .catch(function(response) {
      res.send({})
    })
})

app.listen(port, () => {
  console.log('Listening on port 3000');
});
