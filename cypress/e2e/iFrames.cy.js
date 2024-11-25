import 'cypress-iframe'

describe('Handle iFrames',function(){

    it.only('Appraoch 1',function(){

        cy.visit('https://the-internet.herokuapp.com/iframe')

        const iframe =cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);
        cy.get('body > div.tox.tox-silver-sink.tox-tinymce-aux > div > div > button').click()
        cy.get('#tinymce > p').invoke().clear().type('welcome')
        //iframe.clear().type('Welcome');
    })


    it('Appraoch 2 - by using custome command',function(){

            cy.visit('https://the-internet.herokuapp.com/iframe')
    
            cy.getIframe('#mce_0_ifr');
            cy.get('body > div.tox.tox-silver-sink.tox-tinymce-aux > div > div > button').click()
            //iframe.clear().type('Welcome');

    })

    it('Appraoch 3 - by using cypress-iframe plugin',function(){

        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.frameLoaded('#mce_0_ifr'); //load the frame
        cy.iframe('#mce_0_ifr').clear().type("wlcome {Cmd+a}")
        cy.get('body > div.tox.tox-silver-sink.tox-tinymce-aux > div > div > button').click()
        //iframe.clear().type('Welcome');
    })
})