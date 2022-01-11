import React, { useState } from "react";

function AddAProblem() {
  let [examples, setExamples] = useState(["hi"]);
  let [testCases, setTestCases] = useState(["hi"]);
  let [diff, setDiff] = useState(1);
  let [time, setTime] = useState(1);
  let [disable, setDisable] = useState("");

  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };

  function handleSubmit(event) {
    setDisable({ disabled: "..." });
    const [Title, Statement, Time] = [
      document.getElementById("title").value,
      document.getElementById("statement").value,
      time,
    ];
    // document.write(Title, Statement, Time);
    let Examples = [];
    let pid = Math.random().toString(16).slice(2);

    // document.write(document.getElementById("example-2-input").value);
    for (var i = 0; i < examples.length; i++) {
      Examples.push({
        exampleId: Math.random().toString(16).slice(2),
        problemId: pid,
        input: document.getElementById("example-" + i + "-input").value,
        output: document.getElementById("example-" + i + "-output").value,
      });
    }
    let TestCases = [];
    for (var i = 0; i < testCases.length; i++) {
      TestCases.push({
        problemId: pid,
        testCaseId: Math.random().toString(16).slice(2),
        input: document.getElementById("testCase-" + i + "-input").value,
        output: document.getElementById("testCase-" + i + "-output").value,
      });
    }
    let problemTemplate = {
      problemId: pid,
      sno: 1,
      title: Title,
      statement: Statement,
      timeLimit: Time,
      diff: diff,
      examples: Examples,
      testCases: TestCases,
      submissions: 0,
    };
    console.log(problemTemplate);
    console.log("hi");
    console.log(JSON.stringify(problemTemplate, getCircularReplacer()));
    fetch("http://localhost:8080/problemset/add", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(problemTemplate, getCircularReplacer()),
    }).then((Response) => {
      console.log(Response.statusText);
    });
  }

  return (
    <div className="container">
      <br />
      <form>
        <div className="col-md-12">
          <h1 style={{ textAlign: "center" }}>Write A Problem</h1>
          <hr />
          <hr />
          <label className="form-label" style={{ marginLeft: "0px" }}>
            Title:
            <input
              type="text"
              style={{ marginLeft: "58px", width: "533px" }}
              id="title"
              {...disable}
            />
          </label>
          <hr />
          <label className="form-label">Statement :</label>
          <textarea
            type="textExamples"
            style={{ marginLeft: "10px", width: "533px" }}
            id="statement"
            {...disable}
          />

          <hr />
          <p style={{ marginBottom: "5px" }}>Set Difficulty :</p>
          <div
            clasName="form-group"
            id="diff"
            onChange={(e) => {
              const buttons = document.querySelectorAll('input[name="diff"]');
              for (var b of buttons) {
                if (b.checked) {
                  setDiff(Number(b.value));
                  break;
                }
              }
            }}
          >
            <div className="form-check">
              <input
                type="radio"
                name="diff"
                className="form-check-input"
                id="formCheck-1"
                value="1"
                {...disable}
              />
              <label className="form-check-label" for="formCheck-1">
                Easy
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                name="diff"
                className="form-check-input"
                id="formCheck-3"
                value="2"
                {...disable}
              />
              <label className="form-check-label" for="formCheck-1">
                Medium
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                name="diff"
                className="form-check-input"
                id="formCheck-2"
                value="3"
                {...disable}
              />
              <label className="form-check-label" for="formCheck-1">
                Hard
              </label>
            </div>
          </div>
          <hr />
          <label className="form-label">
            Set Time Limit:
            <select
              style={{ marginLeft: "12px", width: "46px" }}
              onChange={(e) => {
                setTime(e.target.value);
              }}
              {...disable}
            >
              <optgroup label="Time in Seconds">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </optgroup>
            </select>
          </label>
          <hr />
          <p>Add Examples</p>
          <div id="examplesParent">
            {examples.map((e, i) => {
              return (
                <div className="input-group">
                  <span className="input-group-text">Input</span>
                  <textarea
                    className="form-control"
                    type="text"
                    id={"example-" + i + "-input"}
                    {...disable}
                  />
                  <div className="input-group input-group-text">
                    <span className="input-group-text">Output</span>
                    <textarea
                      className="form-control"
                      type="text"
                      id={"example-" + i + "-output"}
                      {...disable}
                    />
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={(e) => {
                        setExamples([...examples, "hi"]);
                      }}
                      {...disable}
                    >
                      Add
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <hr />
          <p>Add Test Cases</p>
          <div id="testCaseParent">
            {testCases.map((e, i) => {
              return (
                <div className="input-group">
                  <span className="input-group-text">Input</span>
                  <textarea
                    className="form-control"
                    type="text"
                    id={"testCase-" + i + "-input"}
                    {...disable}
                  />
                  <div className="input-group input-group-text">
                    <span className="input-group-text">Output</span>
                    <textarea
                      className="form-control disabled"
                      type="text"
                      id={"testCase-" + i + "-output"}
                      {...disable}
                    />
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={(e) => {
                        setTestCases([...testCases, "hi"]);
                      }}
                      {...disable}
                    >
                      Add
                    </button>
                  </div>
                </div>
              );
            })}
            <hr />
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              onClick={handleSubmit}
              className="btn btn-outline-success"
              id="submitButton"
              {...disable}
            >
              Submit
            </button>
          </div>
          <div className="d-flex justify-content-center">
            <a href="/problemset">
              <button
                type="button"
                className={`btn btn-warning`}
                style={{ marginTop: "10px" }}
              >
                close
              </button>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddAProblem;
