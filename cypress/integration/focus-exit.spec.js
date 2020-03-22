describe("FocusExit e2e", function() {
  it("Closes the menu when clicking away from the menu trigger", function() {
    cy.visit("/");
    const menuButton = cy.findByText("Menu Options");
    menuButton.should("exist");
    menuButton.click();
    cy.findByText("duckduckgo").should("exist");
    cy.get("body").click();
    cy.findByText("duckduckgo").not("exist");
  });

  it("Closes the menu when tabbing off of menu", function() {
    cy.visit("/");
    cy.findByText("Menu Options").click();
    cy.findByText("duckduckgo").should("exist");
    cy.findByText("Menu Options").tab();
    cy.findByText("duckduckgo").not("exist");
  });

  it("displays banner when clicking away from the form", () => {
    cy.visit("/");
    cy.findByLabelText("Email:").click();
    cy.findByText("Submit").focus();
    cy.get("body").click();

    cy.findByText(/Focus has left the form/i).should("exist");
  });
  it("displays banner when tabbing away from the form", () => {
    cy.visit("/");
    cy.findByLabelText("Email:").click();
    cy.findByText("Submit").focus();
    cy.get("body").click();

    cy.findByText(/Focus has left the form/i).should("exist");
  });
});
