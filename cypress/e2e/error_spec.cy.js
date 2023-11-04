describe('should get a error message for a failed network request.', () => {
  it('should give a user an error for a failed network request for allQuestions api endpoint', () => {
    cy.intercept('GET', 'https://study-haul-api.vercel.app/api/v1/questions', {
      statusCode: 404,
      body: '',
    })
      .as('getAllQuestions')
      .visit('http://localhost:3000/');
    cy.wait('@getAllQuestions');

    cy.get('.error-h2').contains('ERROR');
    cy.get('.error-cont > :nth-child(2)').contains('404 Not Found');
    cy.get('.error-cont > :nth-child(3)').contains(
      "We're sorry, we can't find the requested page. Please try again"
    );
  });

  it('should give a user an error for a failed network request for the selectedQuestion api endpoint', () => {
    cy.intercept('GET', 'https://study-haul-api.vercel.app/api/v1/questions', {
      statusCode: 200,
      fixture: 'allQuestions',
    }).as('getAllQuestions');

    cy.intercept(
      'GET',
      'https://study-haul-api.vercel.app/api/v1/questions/52',
      {
        statusCode: 500,
        body: '',
      }
    )
      .as('getSelectedQuestions')
      .visit('http://localhost:3000/');
    cy.wait('@getAllQuestions');
    cy.get('.all-questions-card').eq(4).click().wait('@getSelectedQuestions');
    cy.get('.error-h2').contains('ERROR');
    cy.get('.error-cont > :nth-child(2)').contains('500 Internal Server Error');
    cy.get('.error-cont > :nth-child(3)').contains(
      "We're sorry, we can't find the requested page. Please hit the 'Home' button above."
    );
  });
});
