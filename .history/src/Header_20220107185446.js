import React from "react";
import Login from "./login_Signup/Login";
import Signup from "./login_Signup/signup";
import "./Header.css";
import { useState } from "react";
function Header({ active }) {
  let home = "nav-link";
  let problemset = "nav-link";
  let profile = "nav-link";
  if (active == 1) home += " active";
  else if (active == 2) problemset += " active";
  else if (active == 3) profile += " active";

  let [displayL, setDisplayL] = useState("none");
  let [displayS, setDisplayS] = useState("none");

  function onLogin(e) {
    e.preventDefault();
    // console.log("something");
    if (displayL === "none") {
      // console.log("sometihne2321");
      setDisplayL("block");
    } else setDisplayL("none");
  }

  function onSignup(e) {
    e.preventDefault();
    // console.log("something");
    if (displayL === "none") {
      // console.log("sometihne2321");
      setDisplayS("block");
    } else setDisplayS("none");
  }

  return (
    <div>
      <nav
        className="container-fluid navbar navbar-light navbar-expand-md navigation-clean-search"
        style={{
          background: "rgb(209,231,221)",
          color: "rgb(42,81,50)",
          width: "100%",
        }}
      >
        <div className="container">
          <a
            className="navbar-brand"
            href="https://www.youtube.com/watch?v=BT9h5ifR1tY"
          >
            Coding Club
          </a>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-1"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={home} href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={problemset} href="/problemset">
                  Problem Set
                </a>
              </li>
              <li className="nav-item">
                <a className={profile} href="/">
                  Profile
                </a>
              </li>
            </ul>
            <form className="me-auto search-form" target="_self">
              <div
                className="d-flex align-items-center"
                style={{ "margin-left": "241px" }}
              >
                <label
                  className="form-label
d-flex mb-0"
                  for="search-field"
                ></label>
              </div>
            </form>
            <button
              className="btn btn-primary"
              type="button"
              style={{
                "border-radius": " 20px",
                "border-width": "0px",
                width: "77.6219px",
                height: "40px",
                padding: "6px 15px",
                "font-size": "12px",
                "text-align": "center",
                background: "rgb(149,149,149)",
                margin: "0px",
                "margin-right": "6px",
              }}
              onClick={onSignup}
            >
              Sign up
            </button>
            <button className="btn btn-light action-button" onClick={onLogin}>
              login
            </button>
          </div>
        </div>
      </nav>
      <div className="o" style={{ display: displayL }}>
        <div className="bigBox">
          <div className="box" style={{ border: "10px solid darkgreen" }}>
            <h2 className="navbar-brand">Coding Club</h2>
            <hr
              style={{
                marginLeft: "-20px",
                marginRight: "-20px",
                backgroundColor: "black",
                height: "3px",
              }}
            />
            <br />
            <Login />
          </div>
        </div>
        {/* <p>Hello</p> */}
      </div>
      <div className="o" style={{ display: displayS }}>
        {/* <signup /> */}

        <div className="bigBox">
          <div className="box" style={{ border: "10px solid darkgreen" }}>
            <h2 className="navbar-brand">Coding Club</h2>

            <hr
              style={{
                marginLeft: "-20px",
                marginRight: "-20px",
                backgroundColor: "black",
                height: "3px",
              }}
            />

            <br />
            <Signup />
            <button className="btn btn-outline-danger" style={{ marginLeft: "-12px",marginTop }}>close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
