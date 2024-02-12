describe("Forgot Password Test - OrangeHRM", () => {

    beforeEach(() => {
        cy.handleUncaughtException(); //for clearing the session storage before running test
        cy.viewport(1300, 660); //increasing the size of the page to get full view of the application
    })

    it("Forgot Password - Happy Flow", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(".oxd-text--h5").as("Login")
        cy.get(".orangehrm-login-forgot > .oxd-text").should("be.visible", "Forgot your password?")
        cy.get(".orangehrm-login-forgot > .oxd-text").click()
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode")
        cy.get(".orangehrm-card-container").should("be.visible")
        cy.get(".oxd-input").type("admin")
        cy.get(".oxd-button--secondary").should("be.visible").click()
        cy.get(".oxd-text--h6").as("Reset Password link sent successfully")
    })

    it("Forgot Password - Negative Flow", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(".oxd-text--h5").as("Login")
        cy.get(".orangehrm-login-forgot > .oxd-text").should("be.visible", "Forgot your password?")
        cy.get(".orangehrm-login-forgot > .oxd-text").click()
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode")
        cy.get(".orangehrm-card-container").should("be.visible")
        cy.get(".oxd-button--secondary").should("be.visible").click()
        cy.get(".oxd-input-group > .oxd-text").should("be.visible").should("have.text", "Required")
    })
})