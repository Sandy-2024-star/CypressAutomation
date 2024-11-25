import cy from "cypress"

describe('My First Test', function() 
{
    it('Verify Title-Positive', () => 
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')

    })

    it('Verify Title-Negative', () => 
        {
            cy.visit("https://opensource-demo.orangehrmlive.com/")
            cy.title().should('eq','OrangeHRM123')
    
        })
})

/*TypeError
Your configFile threw an error from: cypress.config.js

We stopped running your tests because your config file crashed.
*/ 
