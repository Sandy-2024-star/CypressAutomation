
describe('XPath Locators', function()
{

    it('find no of product',() =>{

        cy.visit("http://www.automationpractice.pl/index.php")
        cy.xpath("//*[@id='blockbestsellers']/li").should('have.length',6)

    })

    it('Chained xpath',() =>{

        cy.visit("http://www.automationpractice.pl/index.php")
        cy.xpath("//*[@id='blockbestsellers']").xpath("./li").should('have.length',6)

    })

})