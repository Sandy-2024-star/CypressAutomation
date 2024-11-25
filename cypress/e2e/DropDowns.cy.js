
describe('Handle dropdown',function(){

    it.skip('Dropdown with select', function(){

        cy.visit('https://www.zoho.com/commerce/free-demo.html')

        cy.get('#zcf_address_country')
            .select('Italy')
            .should('have.value','Italy')
    })

    it.skip('Dropdown without select',function(){

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        cy.get('#select2-billing_country-container')
            .click ()
        cy.get('.select2-search.select2-search--dropdown')
            .type('Italy')
            .type('{enter}')

            cy.get('#select2-billing_country-container')
            .should('have.text','Italy')

    })

    it.skip('Auto suggest dropdown',function(){

        cy.visit('https://www.wikipedia.org/')

        cy.get('#searchInput').type('Delhi')

        cy.get('.suggestion-title').contains('Delhi University').click()
        

    })

    it('dyname Dropdown',function(){

        cy.visit('https://www.google.com/')

        cy.get('#APjFqb').type('Cypress Automation')

        //cy.wait(3000)

        //cy.get('div.wM6W7d>span').should('have.length',13)

        //cy.contains('Cypress automation tutorial').click()

        const $el = 'Cypress automation tutorial'
        cy.get('div.wM6W7d>span')
            .should('have.length',13)
            .each(($el, index, $list) => {

                if ($el.text() == 'Cypress automation tutorial') 
                {
                    cy.wrap($el).click()
                }
            })

            //cy.get('#Zrbbw > .wM6W7d > span').click()
        //cy.get('#APjFqb').should('have.value','Cypress automation tool')



    })

})