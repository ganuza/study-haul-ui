import { getSelectedQuestion } from '../../apiCalls';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SelectedQuestionCard from '../SelectedQuestionCard/SelectedQuestionCard';
import Form from '../Form/Form';
import ErrorComponent from '../ErrorComponent/ErrorComponent';

function SelectedQuestionContainer() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedQuestionError, setSelectedQuestionError] = useState('');
  const [userInput, setUserInput] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getSelectedQuestion(id);
        setSelectedQuestion(data);
      } catch (error) {
        setSelectedQuestionError(error.message);
      }
    }

    fetchData();
  }, [id]);

  const addUserAnswer = (userAnswer) => {
    setUserInput(userAnswer);
    setFormSubmitted(true);
  };

  return (
    <div className="whole-card-cont">
      {selectedQuestionError ? (
        <ErrorComponent
          error={selectedQuestionError}
          message="We're sorry, we can't find the requested page.  Please hit the 'Home' button above."
        />
      ) : !selectedQuestion ? (
        <p>Loading...</p>
      ) : (
        <div className="card-and-form">
          <SelectedQuestionCard
            topic={selectedQuestion.topic}
            question={selectedQuestion.question}
          />

          <Form addUserAnswer={addUserAnswer} />

          {formSubmitted && userInput !== '' ? (
            <div className="answers-cont">
              <h2>Your Answer: {userInput}</h2>
              <h2>Correct Answer: {selectedQuestion.answer}</h2>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default SelectedQuestionContainer;