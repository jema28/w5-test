# Make a request from the server

The server has been set up for you, so that the only place you need to write code is in the 'handleAPI' handler in `src/handler.js`. The api url is: `http://www.omdbapi.com/?s=star-wars&apikey=<APIKEY>`. Note: Insert your API key (created [here](http://www.omdbapi.com/apikey.aspx)) into the querystring!

We do NOT want you to do anything with the data you get back from the api, i.e. you should not write any code on the front end.

To check that your handler is returning the correct information go to the url 'http://localhost:4000/api'. If you have done this correctly, you will see a json object that looks like this:

```json
{
  "Search": [
    {
      "Title": "Star Wars: Episode IV - A New Hope",
      "Year": "1977",
      "imdbID": "tt0076759",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode V - The Empire Strikes Back",
      "Year": "1980",
      "imdbID": "tt0080684",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode VI - Return of the Jedi",
      "Year": "1983",
      "imdbID": "tt0086190",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode VII - The Force Awakens",
      "Year": "2015",
      "imdbID": "tt2488496",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode I - The Phantom Menace",
      "Year": "1999",
      "imdbID": "tt0120915",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode III - Revenge of the Sith",
      "Year": "2005",
      "imdbID": "tt0121766",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode II - Attack of the Clones",
      "Year": "2002",
      "imdbID": "tt0121765",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
    },
    {
      "Title": "Rogue One: A Star Wars Story",
      "Year": "2016",
      "imdbID": "tt3748528",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: The Last Jedi",
      "Year": "2017",
      "imdbID": "tt2527336",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg"
    },
    {
      "Title": "Solo: A Star Wars Story",
      "Year": "2018",
      "imdbID": "tt3778644",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SX300.jpg"
    }
  ],
  "totalResults": "445",
  "Response": "True"
}
```
