<div>
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
              <ControlledEditor
                onBeforeChange={this.handleChange2.bind}
                value={"value"}
                className="code-mirror-wrapper"
                options={{
                  lineWrapping: true,
                  lint: true,
                  mode: this.state.lang,
                  theme: "material",
                  lineNumbers: true,
                }}
              />
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
</div>;
