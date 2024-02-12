describe("My Info Test - OrangeHRM", () => {

    beforeEach(() => {
        cy.handleUncaughtException(); //for clearing the session storage before running test
        cy.viewport(1300, 660); //increasing the size of the page to get full view of the application
    })

    it("My Info - Happy Flow", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.login()

        cy.get(":nth-child(6) > .oxd-main-menu-item > .oxd-text").should("be.visible").click()
        cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should("be.visible").contains("PIM")
        //cy.url().contains("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/")

        const sideItems = ["Personal Details", "Contact Details", "Emergency Contacts", "Dependents", "Immigration", "Job", "Salary", "Report-to", "Qualifications", "Memberships"]
        sideItems.forEach((item1, index) => {
            cy.get(`:nth-child(${index + 1})  .orangehrm-tabs-item`).contains(item1)
        })
    })

    it.only("Editing User Info", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.login()

        cy.get(":nth-child(6) > .oxd-main-menu-item > .oxd-text").should("be.visible").click()
        cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should("be.visible").contains("PIM")

        cy.get(".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input").should("be.visible").clear().type("Musayyib")
        cy.get(":nth-child(2) > :nth-child(2) > .oxd-input").should("be.visible").clear().type("Ahmed")
        cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input").should("be.visible").click().type("{selectall}1995-01-01{enter}")
        cy.get(".oxd-form > :nth-child(3) > :nth-child(2)").click()
        cy.get(":nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input").should("be.visible").click()
        cy.get(":nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input").should("be.visible").click()
        cy.get(".orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text").click()//.contains("A+").click()
        cy.get(".oxd-select-dropdown > :nth-child(2)").should("be.visible").click()
        cy.get(".orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button").should("be.visible").click()

    })

})