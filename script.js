() => {
    // Ensure there are 5 tables
    cy.get("table").should("have.length", 5);

    // Target the second nested table (index 1, since the index is zero-based)
    cy.get("table").eq(1).within(() => {
        // Assert the presence of th elements and their content
        cy.get("th").eq(0).contains("Nested Table 2");
        cy.get("th").eq(1).contains("Column 1");
        cy.get("th").eq(2).contains("Column 2");

        // Check if there are exactly 2 td elements inside the table
        cy.get("td").should("have.length", 2);
    });
}
