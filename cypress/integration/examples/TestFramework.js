/// <reference types="cypress" />
import 'cypress-iframe'
import HomePage from '../../support/pageobject/HomePage'
import ProductPage from '../../support/pageobject/ProductPage'

describe('my first test suite',()=>{
    let data
    let homepage
    let productpage
    before(() => {
        // runs once before all tests in the block
       cy.fixture('example').then((userdata)=>{
        data=userdata
       })
       
      })

    it('first test case',()=>{
         homepage=new HomePage()
         productpage=new ProductPage()
        cy.visit(Cypress.env('url'))
        homepage.getName().type(data.name)
        //ge.type(data.name)
        homepage.getEmail().type(data.email)
        // cy.get(':nth-child(2) > .form-control').type(data.email)
        cy.get('#exampleCheck1').check().should('be.checked').and('have.id','exampleCheck1')
        // cy.get('#exampleFormControlSelect1').select(data.gender)
        homepage.getGender().select(data.gender)
        // cy.get('.ng-untouched').should('have.value',data.name)
        homepage.getTwoWayName().should('have.value',data.name)
        cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2')
        // cy.get('#inlineRadio3').should('be.disabled')
        homepage.getEnterprenure().should('be.disabled')
        // cy.get(':nth-child(2) > .nav-link').click()
        homepage.getShop().click()
        // cy.pause()
        data.productname.forEach(function(element){
            cy.selectproduct(element)
        }) 
            
        productpage.getCheckOut().click()
        productpage.getFinalcheckout().click()
        

       
    })
   
})