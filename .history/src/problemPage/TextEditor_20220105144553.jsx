import React, { useState } from "react";
import AceEditor from "react-ace";
import "codemirror/lib/codemirror.css";
import "./TextEditor.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/clike/clike";
import "codemirror/keymap/sublime";
import "codemirror/addon/comment/comment";
import "codemirror/mode/python/python";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { useHistory } from "react-router";

function TextEditor({ QuestionId }) {
  let [value, setValue] = useState("// hello");
  let [lang, setLang] = useState("text/x-csrc");

  let flag = false;

  let [res, setRes] = useState({ disabled: "..." });
  let [sub, setSub] = useState("");

  let sid = Math.random().toString(16).slice(2);
  const history = useHistory();
  function setlang(e) {
    switch (e.target.value) {
      case "1":
        //cpp
        setLang("text/x-csrc");
        break;

      case "2":
        //java
        setLang("text/x-java");
        break;

      case "3":
        setLang("python");

      default:
        break;
    }
  }

  function clearEditor() {
    setValue("");
  }

  function handleSubmit(e) {
    flag = true;
    e.preventDefault();
    setSub(res);
    setRes("");
    let l;
    switch (lang) {
      case "text/x-csrc":
        l = "cpp";
        break;

      case "text/x-java":
        l = "java";
        break;

      case "python":
        l = "python";
        break;
    }

    const submission = {
      submissionId: sid,
      problemId: QuestionId,
      language: l,
      code: value,
      userId: null,
    };
    console.log(JSON.stringify(submission));
    fetch(`http://localhost:8080/${QuestionId}/submission`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submission),
    }).then((Response) => {
      console.log(Response.statusText);
    });
  }

  function viewResult() {
    history.push({
      pathname: "/submission/" + sid,
    });
  }

  return (
    <div>
      <select
        className="btn btn-dark"
        style={{
          width: "100%",
          fontStyle: "italic",
          fontFamily: "Roboto Mono,monospace",
        }}
        onChange={setlang}
      >
        <optgroup label="Select a language of your preferance">
          <option value="1">C++</option>
          <option value="2">Java</option>
          <option value="3">Python</option>
        </optgroup>
      </select>
      <div id="Panel">
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              role="tab"
              data-bs-toggle="tab"
              href="#tab-1"
              style={{ color: "black" }}
            >
              Code
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              role="tab"
              data-bs-toggle="tab"
              href="#tab-2"
              style={{ color: "black" }}
            >
              Upload
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane active" role="tabpanel" id="tab-1">
            <form onSubmit={handleSubmit}>
              <div id="Editor">
                <ControlledEditor
                  onBeforeChange={(editor, data, value) => {
                    setValue(value);
                  }}
                  value={value}
                  className="code-mirror-wrapper"
                  options={{
                    lineWrapping: true,
                    lint: true,
                    mode: lang,
                    theme: "material",
                    keyMap: "sublime",
                    lineNumbers: true,
                    tabSize: 4,
                    autoCloseBrackets: true,
                    styleActiveLine: true,
                    matchBrackets: true,
                  }}
                  id="editor"
                />
                <div id="overlay" style={{display:""}}></div>
                <hr />
                <input
                  className="btn btn-outline-primary"
                  value="submit"
                  type="submit"
                  {...sub}
                />
                <button
                  type="button"
                  className="btn btn-outline-warning"
                  style={{ marginLeft: "10px" }}
                  onClick={clearEditor}
                  {...sub}
                >
                  Clear
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  style={{ marginLeft: "10px" }}
                  onClick={viewResult}
                  {...res}
                >
                  View Result
                </button>
              </div>
            </form>
          </div>
          <div className="tab-pane" role="tabpanel" id="tab-2">
            <input
              type="file"
              name="Code"
              id="codeFile"
              className="btn btn-outline-success"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextEditor;

// export default TextEditor;
