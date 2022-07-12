/// <reference types="cypress" />

describe('my firest tests',()=>{

    it('first test case',()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      //  // handeling dynamic webelement
      //   cy.get('tr td:nth-child(2)').each(($el,index,$list)=>{
      //      const value= $el.text()
      //      if(value.includes('Python')){
      //      cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
      //        const actprice=price.text()
             
      //        expect(actprice).equals('25')
      //      })
      //      }

      // handeling mouse hover opeartion
      cy.get('div.mouse-hover-content').invoke('show')
      cy.get('a[href="#top"]').click()
      // this force click is used to click on any invisiblelement forcefully
      cy.get('a[href="#top"]').click({force: true})
      cy.url().should('include','top')


     

       

       
    })
   
})