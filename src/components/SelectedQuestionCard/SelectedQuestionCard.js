import './SelectedQuestionCard.css';

function SelectedQuestionCard({ topic, question, answer }) {
  return (
    <div>
      <h2>{topic}</h2>
      <p>{question}</p>
      <p>{answer}</p>
    </div>
  );
}

export default SelectedQuestionCard;
