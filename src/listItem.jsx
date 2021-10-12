import { color, textAlign } from "@mui/system";
import React from "react";

function listItem({ sno, name, difficulty, submission }) {
  return (
    <div style={(textAlign = "center")}>
      <td> {sno}</td>
      <td> {name}</td>
      <td>{difficulty}</td>
      <td>{submission}</td>
    </div>
  );
}

export default listItem;
