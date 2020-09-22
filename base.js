const express = require('express');
const path = require('path');
const app = express();

app.use('/static', express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/html', 'index.html'));
})

app.get('/Japanese' ,function (req, res) {
  res.sendFile(path.join(__dirname, 'private/letters/Japanese', 'words.json'))
})

app.get("/Anwser" ,function (req, res) {
  res.sendFile(path.join(__dirname, 'private/letters/Polish', 'words.json'))
})


app.listen(3000 ,() => {
  console.log(`Example app listening at http://localhost:3000`)});