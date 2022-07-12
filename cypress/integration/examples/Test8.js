/// <reference types="cypress" />
import 'cypress-iframe'

describe('my firest tests',()=>{

    it('first test case',()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      
        // Handeling frame in cypress

        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
     

       

       
    })
   
})