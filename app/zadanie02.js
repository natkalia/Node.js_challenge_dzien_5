// Przepraszam, jak masz na imię?
// Stwórz taką aplikację Express, która ma trzy ścieżki:
// '/name/set/:imie' - zapamiętuje ona w programie podane imię oraz wyświetla je w przeglądarce.
// '/name/show' - wyświetla ona podane wcześniej imię.
// '/name/check' - wyświetla ona informację, czy imię zostało już zapisane w programie czy nie.
// Podpowiedź: wykorzystaj zmienną.

const express = require('express');
const app = express();
let name;

app.get('/name/set/:imie', (req, res) => {
  name = req.params.imie;
  res.send(`Imię to: ${name}`);
  return name;
});

app.get('/name/show', (req, res) => {
  res.send(`Imię podane wcześniej to: ${name}`)
});

app.get('/name/check', (req, res) => {
  res.send(`Imię zostało zapisane do zmiennej: ${name}`)
});

app.listen(3000, () => {
  console.log('Serwer działa na porcie 3000.')
});