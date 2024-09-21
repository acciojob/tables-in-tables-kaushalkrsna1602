describe('Nested Tables Test', () => {
    it('should correctly find Nested Table 2 and its columns', () => {
        cy.visit('http://localhost:3000'); // adjust to your actual URL

        // Check if the tables are present and rendered
        cy.get("table").should("have.length", 5);

        // Explicitly get the second table (index 1) and check the headers
        cy.get("table").eq(1).within(() => {
            cy.get("th").eq(0).should("contain.text", "Nested Table 2");
            cy.get("th").eq(1).should("contain.text", "Column 1");
            cy.get("th").eq(2).should("contain.text", "Column 2");
        });
    });

    it('should correctly find Nested Table 4 and its background color', () => {
        // Check the content of Nested Table 4
        cy.get("table").eq(3).within(() => {
            cy.get("th").should("contain.text", "Nested Table 4");
            cy.get("td").contains("HTML").should("have.css", "background-color", "rgb(0, 0, 0)"); // assuming black background
        });
    });
});
