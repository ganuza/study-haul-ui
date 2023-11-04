import { useState } from 'react';
import './Form.css';
import PropTypes from 'prop-types';

function Form({ addUserAnswer }) {
  const [answer, setAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  const submitAnswer = event => {
    event.preventDefault();
    
    if (!answer) {
      setErrorMessage('Please Fill In Your Answer')
    } else {
      setErrorMessage('')
    }
    const newUserAnswer = answer;

    addUserAnswer(newUserAnswer);

    clearForm();
  };

  const clearForm = () => {
    setAnswer('');
  };

  return (
    <form>
      <textarea
        className="answer-input"
        name="user-answer"
        rows={5}
        placeholder="Enter Your Answer"
        value={answer}
        onChange={event => {
          setAnswer(event.target.value)
          setErrorMessage('')
        }}
      />
      {errorMessage && <p>{errorMessage}</p>}
      <button className="filter-btn" onClick={event => submitAnswer(event)}>
        Submit Answer
      </button>
    </form>
  );
}

export default Form;

Form.propTypes = {
  addUserAnswer: PropTypes.func.isRequired,
};
