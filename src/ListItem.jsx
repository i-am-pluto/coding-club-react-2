import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { browserHistory, Redirect, useParams } from "react-router";
import React from "react";
import Header from "./Header";
import ProblemSet from "./ProblemSet";
import Footer from "./Footer";
import Home from "./Home";

function ListItem({ sno, name, difficulty, submission }) {
  var o;
  if (difficulty == 1) {
    o = {
      color: "green",
      diff: "Easy",
    };
  } else if (difficulty == 2) {
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
  // console.log(escape(name));
  let d = String(name);
  // let { id } = useParams();
  return (
    // <p>hi</p>
    <tr
      style={{ textAlign: "center", color: "black" }}
      className="btn-outline-success"
    >
      <td> {sno}</td>
      <td style={{ textAlign: "left" }}>
        <Link to={"000" + sno} style={{ color: "black" }}>
          {name}
        </Link>
      </td>
      <td style={{ color: o.color }}>{o.diff}</td>
      <td>{submission}</td>
    </tr>
  );
}
// http://localhost:3000/problemset/The%20Skyline%20Problem
export default ListItem;
// http://localhost:3000/problemset/problemset/problemset/problemset/3sum
// http://localhost:3000/problemset/The%20Skyline%20Problem
