import React from "react";

export const Gallery = props => {
  return (
    <div className="imgBlog">
      <a href="#">
        <img
          className="gutter-box"
          alt="example"
          src={props.image}
          style={{ width: "100%", height: "20rem" }}
        />
      </a>
      <div className="overlay" />
    </div>
  );
};

export const Images = props => {
  return (
    <div className="imgBlog">
      <a href="#">
        <img src={props.image} style={{ width: "100%", height: "auto" }} />
      </a>
      <div className="overlay" />
    </div>
  );
};
export default { Gallery, Images };
