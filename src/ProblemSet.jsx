import React, { Component } from "react";
import ProblemList from "./problemList";
import ProblemSetHeader2 from "./ProblemSetHeader2";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Problem from "./Problem";

class ProblemSet extends React.Component {
  render() {
    let problems = new Array();

    var object1 = {
      sno: 1,
      name: "virus",
      diff: 1,
      submission: 20,
      statement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet qui ea, tempora quo voluptate dignissimos est reprehenderit porro fugit sit. Doloribus velit delectus fugiat aliquam id earum a mollitia. Aliquam.",
      example: [
        { input: "[2,3,5,1,23,4,5,2]", output: "POSSIBLE" },
        { input: "[2,3,5,1,23,4,5,2]", output: "POSSIBLE" }
      ],
    };
    var object2 = {
      sno: 2,
      name: "JumpGame",
      diff: 1,
      submission: 50,
      statement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet qui ea, tempora quo voluptate dignissimos est reprehenderit porro fugit sit. Doloribus velit delectus fugiat aliquam id earum a mollitia. Aliquam.",
      example: [
        { input: "[2,3,5,1,23,4,5,2]", output: "POSSIBLE" },
        { input: "[2,3,5,1,23,4,5,2]", output: "POSSIBLE" }
      ],
    };
    var object3 = {
      sno: 3,
      name: "skyscrapers",
      diff: 2,
      submission: 70,
      statement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet qui ea, tempora quo voluptate dignissimos est reprehenderit porro fugit sit. Doloribus velit delectus fugiat aliquam id earum a mollitia. Aliquam.",
      example: [
        { input: "[2,3,5,1,23,4,5,2]", output: "POSSIBLE" },
        { input: "[2,3,5,1,23,4,5,2]", output: "POSSIBLE" }
      ],
    };
    var object4 = {
      sno: 4,
      name: "stone game",
      diff: 3,
      submission: 25,
      statement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet qui ea, tempora quo voluptate dignissimos est reprehenderit porro fugit sit. Doloribus velit delectus fugiat aliquam id earum a mollitia. Aliquam.",
      example: [
        { input: "[2,3,5,1,23,4,5,2]", output: "POSSIBLE" },
        { input: "[2,3,5,1,23,4,5,2]", output: "POSSIBLE" }
      ],
    };
    var object5 = {
      sno: 5,
      name: "3sum",
      diff: 3,
      submission: 56,
      statement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet qui ea, tempora quo voluptate dignissimos est reprehenderit porro fugit sit. Doloribus velit delectus fugiat aliquam id earum a mollitia. Aliquam.",
      example: [
        { input: "[2,3,5,1,23,4,5,2]", output: "POSSIBLE" },
        { input: "[2,3,5,1,23,4,5,2]", output: "POSSIBLE" }
      ],
    };
    var object6 = {
      sno: 6,
      name: "The skyline problem",
      diff: 1,
      submission: 72,
      statement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet qui ea, tempora quo voluptate dignissimos est reprehenderit porro fugit sit. Doloribus velit delectus fugiat aliquam id earum a mollitia. Aliquam.",
      example: [
        { input: "[2,3,5,1,23,4,5,2]", output: "POSSIBLE" },
        { input: "[2,3,5,1,23,4,5,2]", output: "POSSIBLE" }
      ],
    };
    var object7 = {
      sno: 7,
      name: "2sum",
      diff: 2,
      submission: 37,
      statement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet qui ea, tempora quo voluptate dignissimos est reprehenderit porro fugit sit. Doloribus velit delectus fugiat aliquam id earum a mollitia. Aliquam.",
      example: [
        { input: "[2,3,5,1,23,4,5,2]", output: "POSSIBLE" },
        { input: "[2,3,5,1,23,4,5,2]", output: "POSSIBLE" }
      ],
    };

    problems.push(object1);
    problems.push(object2);
    problems.push(object3);
    problems.push(object4);
    problems.push(object5);
    problems.push(object6);
    problems.push(object7);
    let route = new Array();

    for (var i = 0; i < problems.length; i++) {
      let t = (
        <Route exact path={"/000" + problems[i].sno} key={i}>
          {/* <Header active={0} /> */}
          <Problem
            sno={problems[i].sno}
            name={problems[i].name}
            statement={problems[i].statement}
            examples={problems[i].example}
            submission={problems[i].submission}
            diff={problems[i].diff}
          />
        </Route>
      );
      route.push(t);
      // console.log(route);
    }
    return (
      <Router>
        <Switch>
          {route}
          <Route exact path="/problemset">
            {/* <Header /> */}
            <div>
              <div className="container">
                <ProblemSetHeader2 />
                <ProblemList problems={problems} />
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default ProblemSet;
