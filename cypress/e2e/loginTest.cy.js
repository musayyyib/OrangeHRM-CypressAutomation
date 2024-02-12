describe("Login Test - OrangeHRM", () => {

    beforeEach(() => {
        cy.handleUncaughtException(); //for clearing the session storage before running test
        cy.viewport(1300, 660); //increasing the size of the page to get full view of the application
    })

    it("Login - Happy Flow", () => {


        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.login()
        cy.wait(5000)
        cy.url("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index").should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").as("Dashboard")
    })

    const incorrectUsername = "admin", incorrectPassword = "admin1234"

    it.only("Login - Negative Flow", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(incorrectUsername)
        cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(incorrectPassword)
        cy.get(".oxd-button").click()
        cy.get(".oxd-alert-content > .oxd-text").should("have.text", "Invalid credentials")
    })

})