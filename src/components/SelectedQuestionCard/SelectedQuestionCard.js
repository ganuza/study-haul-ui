import './SelectedQuestionCard.css';

function SelectedQuestionCard({ topic, question }) {
  return (
    <div className="selected-question-card">
      <h2 className="title-topic">Topic: {topic}</h2>
      <h3 className="title-question">{question}</h3>
    </div>
  );
}

export default SelectedQuestionCard;
