import './AllQuestionsCard.css';
import PropTypes from 'prop-types';

function AllQuestionsCard({ question }) {

  return (
    <div className="all-questions-card">
      <h2>{question}</h2>
    </div>
  );
}

export default AllQuestionsCard;

AllQuestionsCard.propTypes = {
  question: PropTypes.string.isRequired,
};