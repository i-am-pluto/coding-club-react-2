import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/hostcontest"></Route>
          <Route path="/joincontest"></Route>
          <Route path="/learning"></Route>
          <Route path="/blog"></Route>
          <Route path="/problemset">
            <ProblemSet />
          </Route>
          <Route path="/profile"></Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* footer */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
