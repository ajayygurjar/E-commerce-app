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
      <section>
        <button type="button" onClick={fetchMovie}>Fetch Movies</button>
      </section>

      <section>
        {isLoading && <p>Loading ...</p>}
        
        {!isLoading && movies.length > 0 && (
          <ul>
            {movies.map((movie, index) => (
              <li key={index}>{movie.name}</li> 
            ))}
          </ul>
        )}

        {!isLoading && movies.length === 0 && <p>No Movies Found</p>}
      </section>
    </>
  );
};

export default Movie;
