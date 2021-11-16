import ProblemList from "./problemList";
import ProblemSetHeader2 from "./ProblemSetHeader2";
import Header from "../Header";
import "./ProblemSet.css";
import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
function ProblemSet() {
  const [problem, setProblem] = useState(null);
  useEffect(() => {
    let request = new Request(`http://localhost:8080/problemset`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetch(request)
      .then((Response) => {
        return Response.json();
      })
      .then(setProblem);
  }, []);

  function problemState() {
    if (problem === null) {
      return <Loading />;
    } else return <ProblemList problems={problem} />;
  }
  console.log(problem);
  return (
    <div>
      <div>
        <Header active={2} />
        <div>
          <div className="container">
            <ProblemSetHeader2 />
            {/* <ProblemList problems={problem} /> */}
            {problemState()}
            <a href="/addaproblem" className="floating">
              <i class="fa fa-plus my-float"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemSet;
