/// <reference types="cypress" />

describe('my firest tests',()=>{

    it('first test case',()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       // handeling dynamic webelement
        cy.get('tr td:nth-child(2)').each(($el,index,$list)=>{
           const value= $el.text()
           if(value.includes('Python')){
           cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
             const actprice=price.text()
             
             expect(actprice).equals('25')
           })
           }


        })

     

       

       
    })
   
})