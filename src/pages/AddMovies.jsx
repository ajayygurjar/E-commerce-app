/* eslint-disable react/prop-types */
import { useState } from "react";

const AddMovie = ({ onAddMovie }) => {
  const [title, setTitle] = useState("");
  const [openingText, setOpeningText] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const newMovieObj = {
      title,
      openingText,
      releaseDate,
    };
    console.log(newMovieObj);
    onAddMovie(newMovieObj); // Call the function to pass the movie data
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter movie title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="openingText">Opening Text</label>
        <textarea
          id="openingText"
          value={openingText}
          onChange={(e) => setOpeningText(e.target.value)}
          placeholder="Enter opening text"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="releaseDate">Release Date</label>
        <input
          type="date"
          id="releaseDate"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
      </div>
      <div className="buttons">
        <button type="submit">Add Movie</button>
      </div>
    </form>
  );
};

export default AddMovie;
