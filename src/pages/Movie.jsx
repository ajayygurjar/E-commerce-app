import { useState } from "react";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 

  async function fetchMovie() {
    setIsLoading(true);

    
    const response = await fetch('https://swapi.dev/api/people/1/');
    const data = await response.json();

    
    const moviePromises = data.films.map(async (filmUrl) => {
      const filmResponse = await fetch(filmUrl);
      const filmData = await filmResponse.json();
      return {
        id: filmData.episode_id,
        name: filmData.title, 
      };
    });

    
    const moviesData = await Promise.all(moviePromises);

    setMovies(moviesData);
    setIsLoading(false); 
  }

  return (
    <>
      <button type="button" onClick={fetchMovie}>Fetch Movie</button>
      
      {/* Show loader when isLoading is true */}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>{movie.name}</li> 
          ))}
        </ul>
      )}
    </>
  );
};

export default Movie;
