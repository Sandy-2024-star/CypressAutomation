import 'cypress-file-upload'

describe('File Upload',function(){

    it.skip('Single File Uplaod',function(){

        cy.visit('http://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile("test01.pdf")
        cy.get('#file-submit').click();
        cy.wait(3000);

        cy.get('#content > div > h3').should('have.text','File Uploaded!');

    })

    it.skip('File Upload - Rename',()=> {
        cy.visit('http://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:"test01.pdf",fileName:'Myfile.pdf'})
        cy.get('#file-submit').click();
        cy.wait(3000);

        cy.get('#content > div > h3').should('have.text','File Uploaded!');

        
    })

    it.skip('File Upload - Drag and Drop',function(){
        cy.visit('http://the-internet.herokuapp.com/upload')

        cy.get('#drag-drop-upload').attachFile('test01.pdf',{subjectType:'drag-n-drop'});
        cy.wait(5000);
        
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
            .contains('test01.pdf');


    })

    it.skip('Multiple file Upload', ()=>{

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');

        cy.get('#filesToUpload')
            .attachFile(['test01.pdf','test02.pdf']);
        
        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:');

    })

    it('File Upload - Shadow dom',()=>{
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')

        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('test01.pdf')
        cy.get('.smart-item-name',{includeShadowDom:true}).should('contain.text','test01.pdf')
    })
})