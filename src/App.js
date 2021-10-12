import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./Header";
import "./assets/bootstrap/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./assets/fonts/font-awesome.min.css";
import "./assets/fonts/ionicons.min.css";
import "./assets/css/Footer-Basic.css";
import "./assets/css/Footer-Clean.css";
import "./assets/css/Simple-Slider.css";
import "./assets/css/Social-Icons.css";
import "./assets/css/Navigation-with-Search.css";
import "./assets/css/styles.css";
import Home from "./Home";
import Footer from "./Footer";
import ProblemSet from "./ProblemSet";
function App() {
  return (
    // <h1>Hi</h1>
    <Router>
      <div className="App">
        {/* <Header active={1} /> */}
        <Switch>
          <Route exact path="/hostcontest"></Route>
          <Route exact path="/joincontest"></Route>
          <Route exact path="/learning"></Route>
          <Route exact path="/blog"></Route>
          <Route exact path="/problemset">
            <Header active={2} />
            <ProblemSet />
            <Footer />
          </Route>
          <Route exact path="/profile">
            <Header active={3} />
            <Footer />
          </Route>
          <Route exact path="/home">
            <Header active={1} />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
