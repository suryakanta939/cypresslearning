class HomePage{

    getName(){
      return cy.get('input[name="name"]:nth-child(2)')
    }

    getEmail(){

        return cy.get(':nth-child(2) > .form-control')
    }
    getGender(){
        return cy.get('#exampleFormControlSelect1')
    }

    getTwoWayName(){
        return cy.get('.ng-untouched')
    }

    getEnterprenure(){
        return cy.get('#inlineRadio3')
    }
   getShop(){
        return cy.get(':nth-child(2) > .nav-link')
   }
}

export default HomePage;
