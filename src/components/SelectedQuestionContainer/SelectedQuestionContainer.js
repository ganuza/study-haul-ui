import './SelectedQuestionContainer.css';
import { getSelectedQuestion } from '../../apiCalls';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SelectedQuestionCard from '../SelectedQuestionCard/SelectedQuestionCard';

function SelectedQuestionContainer() {
  const [selectedQuestion, setSelectedQuestion] = useState({});
  const [selectedQuestionError, setSelectedQuestionError] = useState('');
  const { id } = useParams();
  console.log('useParams', id);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getSelectedQuestion(id);
        console.log('selectedQuestion', selectedQuestion);
        setSelectedQuestion(data);
      } catch (error) {
        setSelectedQuestionError(error);
      }
    }

    fetchData();
  }, [id]);

  return (
    <div>
      {!selectedQuestion ? (
        <p>Loading...</p>
      ) : (
        <SelectedQuestionCard
          topic={selectedQuestion.topic}
          question={selectedQuestion.question}
          answer={selectedQuestion.answer}
        />
      )}
    </div>
  );
}

export default SelectedQuestionContainer;