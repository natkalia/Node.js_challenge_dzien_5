// // Zadanie dnia: Ankieta
// // Stwórz aplikację Express. Powinna ona serwować statyczne pliki z folderu ./public/zadanieDnia/. Na stronie głównej możliwe jest głosowanie w ankiecie.
// // Obsłuż głosowanie tak, żeby przejście do którejkolwiek ścieżki /vote/yes, /vote/no powodowało dodanie głosu do odpowiedniej opcji. Zwróć do przeglądaki Dziękujemy za głos!.
// // Na ścieżce /votes/check wyświetl wyniki ankiety - ilość głosów oddanych na każdą opcję.
// // * A jeżeli chciał(a)byś teraz dodać trzecią opcję "To się okaże" / maybe - w jaki sposób najłatwiej to zaimplementować, by nie powtarzać wielokrotnie jednego kodu (zasada DRY)?

const express = require('express');
const app = express();

let voteYes = 0;
let voteNo = 0;
let voteMaybe = 0;

app.use(express.static('./public/zadanieDnia/'));

app.get('/vote/:type', (req, res) => {
  switch (req.params.type) {
    case "yes":
        voteYes++;
        break;
    case "no":
        voteNo++;
        break;
    case "maybe":
        voteMaybe++;
        break;
    case "check":
        res.send(`Głosów na tak: ${voteYes}. Głosów na nie: ${voteNo}. Głosów na może: ${voteMaybe}.`);
        break;
  }
  res.send('Dziękujemy za głos!');
});

app.get('/votes/check', (req, res) => {
  res.send(`Głosów na tak: ${voteYes}. Głosów na nie: ${voteNo}. Głosów na może: ${voteMaybe}.`);
});

app.listen(3000, () => {
  console.log('Serwer działa na porcie 3000.');
});

    


