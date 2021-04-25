function Question(props) {

  const { id, getQuestion } = props;
  const question = getQuestion(id);

  if (question === undefined)
  {
    return <p>nothin' here boss</p>
  } 
  else return (
    <>
      <h3>{question.title}</h3>
      <p>
        {question.description} <br/>
        <h2>Answers:</h2> <br/>

        {question.answers.map(answer => 
          <li>
              {answer.answer}   
              {answer.rating}        
          </li>)}
          
      </p>
    </>
  );
}

export default Question;
