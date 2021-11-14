import React from "react";
import BlogHeader from "./BlogHeader";
import BlogList from "./BlogList";

function BlogHome() {
  return (
    <div>
      <BlogHeader />
      <br />
      <center>
        <h1 className="container">Featured</h1>
      </center>
      <BlogList start={0} />
    </div>
  );
}

export default BlogHome;
