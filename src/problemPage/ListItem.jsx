import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function ListItem({ sno, problemId, name, difficulty, submission }) {
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
  console.log("hi");
  return (
    // <p>hi</p>
    <tr
      style={{ textAlign: "center", color: "black" }}
      className="btn-outline-success"
    >
      <td> {sno}</td>
      <td style={{ textAlign: "left" }}>
        <Link to={"problemset/" + problemId} style={{ color: "black" }}>
          {name}
        </Link>
      </td>
      <td style={{ color: o.color }}>{o.diff}</td>
      <td>{submission}</td>
    </tr>
  );
}

export default ListItem;
