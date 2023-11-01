import { getAllQuestions } from '../../apiCalls';
import './App.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import AllQuestionsContainer from '../AllQuestionsContainer/AllQuestionsContainer';
import Footer from '../Footer/Footer';

function App() {


  // useEffect(() => {
  //   getAllQuestions()
  //   .then(data => console.log('App data: ', data))
  // }, [])
  return (
    <div className="App">
      <Header className="header" />
      <AllQuestionsContainer className="all-questions-container" />
      <Footer className="footer" />
    </div>
  );
}

export default App;
