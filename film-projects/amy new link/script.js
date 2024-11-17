document.addEventListener("DOMContentLoaded", function () {
  // First part: Fetch the JSON data and update the page based on title
  const targetTitle = "Amy"; // Change this to match the desired title

  // Fetch the JSON data from an external file
  fetch("../../film.json")
    .then((response) => response.json()) // Parse the JSON from the response
    .then((jsonData) => {
      // Find the specific entry where the title matches the targetTitle
      const content = jsonData.find((item) => item.title === targetTitle);

      if (content) {
        // Update the page title and various content fields
        document.title = content.title;
        document.querySelector("header h1").textContent = content.title;
        document.querySelector(".one-column .box p").textContent =
          content.description;
        document.querySelector(
          ".three-columns .container .box:nth-child(1) p"
        ).textContent = content.date;
        document.querySelector(
          ".three-columns .container .box:nth-child(3) p"
        ).textContent = content.tag;
        document.querySelector(
          ".three-columns .container .box:nth-child(2) p"
        ).textContent = content.role;

        // Set up the iframe video source
        const iframe = document.querySelector("iframe");
        if (iframe && content.sources.length > 0) {
          iframe.src = content.sources[0];
        }
      } else {
        console.error(`No entry found with the title "${targetTitle}".`);
      }
    })
    .catch((error) => console.error("Error loading JSON:", error));

  // Second part: Update the "All" and "Category" links dynamically
  const category = "film"; // Adjust this depending on the page (e.g., "photo", "music", etc.)

  // Get the All link and update it based on the category
  const allWorksLink = document.getElementById("all-works-link");
  const categoryLink = document.getElementById("category-link");

  // Set the href for the "All" works link based on the category
  allWorksLink.href = `../../work/index.html?category=${category}`;

  // Optionally, change the link text for the category
  categoryLink.textContent = `${
    category.charAt(0).toUpperCase() + category.slice(1)
  } Works`;

  // Update the category link to point to the correct page for that category
  categoryLink.href = `../../work/${category}-index.html`;
});
