// JavaScript to handle filter functionality and card visibility
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll("#filter-buttons button");
  const cards = document.querySelectorAll("#filterable-cards .card");

  // Initialize by showing all cards by default
  showAllCards();

  // Add event listeners for each filter button
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove the active class from all filter buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add the active class to the clicked button
      this.classList.add("active");

      const filterCategory = this.getAttribute("data-filter"); // Assuming you have data-filter attributes

      // Show or hide cards based on category
      filterCards(filterCategory);
    });
  });

  // Function to show all cards
  function showAllCards() {
    cards.forEach((card) => {
      card.classList.add("show"); // Ensure all cards are visible
    });
  }

  // Function to filter cards based on the selected category
  function filterCards(category) {
    cards.forEach((card) => {
      // If category is 'all', show all cards
      if (category === "all" || card.classList.contains(category)) {
        card.classList.add("show"); // Show matching cards
      } else {
        card.classList.remove("show"); // Hide non-matching cards
      }
    });
  }
});
