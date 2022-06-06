


  it('check user login', () => {
    // https://on.cypress.io/type
   

            cy.loginAuth('teasdasd', 'tesasd')

            cy.get('[data-test="error"]').then($errors => {

                if($errors.text().includes('Epic sadface: Username and password do not match any user in this service')){
                    cy.log('validation text correct')
                }else {
                    throw new Error('Validation text is not shown')
                }

            })
            
      })