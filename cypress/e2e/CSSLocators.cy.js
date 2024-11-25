describe('CssLocators', () =>
{

    it('csslocators', function() 
    {
        cy.visit("http://www.automationpractice.pl/index.php")

        //cy.get("#search_query_top").type("T-Shirts")         // Use 'id' for type or input
        //cy.get(".search_query").type("T-Shirts") // class
        cy.get("[name='search_query']").type("T-Shirts")              // Attribute

        cy.get("[name='submit_search']").click()            // use attribute 

        cy.get(".lighter").contains("T-Shirts")             // assertion


    })


})