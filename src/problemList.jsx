import React, { Component } from "react";
import sortButton from "./assets/img/sort-arrows-couple-pointing-up-and-down.png";
import ListItem from "./ListItem";
import "./problemList.css";
class ProblemList extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.state = {
      listObject: this.props.problems,
    };
  }

  isArrayIsSorted(arr, a) {
    if (a == 1) {
      for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i].sno > arr[i + 1].sno) {
          return false;
        }
      }
      return true;
    } else if (a == 2) {
      //problems
      for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i].name.toLowerCase() > arr[i + 1].name.toLowerCase()) {
          return false;
        }
      }
      return true;
    } else if (a == 3) {
      //diff
      for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i].diff > arr[i + 1].diff) {
          return false;
        }
      }
      return true;
    } else {
      //submission
      for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i].submission > arr[i + 1].submission) {
          return false;
        }
      }
      return true;
    }
  }
  fixSno() {
    let newState = [...this.state.listObject];

    if (this.isArrayIsSorted(this.state.listObject, 1)) {
      newState.reverse();
    } else {
      newState.sort(function (a, b) {
        return a.sno - b.sno;
      });
    }
    this.setState({
      listObject: newState,
    });
  }
  fixProblems() {
    let newState = [...this.state.listObject];
    if (this.isArrayIsSorted(this.state.listObject, 2)) {
      newState.reverse();
    } else
      newState.sort(function (a, b) {
        var temp = a.name.toLowerCase() > b.name.toLowerCase();
        return temp ? 1 : -1;
      });
    this.setState({
      listObject: newState,
    });
  }
  fixDiff() {
    let newState = [...this.state.listObject];
    if (this.isArrayIsSorted(this.state.listObject, 3)) {
      newState.reverse();
    } else
      newState.sort(function (a, b) {
        var temp = a.diff > b.diff;
        return temp ? 1 : -1;
      });
    this.setState({
      listObject: newState,
    });
  }
  fixSub() {
    let newState = [...this.state.listObject];
    if (this.isArrayIsSorted(this.state.listObject, 4)) {
      newState.reverse();
    } else
      newState.sort(function (a, b) {
        return a.submission - b.submission;
      });
    this.setState({
      listObject: newState,
    });
    // this.listRef.current.
  }

  generateList() {
    // var x = <ListItem />;
    // console.log(x);
    let problems = new Array();
    for (var i = 0; i < this.state.listObject.length; i++) {
      var t = (
        <ListItem
          sno={this.state.listObject[i].sno}
          name={this.state.listObject[i].name}
          difficulty={this.state.listObject[i].diff}
          submission={this.state.listObject[i].submission}
          key={i}
        />
      );
      problems.push(t);
    }
    // console.log(problems);
    return <tbody ref={this.listRef}>{problems}</tbody>;
    // <listItem/>
    // <listItem/>
    // <listItem/>
    // <listItem/>
  }
  render() {
    return (
      <div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: "15%", textAlign: "center" }}>
                  S.no.
                  <button
                    id="sno"
                    className="btn"
                    style={{
                      backgroundColor: "transparent",
                      border: "transparent",
                    }}
                    onClick={this.fixSno.bind(this)}
                  >
                    <img
                      src={sortButton}
                      style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: "transparent",
                      }}
                    />
                  </button>
                </th>
                <th>
                  Problem &nbsp;
                  <button
                    id="prob"
                    className="btn"
                    style={{
                      backgroundColor: "transparent",
                      border: "transparent",
                    }}
                    onClick={this.fixProblems.bind(this)}
                  >
                    <img
                      src={sortButton}
                      style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: "transparent",
                      }}
                    />
                  </button>
                </th>
                <th style={{ width: "150px", textAlign: "center" }}>
                  Difficulty
                  <button
                    id="dif"
                    className="btn"
                    style={{
                      backgroundColor: "transparent",
                      border: "transparent",
                    }}
                    onClick={this.fixDiff.bind(this)}
                  >
                    <img
                      src={sortButton}
                      style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: "transparent",
                      }}
                    />
                  </button>
                </th>
                <th style={{ width: "160px", textAlign: "center" }}>
                  Submissions
                  <button
                    id="sub"
                    className="btn"
                    style={{
                      backgroundColor: "transparent",
                      border: "transparent",
                    }}
                    onClick={this.fixSub.bind(this)}
                  >
                    <img
                      src={sortButton}
                      style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: "transparent",
                      }}
                    />
                  </button>
                </th>
              </tr>
            </thead>
            {this.generateList()}
          </table>
        </div>
      </div>
    );
  }
}

export default ProblemList;
