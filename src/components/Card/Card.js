import React from "react";
import { numberFormatter } from "../../config";
import "./Card.css";

const Card = ({ gallery }) => {
  return (
    <>
      {gallery.map((img) => (
        <div className="card" key={img.id}>
          <a href={img.largeImageURL} target="_blank">
            <div className="cardImgWrapper">
              <img src={img.webformatURL} alt="gallery" className="cardImg" />
            </div>

            <div className="cardInfo  cardInfoTop">
              <p>
                <i className="fas fa-user"></i>
                <span>By</span>
                <strong>{img.user}</strong>
              </p>

              <p>
                <i className="fas fa-heart"></i>
                <span>Favorites:</span>
                {numberFormatter(img.favorites)}
              </p>

              <p>
                <i class="fas fa-thumbs-up"></i>
                <span>Likes:</span>
                {numberFormatter(img.likes)}
              </p>

              <p>
                <i className="fas fa-eye"></i>
                <span>Views:</span>
                {numberFormatter(img.views)}
              </p>
              <p>
                <i className="fas fa-comment"></i>
                <span>Comments:</span>
                {numberFormatter(img.comments)}
              </p>
              <p>
                <i className="fas fa-download"></i>
                <span>Downloads:</span>
                {numberFormatter(img.downloads)}
              </p>
            </div>
            <div className="cardInfo cardInfoBottom">
              <div className="tags">
                {img.tags
                  .split(",")
                  .map((tag, index) =>
                    tag.length >= 11 ? "" : <span key={index}>#{tag}</span>
                  )}
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default Card;
