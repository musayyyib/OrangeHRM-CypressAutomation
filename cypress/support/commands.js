// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("clearSessionStorage", () => {
    cy.window().then((win) => {
        win.sessionStorage.clear();
    })
})

Cypress.Commands.add("login", () => {
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("admin")
    cy.wait(1000)
    cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type("admin123")
    cy.wait(1000)
    cy.get(".oxd-button").click()
    cy.wait(2000)
})


Cypress.Commands.add("logout", () => {
    cy.get(".index_profileImage__WPivT").click()
    cy.get("h1[class='index_simpleParagraph__Z-+Kl index_redColor__1wN5Z']").click()
    cy.url().should("eq", "https://timegram-8ecdc.web.app/login")
})

Cypress.Commands.add("handleUncaughtException", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false prevents Cypress from failing the test
        return false;
    });

    Cypress.Commands.add("delete", () => {
        cy.get('.oxd-sheet').should("be.visible")
        cy.get(".orangehrm-modal-header > .oxd-text").should("have.text", "Are you Sure?")
        cy.get(".oxd-button--text").should("be.visible").contains("No, Cancel")
        cy.get(".oxd-button--label-danger").should("be.visible").contains("Yes, Delete").click()
    })

    Cypress.Commands.add("messageCheck", () => {
        cy.get(".oxd-text--toast-title").should("be.visible").contains("Success")
    })

    Cypress.Commands.add("infoCheck", () => {
        cy.get(".oxd-text--toast-title").should("be.visible").contains("Info")
    })

    Cypress.Commands.add("helpButtonCheck", () => {
        cy.get(".oxd-topbar-body-nav-slot > .oxd-icon-button").should("be.visible")
    })
})

defaultCommandTimeout: 10000