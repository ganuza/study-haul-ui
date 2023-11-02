import './SelQuestCont.css';
import { getSelQuestion } from '../../apiCalls';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function SelQuestCont() {
  const [selQuestion, setSelQuestion] = useState({});
  const [selQuestError, setSelQuestError] = useState('');
  const { id } = useParams();

  getSelQuestion(id)
    .then(data => console.log(data))
    .catch(error => setSelQuestError());
  return <p>Hi from SelQuestCont</p>;
}

export default SelQuestCont;
