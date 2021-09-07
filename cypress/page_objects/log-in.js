module.exports = {
    navigateLogin: () => {
        cy.get('.css-hgd94f:nth-child(3) .css-1rwrl3a > .css-18xug1d-ButtonLink-Button-ButtonLinkWithIcon').click({force:true});
        //cy.contains('Accept all cookies').should('be.visible');
    },

    enterEmail: (email) => {
        cy.get('#input-email-address').click({force:true}).type(email);

    },

    enterPassword: (password) => {
    cy.get('#input-password').click({force:true}).type(password);
    
    },
    
    clickOnSignIn: () => {
    cy.get('button').contains('Sign in').click();

    }}