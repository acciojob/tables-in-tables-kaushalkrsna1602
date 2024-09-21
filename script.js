cy.get("table").eq(1).find("th").eq(0).contains("Nested Table 2");
cy.get("table").eq(1).find("th").eq(1).contains("Column 1");
cy.get("table").eq(1).find("th").eq(2).contains("Column 2");
