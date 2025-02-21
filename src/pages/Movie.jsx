import { useState, useEffect, useCallback } from "react";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovie = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://swapi.dev/api/people/1');

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
      setError('Something Went Wrong!');
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]); // This ensures fetchMovie is called once when the component mounts

  let content = <p>Found no movies</p>;

  if (movies.length > 0) {
    content = (
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.name}</li>
        ))}
      </ul>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <>
      <section>
        <button type="button" onClick={fetchMovie}>Fetch Movies</button>
      </section>

      <section>
        {content}
      </section>
    </>
  );
};

export default Movie;
