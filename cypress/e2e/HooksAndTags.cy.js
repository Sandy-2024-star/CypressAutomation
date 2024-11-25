// before       -  only once 
// after        -  only once
// beforeEach   -   multiple times
// AfterEach    -   multiple times

describe('Hooks and Tags',()=>{

    before(()=>{
        cy.log("****** Launch App ******")
    })

    after(()=>{
        cy.log("****** Close App ******")
    })

    beforeEach(()=>{
        cy.log("****** Login ******")
    })

    afterEach(()=>{
        cy.log("****** Logout ******")
    })

    it('Search',()=>{

        cy.log("****** Searching ******")
    })

    it.skip('Adavnced Search',()=>{

        cy.log("****** Adavanced Searching ******")
    })

    it.only('Listing Products',()=> cy.log("****** Listing Products ******"))

})