import React, { Component } from "react";
import ReactDOMServer from "react-dom/server";
class Callender extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "none",
    };
  }

  on() {
    this.setState({
      display: "block",
    });
  }
  off() {
    this.setState({
      display: "none",
    });
  }
  generateCallender() {
    var date = new Date();
    const [y, m, d] = [date.getFullYear(), date.getMonth(), date.getDate()];
    var numOfDays = new Date(y, m + 1, 0).getDate();
    var surplus = new Date(y, m, 1).getDay();
    var callender_elements = new Array();
    var c = 0;
    for (var i = 0; i < surplus; i++)
      callender_elements.push(<div className="" key={`${c++}`}></div>);
    for (var i = 1; i <= numOfDays; i++) {
      if (i == d)// `dic ${i}` "dic"+" i"
        callender_elements.push(
          <div
            className="day today btn btn-outline-secondary"
            id={`day${i}`}
            key={`${c++}`}
            onClick={this.on.bind(this)}
          >
            {i}
          </div>
        );
      else
        callender_elements.push(
          <div
            className="day btn btn-outline-secondary"
            id={`day${i}`}
            key={`${c++}`}
            onClick={this.on.bind(this)}
          >
            {i}
          </div>
        );
      callender_elements.push(
        <div
          className="container overlay btn btn-outline-success"
          key={`${c++}`}
          id={`ov${i}`}
          style={{ display: this.state.display }}
          onClick={this.off.bind(this)}
        >
          <h2>Upcoming Contest</h2>
          <li className="list"></li>
        </div>
      );
    }
    // var buts = document.getElementsByClassName("day");
    // for (var i = 0; i < buts.length; i++) {
    //   buts[i].addEventListener("click", function () {
    //     var temp = "ov" + this.id.slice(3);
    //     document.getElementById(temp).style.display = "block";
    //   });
    // }
    // var ovs = document.getElementsByClassName("overlay");
    // for (var i = 0; i < ovs.length; i++) {
    //   ovs[i].addEventListener("click", function () {
    //     this.style.display = "none";
    //   });
    // }
    // console.log(callender_elements);
    return callender_elements;
  }

  render() {
    return (
      <div>
        <div className="col-md-6" style={{ width: "465px" }}>
          <h1 style={{ "text-align": "center" }}>
            <strong>Updates</strong>
          </h1>
          {/* <!-- <div className="container"> --> */}
          <div id="callender">
            <div className="weekday btn">Sun</div>
            <div className="weekday btn">Mon</div>
            <div className="weekday btn">Tue</div>
            <div className="weekday btn ">Wed</div>
            <div className="weekday btn ">Thu</div>
            <div className="weekday btn ">Fri</div>
            <div className="weekday btn ">Sat</div>
            {this.generateCallender()}
            {/* {console.log(this.generateCallender())} */}
          </div>

          {/* <!-- </div> --> */}
        </div>
      </div>
    );
  }
}

export default Callender;