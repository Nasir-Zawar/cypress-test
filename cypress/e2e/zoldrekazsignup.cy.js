describe('Signup Test for Rekaz.io with Third-Party Authentication', () => {
    beforeEach(() => {
        cy.visit('https://rekaz.io'); // Visit the main website
    });

    it('Should complete signup using a third-party authentication service', () => {
        // Click on Entrance (Signup) button
        cy.contains('انطلق مع ركاز', { matchCase: false })
         .click({force: true});
        // cy.get('.elementor-button-text').should('be.visible').eq(1).click({force: true});
        cy.wait(3000);
         cy.get('a.elementor-button-link').eq(1).invoke('attr', 'href').then((url) => {
            cy.visit(url);
            // cy.origin('https://platform.rekaz.io', () => {
              cy.url().should('include', 'platform.rekaz.io');
              // Perform actions within the new tab's domain
              cy.contains('العربية').click();
              cy.get('.menu-link').eq(1).contains('English').click();
              cy.wait(2000);
              cy.contains('What do you want to do with Rekaz?');
              cy.contains('Website').click();
              cy.contains('Invoices').click();
              cy.wait(1000);
              cy.contains('Forms').click();
              cy.wait(2000);
              cy.contains('Continue').click();
              cy.wait(2000);
              cy.contains('label', 'Full Name')  // Find the label with the text 'First Name'
               .siblings('input')                // Get the sibling input element
               .type('John');                    // Type into the 'First Name' field 
               cy.contains('label', 'Email Address')  // Find the label with the text 'First Name'
               .siblings('input')                // Get the sibling input element
               .type('testing.tc789@gmail.com');
               cy.contains('label', 'Mobile Number')  // Find the label with the text 'First Name'
               .siblings('input')                // Get the sibling input element
               .type('48594838');
               cy.get('#Input_Password').type('Test111!');
               cy.wait(1000);
               cy.contains('Register').click();
               cy.window().should('have.property', 'jQuery');
               cy.wait(2000); // Wait for 2 seconds or more if needed for scripts to initialize
               Cypress.on('uncaught:exception', (err, runnable) => {
                // Returning false prevents Cypress from failing the test
                if (err.message.includes('$(...).collapse is not a function')) {
                  return false; // Ignore the error and allow the test to continue
                }
                return true; // Let Cypress handle other exceptions normally
              });
              Cypress.on('uncaught:exception', (err, runnable) => {
                // Ignore specific cross-origin errors
                if (err.message.includes('Script error')) {
                  return false; // Prevents Cypress from failing the test
                }
                return true; // Let Cypress handle other errors normally
              });
            // });
          });


//        // After clicking, extract the URL and visit the new page
//        cy.get('a.elementor-button').contains('https://platform.rekaz.io').invoke('attr', 'href').then((url) => {
//          cy.visit(url);
//          cy.origin('https://platform.rekaz.io', () => {
//          cy.url().should('include', 'platform.rekaz.io');
//     // Perform actions within the new tab's domain
//   });
// });

        // // Return to the main website and verify successful login
        // cy.url().should('include', 'rekaz.io/dashboard'); // Adjust based on actual redirect URL
        // cy.contains('Welcome, Nasir').should('be.visible'); // Validate successful signup/login
    });
});




// cy.contains('انطلق مع ركاز').should('not.have.css', 'display', 'none').invoke('css', 'display', 'block').click({ force: true }); // Force the element to be displayed
         
        
        // cy.contains('انطلق مع ركاز').should('be.visible').invoke('attr', 'https://platform.rekaz.io/')  // Extract the URL of the new tab
        // .then((url) => {
        //   // Manually visit the new URL to simulate tab switch
        //   cy.visit(url);  // This will load the page in the same window;

        // // // Wait for the new tab to be triggered
        // cy.origin('https://platform.rekaz.io/', () => {  // Replace with the actual auth domain
        // //     // Interact with third-party authentication page
        // cy.url().should('include', 'platform.rekaz.io'); // Ensure the page changed
    
        // // cy.contains("العربية").click({ force: true });
        // //     cy.get('input[name="email"]').type('nasirzawar@example.com');
        // //     cy.get('input[name="password"]').type('SecurePassword123!');
        // //     cy.get('button[type="submit"]').click(); // Click the Login/Signup button
        // });
        // });


            // // Wait for the new link to appear, then extract the URL from the button and visit it
    //     cy.contains('https://platform.rekaz.io') // Check for the correct link text
    //      .invoke('attr', 'href') // Get the URL from the href attribute
    //      .then((url) => {
    //          // Visit the extracted URL (third-party site)
    //          cy.visit(url);
    //      });