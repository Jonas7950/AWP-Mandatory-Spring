import { useState } from 'react';

function AddQuestion(props) {
  const { addQuestion } = props;

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <>
      <h3>Ask a Question</h3>

        What's your question? <br/>
      <input onChange={(event) => setTitle(event.target.value)} type="text"/> <br/>
        please describe your question <br/>
      <input onChange={(event) => setDesc(event.target.value)} type="text"/> <br/>

      <button type="button" onClick={(event) => {
        console.log(title + desc);
        //addQuestion(title, desc);
      }}>Ask Question
      </button>
    </>
  );
}

export default AddQuestion;