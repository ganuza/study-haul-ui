import './SelectedQuestionContainer.css';
import { getSelectedQuestion } from '../../apiCalls';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function SelectedQuestionContainer() {
  const [selectedQuestion, setSelectedQuestion] = useState({});
  const [selectedQuestionError, setSelectedQuestionError] = useState('');
  const { id } = useParams();

  getSelectedQuestion(id)
    .then(data => console.log(data))
    .catch(error => setSelectedQuestionError());
  return <p>Hi from Selected Quest Cont</p>;
}

export default SelectedQuestionContainer;
