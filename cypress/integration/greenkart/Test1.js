/// <reference types="cypress" />

describe('my firest tests',()=>{

    it('first test case',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('form inpu').type('ca')
        cy.get('.product:visible').should('have.length',4)
        // wrapping up same xpath to alias
        cy.get('.products').as('productlocators')
        cy.get('@productlocators').find('.product').should('have.length',4)
        cy.get('@productlocators').find('.product').eq(2).contains('ADD TO CART').click()        
        cy.get('@productlocators').find('.product').each(($el, index, $list) => {
            var veg_name= $el.find('h4.product-name').text()
            if(veg_name.includes("Cashews")){
               cy.wrap($el).find('button').click()
   
            }
        })

        cy.get('.brand').should('have.text','GREENKART')
        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())
        })
       

       
    })
   
    it('second test case',()=>{

    })
   
})