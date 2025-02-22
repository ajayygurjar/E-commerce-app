/* eslint-disable no-unused-vars */
import { useState, useEffect, useCallback } from "react";
import AddMovie from "./AddMovies";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [addMov, setAddMov] = useState(false);

  const addForm = () => {
    setAddMov((prev) => !prev);
  };

  // Delete handler to remove the movie from Firebase
  const deleteHandler = async (id) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://react-http-ffc12-default-rtdb.firebaseio.com/movies/${id}.json`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to delete movie');
      }

      // Remove the deleted movie from the state to update the UI
      setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));

    } catch (error) {
      setError('Something Went Wrong! Could not delete movie');
    } finally {
      setIsLoading(false);  // Ensure loading state is turned off
    }
  };

  // Add movie handler to send a POST request to Firebase
  const addMovieHandler = async (movie) => {
    const response = await fetch('https://react-http-ffc12-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to add movie');
    }

    const data = await response.json();
    console.log(data);
    fetchMovies(); // Refresh the movie list after adding a new movie
  };

  // Fetch movies from Firebase
  const fetchMovies = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://react-http-ffc12-default-rtdb.firebaseio.com/movies.json');

      if (!response.ok) {
        throw new Error('Something Went Wrong!');
      }

      const data = await response.json();
      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          date: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError('Something Went Wrong!');
    }

    setIsLoading(false);
  }, []);

  // Call fetchMovies when the component mounts
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  // Display content based on movies data, loading, or error state
  let content = <p>Found no movies</p>;

  if (movies.length > 0) {
    content = (
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <span>Title: {movie.title}</span><br />
            <span>Opening Text: {movie.openingText} </span>
            <span>Release Date: {movie.date}</span>
            <button onClick={() => deleteHandler(movie.id)}>Delete</button>
          </li>
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
        {addMov ? (
          <AddMovie onAddMovie={addMovieHandler} />
        ) : (
          <button type="button" onClick={addForm}>
            Add Movie
          </button>
        )}
      </section>
      <section>
        <button type="button" onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </>
  );
};

export default Movie;
