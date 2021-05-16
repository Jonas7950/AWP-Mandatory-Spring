import {Link} from '@reach/router';
import AddQuestion from "./addQuestion";

function Questions(props) {

  const {data, addQuestion} = props;

  return (
    <>
    <p>Questions go here:</p>
      <ol>
        {
          data.map(question => 
          <li>
            <Link to={`/${question._id}`}>
              {question.title}
            </Link>
          </li>)}
      </ol>
      
    </>
  )
}

export default Questions;