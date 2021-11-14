import React from "react";
import "./login.css";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form style={{}}>
        <div class="form-group e">
          <label for="Name">Name</label>
          <input
            type="text"
            class="form-control"
            id="Name"
            placeholder="Enter FullName"
          />
        </div>
        <div class="form-group e">
          <label for="Email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="Email"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group e">
          <label for="Pass">Password</label>
          <input
            type="password"
            class="form-control"
            id="Pass"
            placeholder="Password"
          />
        </div>
        <div class="form-group form-check e">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            <em>Terms</em>
          </label>
        </div>
        <button type="submit" class="btn btn-success e">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Signup;
