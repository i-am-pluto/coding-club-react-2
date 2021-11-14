import React from "react";
import { Component } from "react";
import divide from "../assets/img/—Pngtree—proportional thick straight line_5487827.png";
import AceEditor from "react-ace";
import "./problem.css";
import TextEditor from "./TextEditor";
import "ace-builds/src-noconflict/mode-text";
import "ace-builds/src-noconflict/theme-kuroir";
import { useParams } from "react-router";
import "../ProblemList/problemData";
import problemData from "../ProblemList/problemData";
import "./problem.css";
function Problem() {
  const problemId = useParams();
  // console.log(problemId.problemId);
  const thisProblem = problemData.find(
    (problem) => problem.sno == problemId.problemId
  );
  // console.log(thisProblem);
  var examples = thisProblem.example;
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
  var o;
  if (thisProblem.diff == 1) {
    o = {
      color: "green",
      diff: "Easy",
    };
  } else if (thisProblem.diff == 2) {
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
      <div>
        {/* {this.draggable()} */}
        <div className="row">
          <div className="col-md-6" id="left">
            <div className="" style={{ width: "100%", marginRight: "0px" }}>
              <div className="card-body">
                <h4 className="card-tthisProblemitle" id="Title">
                  {thisProblem.sno}. <strong>{thisProblem.name}</strong>
                </h4>
                <h6
                  className="card-subtitle mb-4"
                  id="Difficulty"
                  style={{ color: o.color }}
                >
                  {o.diff}
                </h6>
                <p className="card-text" id="ProblemStatement">
                  {thisProblem.statement}
                </p>
                <div className="progress" id="Submissions">
                  <div
                    className="progress-bar"
                    aria-valuenow={thisProblem.submission}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: " 50%" }}
                  >
                    {thisProblem.submission + "%"} accepted
                  </div>
                </div>
                {temp}
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
            className="col-sm-1"
            id="mid"
            style={{
              height: "1000px",
              width: "0.1px",
              backgroundColor: "#d1e7dd",
            }}
          ></div>
          <div className="col-md-5" id="right">
            <TextEditor QuestionId={thisProblem.sno} />
          </div>
        </div>
        <div
          className="row"
          style={{ height: "20px", backgroundColor: "#d1e7dd" }}
        ></div>
      </div>
    </div>
  );
}

export default Problem;
