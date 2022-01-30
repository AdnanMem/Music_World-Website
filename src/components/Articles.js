import React from "react";
import "./Articles.css";

const Articles = ({ articles }) => {
  return (
    <>
      <div className="articles">
        <h1 className="title">A R T I C L E S</h1>

        <div className="articles-wrapper">
          {articles.map((article) => {
            const { id, date, title, content, image } = article;

            return (
              <>
                <div className="article-div" key={id}>
                  <div className="article-content">
                    <p className="date">{date}</p>
                    <h1>{title}</h1>
                    <p className="text">{content}</p>
                  </div>

                  <div className="article-img">
                    <img src={image} alt="" />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Articles;
