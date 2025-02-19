import { useState } from "react";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  function fetchMovie() {
    fetch('https://swapi.dev/api/people/1/')
      .then(response => response.json())
      .then(data => {
        // Since data is a single object (not an array), you can directly map it to a new array
        const transformMovies = [{
          id: data.url, // Use URL as an identifier (or any unique property)
          name: data.name
        }];
        
        setMovies(transformMovies);
      });
  }

  return (
    <>
      <button type="button" onClick={fetchMovie}>Fetch Movie</button>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Movie;
