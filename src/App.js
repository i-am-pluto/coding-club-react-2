import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./Header";
import Blog from "./Blog/Blog";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/fonts/font-awesome.min.css";
import "./assets/fonts/ionicons.min.css";
import "./assets/css/Footer-Basic.css";
import "./assets/css/Footer-Clean.css";
import "./assets/css/Simple-Slider.css";
import "./assets/css/Social-Icons.css";
import "./assets/css/Navigation-with-Search.css";
import "./assets/css/styles.css";
import Home from "./Home/Home";
import Footer from "./Footer";
import ProblemSet from "./ProblemList/ProblemSet";
import Problem from "./problemPage/Problem";
import BlogHome from "./Blog/BlogHome";
import AddAProblem from "./ProblemList/AddAProblem";
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
          <Route exact path="/problemset">
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
          <Route exact path="/coderhub">
            <Header active={0} />
            <BlogHome />
            <Footer />
          </Route>
          <Route path="/problemset/:problemId">
            <Header active={0} />
            <Problem />
            <Footer />
          </Route>
          <Route path="/addaproblem">
            <Header active={0} />
            <AddAProblem />
            <Footer />
          </Route>
          <Route path="/coderHub/:blogId">
            <Header active={0} />
            <Blog />
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
