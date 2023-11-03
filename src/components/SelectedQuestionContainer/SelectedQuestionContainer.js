import './SelectedQuestionContainer.css';
import { getSelectedQuestion } from '../../apiCalls';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import SelectedQuestionCard from '../SelectedQuestionCard/SelectedQuestionCard';

function SelectedQuestionContainer() {
  const [selectedQuestion, setSelectedQuestion] = useState({});
  const [selectedQuestionError, setSelectedQuestionError] = useState('');
  const { id } = useParams();
  console.log(selectedQuestion);
  getSelectedQuestion(id)
    .then(data => setSelectedQuestion(data))
    .catch(error => setSelectedQuestionError());
  return (
    <SelectedQuestionCard
      topic={selectedQuestion.topic}
      question={selectedQuestion.question}
      answer={selectedQuestion.answer}
    />
  );
}

export default SelectedQuestionContainer;
