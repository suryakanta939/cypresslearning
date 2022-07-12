class ProductPage{

    getCheckOut(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')

    }

    getFinalcheckout(){
        return cy.get('.btn.btn-success')
    }

}

export default ProductPage;