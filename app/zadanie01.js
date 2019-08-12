// Dodawanie ze ścieżki
// Stwórz taką aplikację Express, która potrafi przyjąć w ścieżce dwie liczby. Następnie odbierz je, zsumuj, a sumę wyświetl w przeglądarce.
// Pamiętaj, że parametry są zwracane jako string. Potrzebujesz więc użyć np. parseInt(), żeby zmienić je w liczby.

const express = require('express');
const app = express();

app.get('/:first/:second', (req, res) => {
  const first = Number(req.params.first);
  const second = Number(req.params.second);
  let sum = first + second;
  res.send(`Sum of ${first} and ${second} is: ${sum}.`);
});

app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});