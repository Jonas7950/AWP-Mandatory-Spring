import { Link, Router } from "@reach/router";
import {useEffect, useState} from "react";

import Questions from "./Questions";
import Question from "./Question";
import addQuestion from "./addQuestion";

const API_URL = process.env.REACT_APP_API;

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }
    getData();
  }, []); 

  function getQuestion(id){
    return data.find(question => question._id === id);
  }

  return (
    <>
    <Link to="/"><h1>Question App!</h1></Link>

    <Router>
      <Questions path="/" data={data} addQuestion={addQuestion}></Questions>
      <Question path="/:id" data={data} getQuestion={getQuestion}></Question>
    </Router>
    </>
  )
}

export default App;
