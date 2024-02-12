describe("Describe Test - OrangeHRM", () => {

    beforeEach(() => {
        cy.handleUncaughtException(); //for clearing the session storage before running test
        cy.viewport(1300, 660); //increasing the size of the page to get full view of the application
    })

    it("Describe - Happy Flow", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.login()
        cy.wait(2000)

        cy.get(":nth-child(1) > .oxd-main-menu-item > .oxd-text").click()
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
        cy.get(".oxd-topbar-header-breadcrumb-module").should("be.visible").should("have.text", "Admin")
        cy.get(".oxd-topbar-header-breadcrumb-level").should("be.visible").should("have.text", "User Management")
    })

    it("Searching User in Admin Module", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.login()
        cy.wait(2000)

        cy.get(":nth-child(1) > .oxd-main-menu-item > .oxd-text").click()
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
        cy.get(".oxd-topbar-header-breadcrumb-module").should("be.visible").should("have.text", "Admin")
        cy.get(".oxd-topbar-header-breadcrumb-level").should("be.visible").should("have.text", "User Management")
        cy.get(":nth-child(2) > .oxd-input").should("be.visible").type("Admin")
        cy.get(".oxd-form-actions > .oxd-button--secondary").should("be.visible").click()

        cy.get(".oxd-table-card > .oxd-table-row > :nth-child(2) > div").as("Admin")
    })

    const employeeName = "Musayyib Ahmed", pass = "Temp123", employeeUserName = "TestUser1"

    it("Adding Users, JTs, ORGs, Qualifications, Nationalities, Cooperate Branding and Configration", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.login()
        cy.wait(2000)

        cy.get(":nth-child(1) > .oxd-main-menu-item > .oxd-text").click()
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
        cy.get(".oxd-topbar-header-breadcrumb-module").should("be.visible").should("have.text", "Admin")
        cy.get(".oxd-topbar-header-breadcrumb-level").should("be.visible").should("have.text", "User Management")
        cy.get(":nth-child(2) > .oxd-input").should("be.visible").type("Admin")

        cy.get(".orangehrm-header-container > .oxd-button").should("be.visible").click()
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser")
        cy.get(".orangehrm-card-container").should("be.visible")

        cy.get(":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text").should("be.visible").click()
        cy.get(".oxd-select-dropdown").contains("ESS").click()

        cy.get(".oxd-autocomplete-text-input > input").should("be.visible").type(employeeName)

        cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text").should("be.visible").click()
        cy.get(".oxd-select-dropdown").contains("Enabled").click()

        cy.get(":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input").should("be.visible").type(employeeUserName)

        cy.get(".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input").should("be.visible").type(pass)
        cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").should("be.visible").type(pass)

        cy.get(".oxd-button--secondary").should("be.visible").click()

        cy.on('fail', (error, runnable) => {
            // Use a unique filename for each screenshot
            const timestamp = new Date().toISOString().replace(/:/g, "-");
            const screenshotFileName = `error-${runnable.parent.title}--${runnable.title}--${timestamp}`
            // Take screenshot and save it
            cy.screenshot(screenshotFileName)
        })
    })

    it("Adding Job Titles", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.login()
        cy.wait(2000)

        cy.get(":nth-child(1) > .oxd-main-menu-item > .oxd-text").click()
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
        cy.get(".oxd-topbar-header-breadcrumb-module").should("be.visible").should("have.text", "Admin")
        cy.get(".oxd-topbar-header-breadcrumb-level").should("be.visible").should("have.text", "User Management")

        cy.get(":nth-child(2) > .oxd-topbar-body-nav-tab-item").should('be.visible').click()
        cy.get(":nth-child(1) > .oxd-topbar-body-nav-tab-link").should('be.visible').click()

        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")
        cy.get(".oxd-button").should("be.visible").click()

        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle")

        cy.get(":nth-child(2) > .oxd-input").should("be.visible").type("JT2")
        cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea").should("be.visible").type("TestJobTitleDescription")
        cy.get(".oxd-button--secondary").should("be.visible").click()

        cy.messageCheck()
    })

    it("Deleting Multiple Job Titles", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.login()
        cy.wait(2000)

        cy.get(":nth-child(1) > .oxd-main-menu-item > .oxd-text").click()
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
        cy.get(".oxd-topbar-header-breadcrumb-module").should("be.visible").should("have.text", "Admin")
        cy.get(".oxd-topbar-header-breadcrumb-level").should("be.visible").should("have.text", "User Management")

        cy.get(":nth-child(2) > .oxd-topbar-body-nav-tab-item").should('be.visible').click()
        cy.get(":nth-child(1) > .oxd-topbar-body-nav-tab-link").should('be.visible').click()

        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")

        cy.get(":nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon").click()
        cy.get(":nth-child(2) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon").click()
        cy.get(":nth-child(3) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon").click()

        cy.get(".orangehrm-horizontal-padding > div > .oxd-button").should("be.visible").click()

        cy.delete()
        cy.messageCheck()
    })

    it("Editing Organization", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.login()
        cy.wait(2000)

        cy.get(":nth-child(1) > .oxd-main-menu-item > .oxd-text").click()
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
        cy.get(".oxd-topbar-header-breadcrumb-module").should("be.visible").should("have.text", "Admin")
        cy.get(".oxd-topbar-header-breadcrumb-level").should("be.visible").should("have.text", "User Management")

        cy.get(":nth-child(3) > .oxd-topbar-body-nav-tab-item").should('be.visible').click()
        cy.get(":nth-child(1) > .oxd-topbar-body-nav-tab-link").should('be.visible').click()

        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewOrganizationGeneralInformation")
        cy.get(".oxd-switch-input").should("be.visible").click()

        cy.get(".oxd-textarea").should("be.visible").clear().type("{selectall}, TestOrganizationDescription")

        //cy.get(".oxd-switch-input").should("be.visible").click()

        cy.get(".oxd-button").should("be.visible").click()

        cy.messageCheck()
    })


})

