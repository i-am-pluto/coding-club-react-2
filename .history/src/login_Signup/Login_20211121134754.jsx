import React from "react";
import "./login.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form style={{}}>
        <div className="form-group e">
          <label for="Email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="Email"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group e">
          <label for="Pass">Password</label>
          <input
            type="password"
            className="form-control"
            id="Pass"
            placeholder="Password"
          />
        </div>
        <div className="form-group form-check e">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            <em>Terms</em>
          </label>
        </div>
        <button type="submit" className="btn btn-success e container">
          Login
        </button>
        <button class="btn btn-outline-danger contaitner w-100" type="submit">
          <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
        </button>
      </form>
    </div>
  );
}

export default Login;
