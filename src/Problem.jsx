import React, { Component } from "react";
import divide from "./assets/img/—Pngtree—proportional thick straight line_5487827.png";
import "./problem.css";
class Problem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sno: this.props.sno,
      name: this.props.name,
      statement: this.props.statement,
      examples: this.props.examples,
      submission: this.props.submission,
      diff: this.props.diff,
    };
  }
  draggable() {
    //learn implementation
    let left = document.getElementById("left");
    let midBar = document.getElementById("mid");
    let right = document.getElementById("right");
    left.addEventListener("mousedown", function (e) {
      document.onmouseup = function () {
        document.onmouseup = null;
        document.onmousemove = null;
      };
      document.onmousemove = function () {
        var position = e.clientX;
        left.style.width = position;
      };
    });
  }
  generateExamples() {
    var examples = this.state.examples;
    var temp = new Array();
    for (var i = 0; i < 2; i++) {
      let t = (
        <div key={i} style={{ marginTop: "22px" }}>
          Example {i}
          <pre>
            <code>
              <strong>INPUT:-</strong> {examples[i].input}
              <br />
              <strong>OUTPUT:-</strong> {examples[i].output}
            </code>
          </pre>
        </div>
      );
      temp.push(t);
    }
    return temp;
  }
  render() {
    var o;
    if (this.state.diff == 1) {
      o = {
        color: "green",
        diff: "Easy",
      };
    } else if (this.state.diff == 2) {
      o = {
        color: "#ff8a14",
        diff: "Medium",
      };
    } else {
      o = {
        color: "darkred",
        diff: "Hard",
      };
    }
    return (
      <div>
        {/* {this.draggable()} */}
        <div className="row">
          <div className="col-md-6" id="left">
            <div className="" style={{ width: "100%", marginRight: "0px" }}>
              <div className="card-body">
                <h4 className="card-title" id="Title">
                  {this.state.sno}. <strong>{this.state.name}</strong>
                </h4>
                <h6
                  className="card-subtitle mb-4"
                  id="Difficulty"
                  style={{ color: o.color }}
                >
                  {o.diff}
                </h6>
                <p className="card-text" id="ProblemStatement">
                  {this.state.statement}
                </p>
                <div className="progress" id="Submissions">
                  <div
                    className="progress-bar"
                    aria-valuenow={this.state.submission}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: " 50%" }}
                  >
                    {this.state.submission + "%"} accepted
                  </div>
                </div>
                {this.generateExamples()}
                <code></code>
                <a className="card-link" href="#">
                  Blog
                </a>
                <a className="card-link" href="#">
                  Discussion
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-md-1"
            id="mid"
            style={{
              height: "1000px",
              width: "1px",
              backgroundColor: "#d1e7dd",
            }}
          >
            {/* <img src={divide} className alt="" /> */}
          </div>
          <div className="col-md-4" id="right"></div>
        </div>
        <div
          className="row"
          style={{ height: "20px", backgroundColor: "#d1e7dd" }}
        ></div>
      </div>
    );
  }
}

export default Problem;
