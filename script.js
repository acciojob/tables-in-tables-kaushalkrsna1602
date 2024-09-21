describe('Nested Tables Test', () => {
    it('should correctly find Nested Table 2 and its columns', () => {
        cy.visit('http://localhost:3000'); // adjust the URL to where the HTML is hosted
        
        // Check the total number of tables
        cy.get("table").should("have.length", 5); // including all main and nested tables

        // Find the second nested table and check its content
        cy.get("table").eq(1).within(() => {
            cy.get("th").eq(0).contains("Nested Table 2");
            cy.get("th").eq(1).contains("Column 1");
            cy.get("th").eq(2).contains("Column 2");
        });
    });

    it('should check Nested Table 4 with background color', () => {
        cy.get("table").eq(3).within(() => {
            cy.get("th").contains("Nested Table 4");
            cy.get("td").contains("HTML").should("have.class", "highlighted");
        });
    });
});
