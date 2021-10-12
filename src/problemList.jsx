import React, { Component } from "react";
import sortButton from "./assets/img/sort-arrows-couple-pointing-up-and-down.png";
import listItem from "./listItem";
class ProblemList extends React.Component {
    // generateList() {
    //   <listItem sno="1" name="game" difficulty="easy" submission="2" />;
    //   // <listItem/>
    //   // <listItem/>
    //   // <listItem/>
    //   // <listItem/>
    // }
  render() {
    return (
      <div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: "99px", textAlign: "center" }}>
                  S.no.{" "}
                  <button
                    id="sno"
                    className="btn"
                    style={{
                      backgroundColor: "transparent",
                      border: "transparent",
                    }}
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
                  Difficulty{" "}
                  <button
                    id="dif"
                    className="btn"
                    style={{
                      backgroundColor: "transparent",
                      border: "transparent",
                    }}
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
                  Submissions{" "}
                  <button
                    id="sub"
                    className="btn"
                    style={{
                      backgroundColor: "transparent",
                      border: "transparent",
                    }}
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
            {/* <tbody>{this.generateList()}</tbody> */}
          </table>
        </div>
      </div>
    );
  }
}

export default ProblemList;
