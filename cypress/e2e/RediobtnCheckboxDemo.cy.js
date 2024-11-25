
describe("Check UI Element", () =>{

    it("Rqdio Button", () =>{

        cy.visit("https://itera-qa.azurewebsites.net")

        //Visibility of Radio button
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        //selecting radio button
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')

        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')

    })

    it("Checking check Boxes", ()=> {

        cy.visit()

        //Visibility of the element
        cy.get("input#monday").should('be.visible')

        //Selecting single check box 
        cy.get("input#monday").check().should('be.checked')

        //Unselecting Check box
        cy.get("input#monday").uncheck().should('not.be.checked')

        //Selecting all Check boxes
        cy.get("input.form-check-input[type='checkobox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkobox']").uncheck().should('not.be.checked')


        //Select First checkbox & last checkbox
        cy.get("input.form-check-input[type='checkobox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkobox']").last().check().should('be.checked')

    })
})