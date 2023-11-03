import './AllQuestionsContainer.css';
import AllQuestionsCard from '../AllQuestionsCard/AllQuestionsCard';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
        question={question.question}
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

AllQuestionsContainer.propTypes = {
  allQuestions: PropTypes.arrayOf(
    PropTypes.shape({
      answer: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      mod_num: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      topic: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
    })
  ),
};
