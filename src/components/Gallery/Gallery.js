import React from "react";
import Search from "../Search/Search";
import Card from "../Card/Card";
import "./Gallery.css";

const Gallery = ({
  input,
  setInput,
  handleSearch,
  gallery,
  moreImages,
  err,
  length,
}) => {
  return (
    <section className="gallery">
      <Search input={input} setInput={setInput} handleSearch={handleSearch} />
      <div className="container">
        {err ? (
          <h1>{err}</h1>
        ) : length == 0 ? (
          <h1>No images found</h1>
        ) : (
          <>
            <Card gallery={gallery} />
            <div className="btnContainer">
              <button onClick={() => moreImages("prev")}>Prev</button>
              <button onClick={() => moreImages("next")}>Next</button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Gallery;
