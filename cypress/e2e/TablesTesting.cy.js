describe('TableTesting',function(){

    it('Login',()=>{
        cy.visit('https://uatace.pnbhousing.com/id')
        cy.get('#_username').click().type('Admin@gravithy.com')
        cy.get('#Password').click().type('Pnbhfl@098')
        cy.get('.btn').click()

       /* cy.get(':nth-child(4) > div > .btn').click()

        cy.get('#_username').click().type('Admin@gravithy.com')
        cy.get('#Password').click().type('Pnbhfl@098')
        cy.get('.btn').click()
        */
        cy.get('.dropdown-toggle').click();
        

    })
})