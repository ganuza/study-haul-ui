import './SelectedQuestionCard.css';

function SelectedQuestionCard({ topic, question, answer }) {
  return (
    <div className="selected-question-card">
      <h2 className="title-topic">Topic: {topic}</h2>
      <h3 className="title-question">{question}</h3>
      {/* <p className="answer">Answer: {answer}</p> */}
    </div>
  );
}

export default SelectedQuestionCard;
