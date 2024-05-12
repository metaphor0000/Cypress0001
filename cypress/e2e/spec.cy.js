describe('login Test', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it.skip('Login Test By Studio', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    /* ==== End Cypress Studio ==== */
  });

  it('Login Test css selector', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get("input[placeholder='Username']").type('Admin');
    cy.get("input[name='password']").type('admin123');
    cy.get('.oxd-button').click();
    /* ==== End Cypress Studio ==== */
  });
})