import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Submission.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/clike/clike";
import "codemirror/keymap/sublime";
import "codemirror/addon/comment/comment";
import "codemirror/theme/abbott.css";
import "codemirror/mode/python/python";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-chrome";
import "ace-builds/src-noconflict/theme-github";
import { Controlled as ControlledEditor } from "react-codemirror2";
import Loading from "../loading/Loading";

function Submission() {
  let submissionId = useParams().submissionId;
  const [submission, setSubmission] = useState(null);
  const [problem, setProblem] = useState(null);
  useEffect(() => {
    const request = new Request(
      `http://localhost:8080/submission/${submissionId}`,
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
      .then(setSubmission);
  }, []);

  function loadSubmission() {
    if (submission != null && submission != undefined) {
      let status = "Test Cases Failed";
      let color = "orange";
      if (!submission.compiled) {
        status = "Compilation Error";
        color = "red";
      }
      if (submission.numberOfTestcasePassed === submission.numberOfTestCase) {
        status = "Submission Accepted";
        color = "green";
      }

      let lang;
      if (submission.language == "python") lang = "python";
      else if (submission.language == "cpp") lang = "c_cpp";
      else if (submission.language == "java") lang = "java";
      return (
        <div>
          <br />
          <h1>Result</h1>
          <hr />
          <p style={{ fontStyle: "italic" }}>{submissionId}</p>
          <br />
          <div className="submission-body">
            <table
              className="table table-bordered table-striped"
              style={{ width: "100%" }}
            >
              <tr>
                <th>Submission Status</th>
                <td style={{ color: color }}>{status}</td>
              </tr>
              <tr>
                <th>Number of test cases Passed</th>
                <td>{submission.numberOfTestcasePassed}</td>
              </tr>
              <tr>
                <th>Total Number of test cases</th>
                <td>{submission.numberOfTestCase}</td>
              </tr>
              <tr>
                <th>Code Submitted</th>
                <td style={{ textAlign: "left" }}>
                  <AceEditor
                    value={submission.code}
                    theme="chrome"
                    mode={submission.language}
                    readOnly={true}
                    maxLines={Infinity}
                    highlightActiveLine={false}
                    showGutter={false}
                  />
                </td>
              </tr>
              {ifFailed()}
            </table>
            <br />
            <a href={"/problemset/" + submission.problemId}>
              <button className="btn btn-primary">Return To Problem</button>
            </a>
            <button className="btn btn-danger">View The solution</button>
          </div>
        </div>
      );
    } else {
      return <Loading />;
    }
  }
  function ifFailed() {
    if (submission.numberOfTestcasePassed === submission.numberOfTestCase) {
      return;
    }
    if (!submission.compiled) {
      return (
        <tr>
          <th>Error Message</th>
          <td>
            <pre>
              <code>{submission.error}</code>
            </pre>
          </td>
        </tr>
      );
    } else if (submission.failedOutput === null) {
      let arr = new Array();
      arr.push(
        <tr key={1}>
          <th>Error Message</th>
          <td>{submission.error}</td>
        </tr>
      );
      arr.push(
        <tr key={2}>
          <th>Failed Test-Case</th>
          <td>
            <pre>
              input
              <code>{submission.failedTestCaseCorrectInput}</code>
            </pre>
          </td>
        </tr>
      );
    } else {
      let arr = new Array();
      arr.push(
        <tr key={1}>
          <th>Failed Test-Case</th>
          <td>
            <pre>
              input
              <code>{submission.failedTestCaseCorrectInput}</code>
            </pre>
            <pre>
              output
              <code>{submission.failedTestCaseCorrectOutput}</code>
            </pre>
          </td>
        </tr>
      );
      arr.push(
        <tr key={2}>
          <th>Failed Output</th>
          <td>
            <pre>
              <code style={{ backgroundColor: "#f35959" }}>
                {submission.userFailedOutput}
              </code>
            </pre>
          </td>
        </tr>
      );
      return arr;
    }
  }

  return <div className="container">{loadSubmission()}</div>;
}

export default Submission;
