/* eslint-disable react/prop-types */
import { useState } from "react";

const AddMovie = ({ onAddMovie }) => {
  const [title, setTitle] = useState("");
  const [openingText, setOpeningText] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [isFormValid, setIsFormValid] = useState(true); 

  const submitHandler = async (event) => {
    event.preventDefault();

    // Simple validation 
    if (!title || !openingText || !releaseDate) {
      setIsFormValid(false); // Set form as invalid if any field is missing
      return;
    }

    const newMovieObj = {
      title,
      openingText,
      releaseDate,
    };
    
    await onAddMovie(newMovieObj); // Pass movie data to parent
    resetForm(); 
    
  };

  const resetForm = () => {
    setTitle("");
    setOpeningText("");
    setReleaseDate("");
    setIsFormValid(true); 
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
      {!isFormValid && <p style={{ color: 'red' }}>Please fill all the fields!</p>} 

      <div className="buttons">
        <button type="submit">Add Movie</button>
      </div>
    </form>
  );
};

export default AddMovie;
