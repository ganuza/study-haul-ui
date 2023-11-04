describe('should load a selected question', () => {
  beforeEach(() => {
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
    }).as('getSelectedQuestion');
  });

  it('should take us to the all questions page, then when a question is selected it should take us to the selected questions page, load the topic, question, answer form, submit answer button', () => {
    cy.intercept('GET', 'http://localhost:8080/api/v1/questions', {
      statusCode: 200,
      fixture: 'allQuestions',
    })
      .as('getAllQuestions')
      .visit('http://localhost:3000');
    cy.wait('@getAllQuestions');

    cy.get('.all-questions-card').eq(4).click();
    cy.wait('@getSelectedQuestion');
    cy.url().should('eq', 'http://localhost:3000/questions/52');
    cy.get('.title-topic')
      .should('contain', 'Topic: Express')
      .get('.title-question')
      .should('contain', 'What is CORS?')
      .get('form')
      .should('exist')
      .get('.filter-btn')
      .should('exist');
    cy.get('textarea[name="user-answer"]')
      .type('CORS is Cross-Orgin-Resources-Sharing')
      .should('have.value', 'CORS is Cross-Orgin-Resources-Sharing')
      .get('.filter-btn')
      .click()
      .get('.answers-cont')
      .first()
      .contains('h2', 'Your Answer: CORS is Cross-Orgin-Resources-Sharing');
    cy.get('.answers-cont')
      .last()
      .contains(
        'h2',
        'Correct Answer: Cross Origin Resource Sharing - it allows protected resources on a web page to be requested from outside of the current domain. Basically a security feature. To use it, we need to install it as a dependency, import it and tell the app to use it.'
      );
    cy.get('.header > :nth-child(2)').click();
    cy.url('http://localhost:3000');
  });
});
