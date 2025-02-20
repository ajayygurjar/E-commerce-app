import { useState } from "react";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null);

  async function fetchMovie() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://swapi.dev/api/people/1/');

      // always do this before paresing data 
      if (!response.ok) {
        throw new Error('Something Went Wrong!');
      }


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

    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false); 
  }

  return (
    <>
      <section>
        <button type="button" onClick={fetchMovie}>Fetch Movies</button>
      </section>

      <section>
        {error && <p>{error}</p>}

        {!isLoading && movies.length > 0 && !error && (
          <ul>
            {movies.map((movie, index) => (
              <li key={index}>{movie.name}</li> 
            ))}
          </ul>
        )}

        {!isLoading && movies.length === 0 && <p>No Movies Found</p>}
        
        {isLoading && <p>Loading ...</p>}
      </section>
    </>
  );
};

export default Movie;
