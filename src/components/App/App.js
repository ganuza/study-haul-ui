import { Routes, Route } from 'react-router-dom';
import { questions } from '../../data/data.js';
import { getAllQuestions } from '../../apiCalls';
import './App.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import AllQuestionsContainer from '../AllQuestionsContainer/AllQuestionsContainer';
import Footer from '../Footer/Footer';
import SelQuestCont from '../SelQuestCont/SelQuestCont';
import ErrorComponent from '../ErrorComponent/ErrorComponent';

function App() {
  console.log('App dumsdata: ', questions);
  const [allQuestions, setAllQuestions] = useState([]);

  // useEffect(() => {
  //   getAllQuestions()
  //   .then(data => console.log('App data: ', data))
  // }, [])
  return (
    <div className="App">
      <Header className="header" />
      <Routes>
        <Route
          path="/"
          element={
            <AllQuestionsContainer
              className="all-questions-container"
              questions={questions}
            />
          }
        />
        <Route path="/questions/:id" element={<SelQuestCont />} />
        <Route path="*" element={<ErrorComponent />} />
      </Routes>

      <Footer className="footer" />
    </div>
  );
}

export default App;
