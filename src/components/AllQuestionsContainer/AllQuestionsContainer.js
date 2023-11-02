import './AllQuestionsContainer.css';
import AllQuestionsCard from '../AllQuestionsCard/AllQuestionsCard';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function AllQuestionsContainer({ allQuestions }) {
  const [selectedMod, setSelectedMod] = useState(null);

  const filterQuestions = (mod) => {
    setSelectedMod(mod);
  };

  const clearFilter = () => {
    setSelectedMod(null);
  };

  const filteredQuestions = selectedMod
    ? allQuestions.filter((question) => question.mod_num === selectedMod)
    : allQuestions;

  const allQuestionsCards = filteredQuestions.map((question) => (
    <Link to={`/questions/${question.id}`} key={question.id}>
      <AllQuestionsCard
        id={question.id}
        mod_num={question.mod_num}
        topic={question.topic}
        question={question.question}
        answer={question.answer}
      />
    </Link>
  ));

  return (
    <div className="all-questions-container">
      <div className="btn-container">
        <button className="filter-btn" onClick={clearFilter}>
          All Questions
        </button>
        <button className="filter-btn" onClick={() => filterQuestions(2)}>
          Mod 2
        </button>
        <button className="filter-btn" onClick={() => filterQuestions(3)}>
          Mod 3
        </button>
      </div>
      {allQuestionsCards}
    </div>
  );
}

export default AllQuestionsContainer;
