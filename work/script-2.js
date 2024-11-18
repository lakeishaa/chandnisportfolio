// Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");

// Function to filter cards based on filter buttons
const filterCards = (e) => {
  document.querySelector("#filter-buttons .active").classList.remove("active");
  e.target.classList.add("active");

  filterableCards.forEach((card) => {
    // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
    if (
      card.dataset.name === e.target.dataset.filter ||
      e.target.dataset.filter === "all"
    ) {
      return card.classList.replace("hide", "show");
    }
    card.classList.add("hide");
  });
};

filterButtons.forEach((button) =>
  button.addEventListener("click", filterCards)
);

// Set active filter based on URL parameter
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

if (category) {
  const activeButton = document.querySelector(
    `button[data-filter="${category}"]`
  );
  if (activeButton) {
    activeButton.classList.add("active");
    filterCards({ target: activeButton });
  }
} else {
  // Set "all" as active if no category is specified
  const allButton = document.querySelector('button[data-filter="all"]');
  if (allButton) {
    allButton.classList.add("active");
    filterCards({ target: allButton });
  }
}
