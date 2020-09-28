import React, { useState, useEffect } from "react";
import { apiKey, baseUrl } from "../../config";
import Title from '../Title/Title'
import Gallery from "../Gallery/Gallery";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("yellow flowers");
  const [gallery, setGallery] = useState([]);
  const [input, setInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [err, setErr] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(input);
    setInput("");
  };

  const moreImages = (e) => {
    if (e === "next") {
      setCurrentPage((prev) => prev + 1);
    } else if (e === "prev" && currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    fetch(`${baseUrl}&q=${search}&page=${currentPage}`)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => setGallery(data.hits))
      .catch((error) => {
        if (apiKey === "") {
          setErr("Require a valid pixabay API key to display gallery");
        } else {
          setErr(error.message);
        }
      });
    window.scrollTo(0, 0);
  }, [search, currentPage]);

  return (
    <>
    <Title type="Gallery" />
    <div className="App">
      <Gallery
        input={input}
        setInput={setInput}
        handleSearch={handleSearch}
        gallery={gallery}
        moreImages={moreImages}
        err={err}
        length={gallery.length}
      />
    </div>
    </>
  );
};

export default App;
