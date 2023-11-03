import './SelectedQuestionContainer.css';
import { getSelectedQuestion } from '../../apiCalls';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SelectedQuestionCard from '../SelectedQuestionCard/SelectedQuestionCard';
import Form from '../Form/Form';

function SelectedQuestionContainer() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedQuestionError, setSelectedQuestionError] = useState('');
  const [userInput, setUserInput] = useState('')
  const { id } = useParams();
  console.log('useParams', id);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getSelectedQuestion(id);
        setSelectedQuestion(data);
      } catch (error) {
        setSelectedQuestionError(error);
      }
    }

    fetchData();
  }, [id]);

  const addUserAnswer = (userAnswer) => {
    setUserInput(userAnswer)
  }

  return (
    <div className='whole-card-cont'>
      {!selectedQuestion ? (
        <p>Loading...</p>
      ) : (<div className='card-and-form'>
        <SelectedQuestionCard
          topic={selectedQuestion.topic}
          question={selectedQuestion.question}
        />

        <Form addUserAnswer={addUserAnswer}/>
        {!userInput ? <p>'Answer Field Must Be Filled Out'</p> : (<div className='answers-cont'><h2>Your Answer: {userInput}</h2><h2>Correct Answer: {selectedQuestion.answer}</h2></div>)}
        </div>
      )}
    </div>
  );
}

export default SelectedQuestionContainer;