import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";

import "ace-builds/src-noconflict/theme-one_dark";
class TextEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: "c_cpp",
    };
  }
  handleChange(event) {
    let t = event.target.value;
    let l;
    switch (t) {
      case "1":
        l = "c_cpp";
        break;
      case "2":
        l = "java";
        break;
      case "3":
        l = "python";
    }
    this.setState({ lang: l });
    // console.log(this.state.lang);
  }

  render() {
    return (
      <div>
        <div>
          <div className="col-md-6">
            <select
              className="btn btn-dark"
              style={{
                width: "100%",
                fontStyle: "italic",
                fontFamily: "Roboto Mono,monospace",
              }}
              onChange={this.handleChange.bind(this)}
            >
              <optgroup label="Select a language of your preferance">
                <option value="1">C++</option>
                <option value="2">Java</option>
                <option value="3">Python</option>
              </optgroup>
            </select>
            <div>
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    role="tab"
                    data-bs-toggle="tab"
                    href="#tab-1"
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
                  >
                    Upload
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" role="tabpanel" id="tab-1">
                  <div id="Editor">
                    <AceEditor
                      mode={this.state.lang}
                      theme="one_dark"
                      name="editor"
                      fontSize={16}
                      editorProps={{ $blockScrolling: true }}
                      showPrintMargin={true}
                      showGutter={true}
                      highlightActiveLine={true}
                      setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                        showLineNumbers: true,
                        tabSize: 4,
                      }}
                      onLoad={(editorInstance) => {
                        editorInstance.container.style.resize = "both";
                        // mouseup = css resize end
                        document.addEventListener("mouseup", (e) =>
                          editorInstance.resize()
                        );
                      }}
                      id="Editor"
                      // height="100px"
                      // width="950px"
                      style={{ marginLeft: "-10px" }}
                      maxLines={Infinity}
                      minLines={15}
                      readOnly={false}
                    ></AceEditor>
                  </div>
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
        </div>
      </div>
    );
  }
}

export default TextEditor;

// export default TextEditor;
