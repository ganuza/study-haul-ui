import './AllQuestionsContainer.css';
import AllQuestionsCard from '../AllQuestionsCard/AllQuestionsCard';
import { NavLink } from 'react-router-dom';

function AllQuestionsContainer({ questions }) {
  console.log('AQCont quests: ', questions);

  const allQuestionsCards = questions.map(question => {
    return (
      <AllQuestionsCard
        id={question.id}
        key={question.id}
        mod_num={question.mod_num}
        topic={question.topic}
        question={question.question}
        answer={question.answer}
      />
    );
  });

  return (
    <div className="all-questions-container">
      <div className="btn-container">
        <button className="filter-btn">All Questions</button>
        <button className="filter-btn">Mod 2</button>
        <button className="filter-btn">Mod 3</button>
      </div>
      {allQuestionsCards}
    </div>
  );
}

export default AllQuestionsContainer;
