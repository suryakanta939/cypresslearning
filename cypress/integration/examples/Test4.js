/// <reference types="cypress" />

describe('my firest tests',()=>{

    it('first test case',()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       // handeling alert
       cy.get('#alertbtn').click()
       cy.get('#confirmbtn').click()
       cy.on('window:alert',(str)=>{
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
      
       })

       // window handel in cypress(opens in anew tab)
       cy.get('#opentab').invoke('removeAttr','target').click()
       cy.url().should('eq','https://www.rahulshettyacademy.com/')
       // navigating in browser
       cy.go('back')

       
    })
   
})