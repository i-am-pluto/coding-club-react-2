import React from "react";
import { useParams } from "react-router";
import BlogHeader from "./BlogHeader";

function Blog() {
  let blogId = useParams();
  return (
    <div>
      <BlogHeader />
    </div>
  );
}

export default Blog;
