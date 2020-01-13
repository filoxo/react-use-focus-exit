describe("FocusExit e2e", function() {
  it("Closes the menu when clicking away from the menu trigger", function() {
    cy.visit("/");
    const menuButton = cy.queryByText("Menu Options");
    menuButton.should("exist");
    menuButton.click();
    cy.queryByText("duckduckgo").should("exist");
    cy.get("body").click();
    cy.queryByText("duckduckgo").not("exist");
  });

  it("Closes the menu when tabbing off of menu", function() {
    cy.visit("/");
    cy.queryByText("Menu Options").click();
    cy.queryByText("duckduckgo").should("exist");
    cy.queryByText("Menu Options").tab();
    cy.queryByText("duckduckgo").not("exist");
  });

  it("displays banner when clicking away from the form", () => {
    cy.visit("/");
    cy.findByLabelText("Email:").click();
    cy.findByText("Submit").focus();
    cy.get("body").click();

    cy.queryByText(/Focus has left the form/i).should("exist");
  });
  it("displays banner when tabbing away from the form", () => {
    cy.visit("/");
    cy.findByLabelText("Email:").click();
    cy.findByText("Submit").focus();
    cy.get("body").click();

    cy.queryByText(/Focus has left the form/i).should("exist");
  });
});
