import './App.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import AllQuestionsContainer from '../AllQuestionsContainer/AllQuestionsContainer';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <AllQuestionsContainer className="all-questions-container" />
      <Footer className="footer" />
    </div>
  );
}

export default App;
