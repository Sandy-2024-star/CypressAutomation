// Wap print title on logs 
//wap check and click on wikinews

describe('Interview', function()
{
    // Wap print title on logs===== DONE
    it('Wap print title on logs ',() => {

    cy.visit('https://www.wikipedia.org/')
    cy.get('nav.other-projects>.other-project >a>div.other-project-text > span.other-project-title.jsl10n ')
        .each(($title, index, $titles)=>
        {
                    cy.wrap($title).log($title.text());           
        })
        

    })

    //wap check and click on wikinews ===== Done
    it.only('wap check and click on wikinews',function(){
    
        cy.visit('https://www.wikipedia.org/');
        cy.get('nav.other-projects>.other-project >a>div.other-project-text > span.other-project-title.jsl10n ')
        .each(($title, index, $titles)=>
        {
                cy.wrap($title).then(()=>
                {
                    
                    if($title.text()=='Wikinews')
                        {
                            cy.contains('Wikinews').click();
                            cy.wait(5000);
                            cy.visit('https://www.wikipedia.org/');
                        }
                   
                })          
        })

    })

})