describe('should load the all questions page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://study-haul-api.vercel.app/api/v1/questions', {
      statusCode: 200,
      fixture: 'allQuestions',
    })
      .as('getAllQuestions')
      .visit('http://localhost:3000/');
    cy.wait('@getAllQuestions');
  });
  it('should load title, logo, three buttons, and 6 question cards', () => {
    cy.get('.logo-img').should('exist');
    cy.get('h1')
      .contains('Study Haul')
      .get('.btn-container')
      .children()
      .should('have.length', 3)
      .get('.all-questions-container')
      .children()
      .should('have.length', 9)
      .get('.all-questions-card')
      .first()
      .should(
        'contain',
        'For iterative array prototypes, what is the first argument? E.g. array.find( /*what goes here*/ )'
      )
      .get('.all-questions-card')
      .last()
      .should('contain', 'What are the layers of MVC?')
      .get('.btn-container > :nth-child(2)')
      .click()
      .get('.all-questions-card')
      .first()
      .should(
        'contain',
        'For iterative array prototypes, what is the first argument? E.g. array.find( /*what goes here*/ )'
      )
      .get('.all-questions-card')
      .last()
      .should(
        'contain',
        'What are the two arguments we pass into the callback function of reduce()? (Technically the callback function of reduce() can accept 4 arguments but we commonly pass just 2)'
      )
      .get('.btn-container > :nth-child(3)')
      .click()
      .get('.all-questions-card')
      .first()
      .should('contain', 'What is app.locals?')
      .get('.all-questions-container')
      .last()
      .should('contain', 'What are the layers of MVC?')
      .get('.btn-container > :nth-child(1)')
      .click()
      .get('.all-questions-card')
      .first()
      .should(
        'contain',
        'For iterative array prototypes, what is the first argument? E.g. array.find( /*what goes here*/ )'
      )
      .get('.all-questions-card')
      .last()
      .should('contain', 'What are the layers of MVC?');
  });
});