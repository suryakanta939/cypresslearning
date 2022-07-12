/// <reference types="cypress" />

describe('my firest tests',()=>{

    it('first test case',()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        // cy.get('input[type="checkbox"]').each(($el,index,$list)=>{
        //     cy.wrap($el).check().should('be.checked')
        // })

        cy.get('input[type="checkbox"]').check(['option2','option3'])

        //handeling static select box

        cy.get('select').select('option3').should('have.value','option3')

        // handeling dynamic select/auto suggestion box

        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el,index,$list)=>{
             const text_ele= $el.text()
             if(text_ele=='India'){
                cy.wrap($el).click()
             }
            })
        cy.get('#autocomplete').should('have.value','India')

        // cheking the functionality of visible and invisble element
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()

        // handeling radio button 
        cy.get('[value="radio3"]').check().should('be.checked')
    })
   
})