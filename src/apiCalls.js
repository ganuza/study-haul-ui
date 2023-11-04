const getAllQuestions = () => {
  return fetch('https://study-haul-api.vercel.app/api/v1/questions').then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return response.json();
  });
};

const getSelectedQuestion = (id) => {
  return fetch(`https://study-haul-api.vercel.app/api/v1/questions/${id}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    }
  );
};

export { getAllQuestions, getSelectedQuestion };