// import './';  // Ensure commands.js is imported here

describe('Registering on Rekaz', () => {
    beforeEach(() => {
        cy.visit('https://rekaz.io'); // Visit the main website
    });
    it('should complete the registration process', () => {
      cy.contains('انطلق مع ركاز', { matchCase: false }).click({ force: true });
      
      // Get the href attribute and visit the URL
      cy.get('a.elementor-button-link').eq(1).invoke('attr', 'href').then((url) => {
        cy.visit(url);
  
        // Wait for the page to load by checking for a specific URL
        cy.url().should('include', 'platform.rekaz.io');
  
        // Switch to the target domain
        // cy.origin('https://platform.rekaz.io', () => {
          cy.contains('العربية').click();
          cy.get('.menu-link').eq(1).contains('English').click();
  
          // Wait for elements to appear before clicking them
          cy.contains('What do you want to do with Rekaz?').should('be.visible');
          cy.contains('Website').click();
          cy.contains('Invoices').click();
          cy.contains('Forms').click();
          cy.contains('Continue').click();
  
          // Use custom commands to type in the fields
          cy.typeIntoInput('Full Name', 'John');
          cy.typeIntoInput('Email Address', 'testing.tc789@gmail.com');
          cy.typeIntoInput('Mobile Number', '48594838');
          
          // Password field
          cy.get('#Input_Password').clear().type('Test111!');
  
          // Click Register
          cy.contains('Register').click();
          cy.wait(1000);
          // Assert if the email error message is shown
        // cy.contains('Email is already taken').should('be.visible');  // Make sure the actual error text is correct
          // Ensure jQuery is present (if required)
          cy.window().should('have.property', 'jQuery');
          
          // Handle uncaught exceptions (only one listener needed)
          Cypress.on('uncaught:exception', (err) => {
            // Ignore known errors
            if (err.message.includes('$(...).collapse is not a function') || err.message.includes('Script error')) {
              return false; // Prevents Cypress from failing the test
            }
            return true; // Let Cypress handle other exceptions normally
          });
        // });
      });
    });
  });