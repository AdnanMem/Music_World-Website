import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <>
      <div className="card">
        <h1 className="title">S E L E C T I O N</h1>

        <div className="wrapper">
          {data.map((cd) => {
            const { id, image, artist, album_name, year, price } = cd;

            return (
              <div className="card-container" key={id}>
                <div className="img-div">
                  <img src={image} alt="" />
                </div>
                <p>Artist: {artist}</p>
                <p>Album: {album_name}</p>
                <p>Released: {year} </p>
                <h3 className="price_paragraph">
                  Price: {price} <hr />
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
