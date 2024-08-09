describe("Form validation and modal opening", () => {
  it("should open the modal after form validation", () => {
    // Navigate to form page
    cy.visit("/");

    // Fill in the form

    // Set employee first name
    cy.get('input[data-cy="employee-field-firstName"]').type("John");
    // Set employee last name
    cy.get('input[data-cy="employee-field-lastName"]').type("Doe");

    // Set employee birth date
    cy.get('[data-cy="employee-field-birthDate"]').click();

    // Navigate to the year 2023
    cy.get(".react-datepicker__current-month").then(($currentMonth) => {
      const currentYear = $currentMonth.text().split(" ")[1];
      const targetYear = "2023";

      // navigate to previous year if current year is after target year
      if (currentYear > targetYear) {
        for (let i = 0; i < currentYear - targetYear; i++) {
          cy.get(".react-datepicker__navigation--previous").click();
        }
      } else if (currentYear < targetYear) {
        // navigate to next year if current year is after target year
        for (let i = 0; i < targetYear - currentYear; i++) {
          cy.get(".react-datepicker__navigation--next").click();
        }
      }
    });

    // Navigate to the month October
    cy.get(".react-datepicker__current-month").then(($currentMonth) => {
      const currentMonth = $currentMonth.text().split(" ")[0];
      const targetMonth = "October";
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const currentMonthIndex = monthNames.indexOf(currentMonth);
      const targetMonthIndex = monthNames.indexOf(targetMonth);

      if (currentMonthIndex > targetMonthIndex) {
        for (let i = 0; i < currentMonthIndex - targetMonthIndex; i++) {
          cy.get(".react-datepicker__navigation--previous").click();
        }
      } else if (currentMonthIndex < targetMonthIndex) {
        for (let i = 0; i < targetMonthIndex - currentMonthIndex; i++) {
          cy.get(".react-datepicker__navigation--next").click();
        }
      }
    });

    // Select the 23rd day
    cy.get(".react-datepicker__day--023").click();

    // Set employee start date
    cy.get('[data-cy="employee-field-startDate"]').click();

    // Navigate to the month March
    cy.get(".react-datepicker__current-month").then(($currentMonth) => {
      const currentMonth = $currentMonth.text().split(" ")[0];
      const targetMonth = "March";
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const currentMonthIndex = monthNames.indexOf(currentMonth);
      const targetMonthIndex = monthNames.indexOf(targetMonth);

      if (currentMonthIndex > targetMonthIndex) {
        for (let i = 0; i < currentMonthIndex - targetMonthIndex; i++) {
          cy.get(".react-datepicker__navigation--previous").click();
        }
      } else if (currentMonthIndex < targetMonthIndex) {
        for (let i = 0; i < targetMonthIndex - currentMonthIndex; i++) {
          cy.get(".react-datepicker__navigation--next").click();
        }
      }
    });

    // Select the 15rd day
    cy.get(".react-datepicker__day--015").click();

    // Set employee street
    cy.get('input[data-cy="employee-field-street"]').type("123 Maple Street");
    // Set employee city
    cy.get('input[data-cy="employee-field-city"]').type("Springfield");

    // Set employee state
    cy.get('[data-cy="employee-field-state"]').click();
    cy.get('[data-cy="dropdown-menu-state"]').should("be.visible");
    cy.get('[data-cy="dropdown-item-state-0"]').click();

    // Set employee zip code
    cy.get('input[data-cy="employee-field-zipCode"]').type(62704);

    // Set employee department
    cy.get('[data-cy="employee-field-department"]').click();
    cy.get('[data-cy="dropdown-menu-department"]').should("be.visible");
    cy.get('[data-cy="dropdown-item-department-0"]').click();

    // Submit the form
    cy.get('[data-cy="save"]').click();

    // Check if the modal is opened
    cy.get(".jh-modal-modal").should("be.visible");

    // Wait to see the result. Remove for prod
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
  });
});
