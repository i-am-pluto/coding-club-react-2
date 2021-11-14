import React from "react";
import BlogCard from "./BlogCard";
import BlogData from "./BlogData";
import "./BlogList.css";
import { useState } from "react";
function BlogList({ start }) {
  let list = BlogData;
  return (
    <div className="container mx-auto mt-4">
      <div className="row">
        {list.slice(start).map((listItem) => {
          return (
            <div className="col-sm">
              <BlogCard blogData={listItem} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogList;
