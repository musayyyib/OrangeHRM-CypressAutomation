describe("Recruitment Test", () => {

    beforeEach(() => {
        cy.handleUncaughtException(); //for clearing the session storage before running test
        cy.viewport(1300, 660); //increasing the size of the page to get full view of the application
    })

    const firstName = "Musayyib", lastName = "Ahmed", email = "musayyib.ahmed@gmail.com"

    it("Adding New Candidate", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.login()
        cy.wait(2000)

        cy.get(":nth-child(5) > .oxd-main-menu-item > .oxd-text").should("be.visible").click()
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates")
        cy.get(".orangehrm-header-container > .oxd-button").should("be.visible").click()
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate")
        cy.get(".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input").should("be.visible").type(firstName)
        cy.get(":nth-child(3) > :nth-child(2) > .oxd-input").should("be.visible").type(lastName)
        cy.get(".oxd-select-text-input").should("be.visible").click()
        cy.get(".oxd-select-dropdown").contains("789").click()
        cy.get(":nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input").should("be.visible")
            .type(email).should("have.value", email)
        cy.get(".oxd-button--secondary").should("be.visible").click()
        cy.messageCheck()
    })

    it("Deleting Candidate by using Multi Select", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.login()
        cy.wait(2000)

        cy.get(":nth-child(5) > .oxd-main-menu-item > .oxd-text").should("be.visible").click()
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates")

        const numberOfMultiSelects = 10; //providing value of number of multi selects I want to select
        for (let i = 1; i <= numberOfMultiSelects; i++) {
            cy.get(`:nth-child(${i}) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon`)
                .click()
        }

        cy.get(".orangehrm-horizontal-padding > div > .oxd-button").should("be.visible").click()
        cy.delete()
        cy.messageCheck()
    })

    it("Searching In Vacancies Module", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.login()
        cy.wait(2000)

        cy.get(":nth-child(5) > .oxd-main-menu-item > .oxd-text").should("be.visible").click()
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates")
        cy.get(":nth-child(2) > .oxd-topbar-body-nav-tab-item").should("be.visible").click()

        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewJobVacancy")
        cy.get(":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input").should("be.visible").click()
        cy.get(".oxd-select-dropdown").contains("Automation Tester").click()
        cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input").should("be.visible").click()
        cy.get(".oxd-select-dropdown").should("be.visible").contains("QA Engineer").click()
        cy.get(".oxd-button--ghost").should("be.visible")
        cy.get(".oxd-form-actions > .oxd-button--secondary").should("be.visible").click()

        cy.infoCheck()

        cy.get(".orangehrm-horizontal-padding > .oxd-text").should("be.visible").should("have.text", "No Records Found")
    })

    it("Deleting Vacancy", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.login()
        cy.wait(2000)

        cy.get(":nth-child(5) > .oxd-main-menu-item > .oxd-text").should("be.visible").click()
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates")
        cy.get(":nth-child(2) > .oxd-topbar-body-nav-tab-item").should("be.visible").click()

        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewJobVacancy")
        cy.get(":nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon").should("be.visible").click()
        cy.delete()
        cy.messageCheck()
    })
}) 