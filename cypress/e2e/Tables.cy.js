describe('Handle Tables',function(){

    beforeEach('Login',function(){
        
        cy.viewport('macbook-13')

        cy.visit('https://uatace.pnbhousing.com/admin/')
        cy.get('#_username').click().type('Admin@gravithy.com')
        cy.get('#Password').click().type('Pnbhfl@098')
        cy.get('.btn').click()

        cy.get(':nth-child(4) > div > .btn').click()

        cy.get('#_username').click().type('Admin@gravithy.com')
        cy.get('#Password').click().type('Pnbhfl@098')
        cy.get('.btn').click()

        cy.get('.kt-menu__nav > :nth-child(2) > .kt-menu__toggle > .kt-menu__link-text').click()

        cy.xpath("//span[normalize-space()='Loan Products']").click();


    })

    it.skip('check Number Row & Columns',()=>{
        //ROW
        cy.get('#members>tbody>tr').should('have.length',10); 
        //Columne
        cy.get("div[class='dataTables_scrollHeadInner'] table[role='grid']> thead> tr> th").should('have.length',4);

    })

    it.skip('Check cell data from specfic row & Columne',function(){  

        cy.get('#members > tbody > tr:nth-child(5) > td:nth-child(3)')
            .contains('Loan against commercial property');

    })

    it.skip('Read all the rows & Columne data in the first page',function(){

        cy.get('#members > tbody > tr')
            .each(($row,index,$rows) =>{

                cy.wrap($row).within(()=>{

                    cy.get("td").each( ($col, index, $cols)=>{

                        cy.log($col.text());
                    })
                })
            })
    })

    it('Read all the rows & Columne data in the specifi page',function(){

    // find total number of pages
    /*let totalentries; 
    cy.get('#members_info').then((e)=> {
        let mytest = e.text();  //Showing 1 to 10 of 16 entries
        totalentries = mytest.substring(mytest.indexOf("to"),mytest.indexOf("of"));
        cy.log("Total Number of Enteries ==> " + totalentries);
        })
    */

    let totalPages = 2,a=2;
    //let a=2;
    for(let p=1; p<=totalPages;p++)
    {
        //if(totalPages>1)
        //{
            cy.log("Active Page ==> "+p);  
            cy.get("#members_paginate > ul > li:nth-child("+a+")").click();
            a++;
            cy.wait(4000);

            cy.get('#members > tbody > tr')
                .each(($row, index, $rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get('td:nth-child(3)')
                            .then((e)=>{
                                cy.log(e.text());
                            })
                    })
                })
        //}
    }

    })

})