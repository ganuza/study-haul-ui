import { Routes, Route } from 'react-router-dom';
import { questions } from '../../data/data.js';
import { getAllQuestions, getSelQuestion } from '../../apiCalls';
import './App.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import AllQuestionsContainer from '../AllQuestionsContainer/AllQuestionsContainer';
import SelectedQuestionContainer from '../SelectedQuestionContainer/SelectedQuestionContainer.js';
import ErrorComponent from '../ErrorComponent/ErrorComponent';

function App() {
  console.log('App dumsdata: ', questions);

  const [allQuestions, setAllQuestions] = useState([]);
  const [error, setError] = useState('');

  console.log('allQuestions: ', allQuestions);

  useEffect(() => {
    getAllQuestions()
      .then((data) => setAllQuestions(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="App">
      <Header className="header" />

      {error ? (
        <div className="app-error-cont">
          <ErrorComponent
            error={error}
            message="We're sorry, we can't find the requested page.  Please try again."
          />
        </div>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <AllQuestionsContainer
                className="all-questions-container"
                allQuestions={allQuestions}
              />
            }
          />
          <Route
            path="/questions/:id"
            element={<SelectedQuestionContainer />}
          />
          <Route
            path="*"
            element={
              <ErrorComponent
                error={error}
                message="We're sorry, we can't find the requested page.  Please hit the 'Home' button above."
              />
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
