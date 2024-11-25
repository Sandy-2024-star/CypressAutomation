
describe('Alerts',() =>
{

    //1. Javascript Alter: it will have some text and an 'ok' button
    it('Js Alert', () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get(':nth-child(1) > button').click()

        cy.on('window:alert',(t)=>{
                expect(t).to.contains('I am a JS Alert');
        })

        //alert window automatically closed by cypress

        cy.get('#result').should('have.text','You successfully clicked an alert')

    })

    //2. Javascript Confirm Alert: it will have some text with ok and cancel button
    it('Js Confirm Alert - Ok',() =>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get(':nth-child(2) > button').click()

        cy.on('window:confirm',(t) =>{
            expect(t).to.contains('I am a JS Confirm')
        })
        // Cypress automatically closed alert window by using ok button-default

        cy.get('#result').should('have.text','You clicked: Ok')

    })

    it('Js Confirm Alert - Cancel',() =>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get(':nth-child(2) > button').click()

        cy.on('window:confirm',(t) =>{
            expect(t).to.contains('I am a JS Confirm')
        })


        // Cypress automatically closed alert window by using Cancel button
        cy.on('window:confirm',() => false);


        cy.get('#result').should('have.text','You clicked: Cancel')

    })

    //3. Javascript prompt Alert: It will have some text with text box for user input along with ok and cancel.
    it('Js Promet Alert',function(){

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((win)=>{ cy.stub(win,'prompt').returns('welcome'); })

        cy.get(':nth-child(3) > button').click()

        // Cypress automatically close prompted alter - will use ok Button -by default
       // cy.on('window:prompt',() => false);

        cy.get('#result').should('have.text','You entered: welcome')

    })

    //4. Authenticated Alert
    it.only('Js Authenticated Alert', function(){

        // Apporaoch 1.
        cy.visit("https://the-internet.herokuapp.com/basic_auth",
            {auth: 
                {
                    username: "admin",
                    password : "admin"
                }
            })   
        cy.get("#content > div > p")
            .should('have.contain','Congratulations! You must have the proper credentials.') 

        //Apporoach 2.
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get('#content > div > p').should('have.contain','Congratulations')
    })

})