import React, { Component } from "react";
import ProblemList from "./problemList";

class ProblemSet extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1
            className="container"
            style={{ marginTop: "22px", fontStyle: "italic" }}
          >
            <span style={{ textDecoration: "underline" }}>
              Problem Set{" "}
              <button
                className="btn bt</div>n-outline-secondary"
                href="#"
                style={{ color: "rgb(0, 0, 0)", borderRadius: "10px" }}
              >
                &nbsp;<i className="fa fa-random"></i>
              </button>
            </span>
          </h1>
          <form className="me-auto search-form" target="_self">
            <div className="d-flex align-items-center">
              <label className="form-label d-flex mb-0" for="search-field">
                <i className="fa fa-search"></i>
              </label>
              <input
                className="form-control search-field"
                type="search"
                id="search-field"
                name="search"
                style={{
                  background: "#99ebab",
                  borderRadius: "44px",
                  marginLeft: "8px",
                  width: "200px",
                }}
              />
            </div>
          </form>
          <ProblemList />
        </div>
      </div>
    );
  }
}

export default ProblemSet;
