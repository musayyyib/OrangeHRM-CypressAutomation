describe("Dashboard Test - OrangeHRM", () => {

    beforeEach(() => {
        cy.handleUncaughtException(); //for clearing the session storage before running test
        cy.viewport(1300, 660); //increasing the size of the page to get full view of the application
    })

    it("Dashboard - Happy Flow", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.login()
        cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").as("Dashboard")
        cy.get("@Dashboard").should("be.visible").should("have.text", "Dashboard")

        const nmeuItems = ["Admin", "PIM", "Leave", "Time", "Recruitment", "My Info", "Performance", "Dashboard", "Directory", "Maintenance", "Claim", "Buzz"]
        menuItems.forEach((item, index) => {
            cy.get(`:nth-child(${index + 1}) > .oxd-main-menu-item > .oxd-text`).contains(item)
        })

        cy.get(".oxd-userdropdown-tab").should("be.visible").click()
        cy.get(".oxd-dropdown-menu").contains("Logout")
    })
})