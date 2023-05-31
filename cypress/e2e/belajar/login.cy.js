describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('Successs Login', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('Admin').should('have.value', 'Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('admin123').should('have.value', 'admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains("Dashboard")
    cy.wait(1000)
  })

  it('Invalid Login', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('Admin').should('have.value', 'Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('asalaja').should('have.value', 'asalaja')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content').contains("Invalid credentials")
  })

  it('Empty Username', () => {
    /*cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('Admin').should('have.value', 'Admin')*/
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('admin123').should('have.value', 'admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-input-group > .oxd-text').contains("Required")
  })

  it('Empty Password', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('Admin').should('have.value', 'Admin')
    /*cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('admin123').should('have.value', 'admin123')*/
    cy.get('.oxd-button').click()
    cy.get('.oxd-input-group > .oxd-text').contains("Required")
  })
})