import './AllQuestionsContainer.css';
import AllQuestionsCard from '../AllQuestionsCard/AllQuestionsCard';

function AllQuestionsContainer({questions}) {

  console.log('AQCont quests: ', questions)

  const allQuestionsCards = questions.map((question) => {
    return <AllQuestionsCard
      id={question.id}
      key={question.id}
      mod_num={question.mod_num}
      topic={question.topic}
      question={question.question}
      answer={question.answer}
    />
  })

  return (
    <div className="all-questions-container">
      {allQuestionsCards}
      <AllQuestionsCard />
    </div>
  );
}

export default AllQuestionsContainer;
