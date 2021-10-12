import React from "react";

function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-light navbar-expand-md navigation-clean-search"
        style={{ background: "rgb(209,231,221)", color: "rgb(42,81,50)" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
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
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="problemset">
                  Problem Set
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
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
            >
              Sign/up
            </button>
            <a className="btn btn-light action-button" role="button" href="#">
              login
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
