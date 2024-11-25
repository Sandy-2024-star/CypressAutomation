
describe("Assertion Demo", ()=>{

    it("Implicit assertion", ()=>
    {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //Using should and
        
         cy.url().should('include','orangehrmlive.com') 
         cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.url().should('contain','orangehrm')

         cy.url().should('include','orangehrmlive.com')
            .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
           .should('contain','orangehrm')

        cy.url().should('include','orangehrmlive.com')
            .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('contain','orangehrm')
            .and('not.contain','greenhrm')

        cy.title().should('include','Orange')
         .and('eq','OrangeHRM')
         .and('contain',"HRM")

         cy.get('.orangehrm-login-branding > img').should('be.visible')  //Logo Visible
         .and('exist')  //Logo exist

         cy.xpath("//a").should('have.length','5') // No of links

         cy.get("input[placeholder='Username']").type('Admin')      // Provide a value into inputbox

         cy.get("input[placeholder='Username']").should('have.value','Admin')   // value check 

    })

    it("Explicit assertion", () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin") 
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get("button[type='submit']").click()

        let expName = "Abc"

        cy.get(".oxd-userdropdown-name").then( (x) => {

                    let actname=x.text()

                    //BDD Style
                    //expect(actname).to.equal(expName)
                    expect(actname).to.not.equal(expName)
                    
                    //TDD Style
                    //assert.equal(actname,expName)
                    assert.notEqual(actname,expName)
                    

        })

    })





})