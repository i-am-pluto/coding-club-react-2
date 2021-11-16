import React from "react";
import "./login.css";
import { useState } from "react";

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
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            <em>Terms</em>
          </label>
        </div>
        <button type="submit" className="btn btn-success e">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
