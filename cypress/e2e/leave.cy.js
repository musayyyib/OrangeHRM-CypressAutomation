describe("Leave Module", () => {

    beforeEach(() => {
        cy.handleUncaughtException(); //for clearing the session storage before running test
        cy.viewport(1300, 660); //increasing the size of the page to get full view of the application
    })

    it("Leave List", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.login()
        cy.wait(2000)

        cy.get(":nth-child(3) > .oxd-main-menu-item > .oxd-text").should("be.visible").click()
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList")
        cy.get(".oxd-multiselect-wrapper > .oxd-select-text > .oxd-select-text-input").should("be.visible").click()
        cy.get(".oxd-select-dropdown").should("be.visible").contains("Rejected").click()
        cy.get(".oxd-switch-input").should("be.visible").click()

        cy.get(".oxd-button--ghost").should("be.visible").click()
        cy.infoCheck()
        cy.helpButtonCheck()
    })
})