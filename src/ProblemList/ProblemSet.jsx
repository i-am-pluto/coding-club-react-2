import React, { Component } from "react";
import ProblemList from "./problemList";
import ProblemSetHeader2 from "./ProblemSetHeader2";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../Header";
import Problem from "../problemPage/Problem";
import { useHistory, HashRouter } from "react-router-dom";
import problemData from "./problemData";

function ProblemSet() {
  const problems = problemData;
  return (
    <div>
      <div>
        <Header active={2} />
        <div>
          <div className="container">
            <ProblemSetHeader2 />
            <ProblemList problems={problems} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemSet;
