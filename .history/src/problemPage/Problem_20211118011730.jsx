import React, { useEffect, useState } from "react";
import "./problem.css";
import TextEditor from "./TextEditor";
import "ace-builds/src-noconflict/mode-text";
import "ace-builds/src-noconflict/theme-kuroir";
import { useParams } from "react-router";
import "../ProblemList/problemData";
import "./problem.css";
import Loading from "../loading/Loading";

function Problem() {
  const problemId = useParams();
  const [problem, setProblem] = useState(null);
  useEffect(() => {
    const request = new Request(
      `http://localhost:8080/problemset/${problemId.problemId}`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    fetch(request)
      .then((Response) => {
        return Response.json();
      })
      .then(setProblem);
  }, []);
  // console.log(problem);

  function loadProblem() {
    if (problem === null) {
      <Loading />;
    } else {
      const examples = problem.examples;
      let o;
      if (problem.diff == 1) {
        o = {
          color: "green",
          diff: "Easy",
        };
      } else if (problem.diff == 2) {
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
        <div className="" style={{ width: "100%", marginRight: "0px" }}>
          <div className="card-body">
            <h4 className="card-tthisProblemitle" id="Title">
              {problem.sno}. <strong>{problem.title}</strong>
            </h4>
            <h6
              className="card-subtitle mb-4"
              id="Difficulty"
              style={{ color: o.color }}
            >
              {o.diff}
            </h6>
            <p className="card-text" id="ProblemStatement">
              {problem.statement}
            </p>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: problem.submissions / 1000 }}
                aria-valuenow={problem.submissions}
                aria-valuemin="0"
                aria-valuemax="100000"
              >
                {problem.submissions}
              </div>
            </div>
            {examples.map((example, i) => {
              return (
                <div key={i} style={{ marginTop: "22px" }}>
                  Example {i + 1}
                  <pre>
                    <code>
                      <strong>INPUT:-</strong> {example.input}
                      <br />
                      <strong>OUTPUT:-</strong> {example.output}
                    </code>
                  </pre>
                </div>
              );
            })}
            <a className="card-link" href="#">
              Blog
            </a>
            <a className="card-link" href="#">
              Discussion
            </a>
          </div>
        </div>
      );
    }
  }

  function loadTextEditor() {
    if (problem === null) {
      return <Loading />;
    } else {
      return (
        <div className="col-md-5" id="right">
          <TextEditor QuestionId={problemId.problemId} />
        </div>
      );
    }
  }

  return (
    <div>
      <div>
        <div className="row">
          <div className="col-md-6" id="left">
            {loadProblem()}
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
          {loadTextEditor()}
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
