/// <reference types="cypress" />

describe('my firest tests',()=>{

    it('first test case',()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      
        // how to get the attribute value in cypress

        cy.get('#opentab').then(function(el){
           const link=el.prop('href')
           cy.log(link)
           cy.visit(link)
        })

     

       

       
    })
   
})