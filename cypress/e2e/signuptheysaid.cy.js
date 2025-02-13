describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://evo.dev.theysaid.io/');
    cy.get('.container > .flex > .border').click();
    cy.url().should('include', 'mystical-turtle-68-staging.authkit.app');
    if(cy.get('a[href="/sign-up"]').should('exist')){
    cy.url().should('include', '/sign-up');
    cy.get('#radix-:R2aqpnltbnla:').type('Test');
    cy.get('#radix-:R4aqpnltbnla:').type('LastName');
    cy.get('#radix-:Riqpnltbnla:').type('testing.tc9+1@gmail.com');
    cy.contains('button', 'Continue');
  }
  })
})


// describe('Signup Test for Rekaz.io with Third-Party Authentication', () => {
//     beforeEach(() => {
//         cy.visit('https://rekaz.io'); // Visit the main website
//     });

//     it('Should complete signup using a third-party authentication service', () => {
//         // Click on Entrance (Signup) button
//         cy.contains('Entrance').click(); 

//         // Wait for the new tab to be triggered
//         cy.origin('https://platform.rekaz.io/', () => {  // Replace with the actual auth domain
//             // Interact with third-party authentication page
//             cy.get('input[name="email"]').type('nasirzawar@example.com');
//             cy.get('input[name="password"]').type('SecurePassword123!');
//             cy.get('button[type="submit"]').click(); // Click the Login/Signup button
//         });

//         // Return to the main website and verify successful login
//         cy.url().should('include', 'rekaz.io/dashboard'); // Adjust based on actual redirect URL
//         cy.contains('Welcome, Nasir').should('be.visible'); // Validate successful signup/login
//     });
// });