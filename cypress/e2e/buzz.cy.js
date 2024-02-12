import 'cypress-file-upload';

describe("Buzz Module", () => {

    beforeEach(() => {
        cy.handleUncaughtException(); //for clearing the session storage before running test
        cy.viewport(1300, 660); //increasing the size of the page to get full view of the application
    })

    const imagePath = "C:/Users/musay/OneDrive/Desktop/cypress-automation-practice/cypress/fixtures/testingImage.jpg"

    it("Buzz Newsfeed", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.login()
        cy.wait(2000)

        cy.get(":nth-child(12) > .oxd-main-menu-item > .oxd-text").should("be.visible").click()
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz")

        cy.get(".oxd-buzz-post-input").should("be.visible").type("Musayyib Ahmed Post").should("have.value", "Musayyib Ahmed Post")
        cy.get(".orangehrm-buzz-create-post-actions > :nth-child(1)").should("have.visible").click()
        cy.get(".oxd-dialog-container-default--inner > .oxd-sheet").should("be.visible")
        cy.get(".orangehrm-modal-header > .oxd-text").should("have.text", "Share Photos")
        cy.get(".orangehrm-photo-upload-area > .oxd-text").click().attachFile(imagePath)
    })
})