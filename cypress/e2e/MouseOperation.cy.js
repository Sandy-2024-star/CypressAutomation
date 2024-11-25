import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')

describe('Mouse Operations',function(){

    it.skip('MouseHover',()=>{

        cy.visit('https://demo.opencart.com/')

        cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a')
        .should('not.be.visible')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();

        cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a')
            .should('be.visible')

    })

    it.skip('right click', function(){

        cy.visit('http://swisnl.github.io/jQuery-contextMenu/demo.html')

        //Approach 1
        /*cy.get('.context-menu-one').trigger('contextmenu');
        cy.get('.context-menu-icon-copy > span').should('be.visible')
        */
        //Approach 2
        cy.get('.context-menu-one').rightclick();
        cy.get('.context-menu-icon-copy > span').should('be.visible')
    })

    it.skip('Double Click',function(){

        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        cy.frameLoaded('#iframeResult'); // Load the frame

        //Approach 1 - using Trigger()
        //cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick')
        //cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!');

        //Approach 2 - using dblclick()
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick();
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!');


    })

    it.skip('Drag and Drop using Plugin', function(){

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box6').drag('#box106',{force: true});

    })

    it('Scolling Page',function(){

        cy.viewport('macbook-13');
          
        cy.visit('https://en.wikipedia.org/wiki/List_of_national_flags_of_sovereign_states')

        cy.get(':nth-child(81) > :nth-child(1) > .mw-default-size > .mw-file-description > .mw-file-element')
            .scrollIntoView({duration: 3000})
        cy.get(':nth-child(81) > :nth-child(1) > .mw-default-size > .mw-file-description > .mw-file-element')
            .should('be.visible')

        cy.get(':nth-child(68) > :nth-child(1) > .mw-default-size > .mw-file-description > .mw-file-element')
            .scrollIntoView({duration:3000})
        cy.get(':nth-child(68) > :nth-child(1) > .mw-default-size > .mw-file-description > .mw-file-element')
            .should('be.visible')

        cy.get('#footer-info-copyright').scrollIntoView();

    })
})