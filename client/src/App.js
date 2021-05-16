import { Link, Router } from "@reach/router";
import {useEffect, useState} from "react";

import Questions from "./Questions";
import Question from "./Question";
import AddQuestion from "./addQuestion";

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

  function addQuest(title, desc){
    console.log(title, desc);

    const data = { 
      title: title, 
      description: desc,
    
    };
    const postData = async () => {
      //const url = "http://localhost:8081/api/cooking";
      const url = `${API_URL}/`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const reply = await response.json();
      console.log(reply);

    }; 
    postData();
  }
  return (
    <>
    <Link to="/"><h1>Question App!</h1></Link>

    <Router>
      <Questions path="/" data={data} addQuestion={addQuest}></Questions>
      <Question path="/:id" data={data} getQuestion={getQuestion}></Question>
    </Router>
    <AddQuestion path="" addQuestion={addQuest}/>
    </>
  )
}

export default App;
