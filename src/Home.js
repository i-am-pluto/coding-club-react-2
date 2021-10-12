import React from "react";
import coding from "./assets/img/coding.png";
import problem from "./assets/img/problem.png";
import py from "./assets/img/python-and-flask-free-udemy-course.jpg";
import suc from "./assets/img/success.png";
import Callender from "./Callender";

// var callender = document.getElementById("callender");
// var date = new Date();
// console.log(date.getFullYear());
// [y, m, d] = [date.getFullYear(), date.getMonth(), date.getDate()];
// console.log(1);
// var numOfDays = new Date(y, m + 1, 0).getDate();
// var surplus = new Date(y, m, 1).getDay();
// for (var i = 0; i < surplus; i++)
//   callender.insertAdjacentHTML("beforeend", `<div class=""></div>`);
// for (var i = 1; i <= numOfDays; i++) {
//   if (i == d)
//     callender.insertAdjacentHTML(
//       "beforeend",
//       `<div class="day today btn btn-outline-secondary" id="day${i}">${i}</div>`
//     );
//   else
//     callender.insertAdjacentHTML(
//       "beforeend",
//       `<div class="day btn btn-outline-secondary" id="day${i}">${i}</div>`
//     );
//   callender.insertAdjacentHTML(
//     "beforeend",
//     `<div class="container overlay btn btn-outline-success" id="ov${i}"><h2>Upcoming Contest</h2></div>`
//   );
// }
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

function Home() {
  return (
    <div>
      <div className="container textAlign">
        <div className="row">
          <div
            className="col-md-4"
            style={{
              margin: "0px",
              padding: "0px",
              marginTop: "23px",
              marginBottom: "36px",
            }}
          >
            <div className="flipcard">
              <div className="inner">
                <div className="front">
                  <img
                    className="align-items-center"
                    style={{
                      width: "187px",
                      marginTop: "22px",
                      height: "187px",
                    }}
                    src={coding}
                  />
                  <p style={{ textAlign: "center" }}>
                    <strong>LEARNING</strong>
                  </p>
                </div>
                <div className="back">
                  <div className="card">
                    <img src={py} className="card-img-top" alt="" />
                    <div className="card-body">
                      <h4 className="card-title" style={{ textAlign: "left" }}>
                        Leaning DSA
                      </h4>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <a href="#" className="btn btn-outline-success">
                        Start Learning!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-4"
            style={{
              margin: " 0px",
              padding: " 0px",
              marginTop: " 23px",
              marginBottom: "36px",
            }}
          >
            <div className="flipcard">
              <div className="inner">
                <div className="front">
                  <img
                    className="align-items-center"
                    style={{
                      width: "187px",
                      marginTop: "22px",
                      height: " 187px",
                    }}
                    src={suc}
                  />
                  <p style={{ textAlign: "center" }}>
                    <strong>Host Contests</strong>
                  </p>
                </div>
                <div className="back">
                  <div className="card">
                    <img src={py} className="card-img-top" alt="" />
                    <div className="card-body">
                      <h4 className="card-title" style={{ textAlign: "left" }}>
                        Host Contests
                      </h4>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <a href="#" className="btn btn-outline-success">
                        Host
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-4"
            style={{
              margin: "0px",
              padding: "0px",
              marginTop: "23px",
              marginBottom: "36px",
            }}
          >
            <div className="flipcard">
              <div className="inner">
                <div className="front">
                  <img
                    className="align-items-center"
                    style={{
                      width: "187px",
                      marginTop: "22px",
                      height: "187px",
                    }}
                    src={problem}
                  />
                  <p style={{ textAlign: "center" }}>
                    <strong>Join Contests</strong>
                  </p>
                </div>
                <div className="back">
                  <div className="card">
                    <img src={py} className="card-img-top" alt="" />
                    <div className="card-body">
                      <h4 className="card-title" style={{ textAlign: "left" }}>
                        Join Contests
                      </h4>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <a href="#" className="btn btn-outline-success">
                        Contests
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col-md-6"
            style={{ marginRight: "0px", width: "674px" }}
          >
            <h1 style={{ textAlign: "center" }}></h1>
            <div
              className="alert alert-success"
              role="alert"
              style={{ height: "52px" }}
            >
              <span
                style={{
                  padding: "-33px",
                  margin: "0px",
                  marginBottom: "47px",
                }}
              >
                <strong>Information</strong>
              </span>
            </div>
            <ul>
              <li>
                <a href="#">How to get an account</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
            <div
              className="alert alert-success"
              role="alert"
              style={{ height: "52px" }}
            >
              <span
                style={{
                  marginBottom: "0px",
                  padding: "-1px",
                  height: "-7px",
                }}
              >
                <strong>Blog</strong>
              </span>
            </div>
            <a href="#" style={{ marginLeft: "17px" }}>
              Go to our blog
            </a>
            <p></p>
            <text style={{ fontSize: "16px" }}>
              <strong>Lorem Ipsum </strong>is simply dummy text of the printing
              andtypesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s.
            </text>
          </div>
          <div
            className="col-md-6"
            style={{ marginRight: "0px", width: "500px" }}
          >
            <Callender />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
