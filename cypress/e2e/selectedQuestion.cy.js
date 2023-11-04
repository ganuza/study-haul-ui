describe('should load a selected question', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:8080/api/v1/questions', {
      statusCode: 200,
      fixture: 'allQuestions',
    }).as('getAllQuestions');

    cy.intercept('GET', 'http://localhost:8080/api/v1/questions/52', {
      statusCode: 200,
      body: {
        id: 52,
        mod_num: 3,
        topic: 'Express',
        question: 'What is CORS?',
        answer:
          'Cross Origin Resource Sharing - it allows protected resources on a web page to be requested from outside of the current domain. Basically a security feature. To use it, we need to install it as a dependency, import it and tell the app to use it.',
      },
    })
      .as('getSelectedQuestion')
      .visit('http://localhost:3000');
    cy.wait('@getAllQuestions');
  });

  it('should take us to the all questions page, then when a question is selected it should take us to the selected questions page, load the topic, question, answer form, submit answer button', () => {
    cy.get('.all-questions-card').eq(2).click();
    cy.wait('@getSelectedQuestion');
  });
});
