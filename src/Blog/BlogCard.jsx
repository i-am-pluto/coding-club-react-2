import React from "react";
import Star from "../assets/img/star.png";
import alt from "../assets/img/imageNotFound.png";
import "./BlogCard.css";
function BlogCard({ blogData }) {
  let Title = blogData.Title;
  let Thumbnail = new Image();
  Thumbnail.src = blogData.Thumbnail;
  if (Thumbnail) {
    console.log("inside");
    Thumbnail = { alt };
  }
  let Sypnosis = blogData.Sypnosis.substring(0, 66) + ".";
  let tags = blogData.Tags;
  let Ratings = blogData.Ratings;
  let tagsList = new Array();
  for (var i = 0; i < tags.length; i++) {
    if (i > 3) break;
    tagsList.push(
      <div className="tag col-sm-3 btn-outline-success">
        {tags[i].substring(0, 4) + "."}
      </div>
    );
  }
  let ratingsList = new Array();
  for (var i = 0; i < Ratings; i++) {
    ratingsList.push(
      <img src={Star} style={{ maxWidth: "15px", maxHeight: "100%" }} />
    );
  }
  return (
    <div className="col-md">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={alt}
          className="card-img-top"
          style={{ width: "100%", height: "220px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <div>
            <h6 className="card-subtitle mb-2 text-muted">{ratingsList}</h6>
          </div>
          <p className="card-text">{Sypnosis}</p>
          <div className="row">{tagsList}</div>
          <a
            href={"/coderHub/" + blogData.id}
            className="btn btn-outline-success"
            style={{ marginLeft: "12rem" }}
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
