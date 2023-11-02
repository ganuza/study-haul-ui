import './SelectedQuestionContainer.css';
import { getSelectedQuestion } from '../../apiCalls';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SelectedQuestionContainer() {
  const [selectedQuestion, setSelectedQuestion] = useState({});
  const [selectedQuestionError, setSelectedQuestionError] = useState('');
  const { id } = useParams();

  useEffect(() => {
    getSelectedQuestion(id)
      .then(data => setSelectedQuestion(data))
      .catch(error => setSelectedQuestionError());
  }, [id]);

  console.log(selectedQuestion);
  return <p>Hi from Selected Quest Cont</p>;
}

export default SelectedQuestionContainer;
