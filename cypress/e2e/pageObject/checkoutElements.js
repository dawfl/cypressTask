


class CheckoutElements {

    firstNameInput() {
        return cy.get('[data-test="firstName"]')
    }

    secondNameInput(){
        return cy.get('[data-test="lastName"]')
    }

    zipCodeInput(){
        return cy.get('[data-test="postalCode"]')
    }
    


}


export default CheckoutElements