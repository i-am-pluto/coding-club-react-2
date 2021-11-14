import React from "react";
import "../assets/bootstrap/css/bootstrap.min.css";
function BlogHeader() {
  return (
    <div className="container" style={{ display: "flex" }}>
      <h2 className="container" style={{ marginTop: "22px" }}>
        <span style={{ textDecoration: "underline" }}>Coding Club Blog</span>
      </h2>
      <div
        class="input-group"
        style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
      >
        <div class="form-outline">
          <input
            type="search"
            id="form1"
            class="form-control"
            placeholder="Type query"
            aria-label="Search"
          />
        </div>
      </div>
    </div>
  );
}

export default BlogHeader;
