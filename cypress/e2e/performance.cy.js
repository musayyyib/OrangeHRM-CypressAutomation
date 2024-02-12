describe("Performance Test - OrangeHRM", () => {

    beforeEach(() => {
        cy.handleUncaughtException(); //for clearing the session storage before running test
        cy.viewport(1300, 660); //increasing the size of the page to get full view of the application
    })

    it("Adding Employee Review", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.login()

        cy.get(":nth-child(7) > .oxd-main-menu-item > .oxd-text").should("be.visible").click()

        cy.get(".oxd-topbar-header-breadcrumb-module").should("be.visible").should("have.text", "Performance")

        cy.get(".oxd-table-filter").should("be.visible")

        cy.get(":nth-child(3) > .oxd-topbar-body-nav-tab-item ").should("be.visible").click()
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/performance/viewMyPerformanceTrackerList")
        cy.get(".oxd-button").should("be.visible")

        cy.get(":nth-child(4) > .oxd-topbar-body-nav-tab-item").should("be.visible").click()
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/performance/viewEmployeePerformanceTrackerList")
        cy.get(".oxd-table-filter-header-title > .oxd-text").as("Employee Performance Tracker")
        cy.get(".orangehrm-horizontal-padding > .oxd-text").as("Record Found")

        cy.get(".oxd-autocomplete-text-input > input").should("be.visible").type("Admin {enter}")
        cy.get(".oxd-autocomplete-option").contains("No Records Found")


    })
})