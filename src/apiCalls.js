const getAllQuestions = () => {
  return fetch('http://localhost:8080/api/v1/questions').then(response => {
    if (!response.ok) {
      throw new Error('Server Down');
    }
    return response.json();
  });
};

const getSelectedQuestion = id => {
  return fetch(`http://localhost:8080/api/v1/questions/${id}`).then(
    response => {
      if (!response.ok) {
        throw new Error('Server Down');
      }
      return response.json();
    }
  );
};

export { getAllQuestions, getSelectedQuestion };
