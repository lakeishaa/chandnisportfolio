document.addEventListener("DOMContentLoaded", function () {
  // Load the JSON file
  fetch("/../photo.json")
    .then((response) => response.json())
    .then((data) => {
      // Find the specific entry by title
      const item = data.find(
        (entry) => entry.title === "Extraterrestrial Grrls Vol. III"
      );

      // Check if item is found
      if (item) {
        // Populate the description
        document.getElementById("description").querySelector("p").textContent =
          item.description;
        document.getElementById("mainTitle").textContent = item.title;
        // Populate the date and tag
        document.getElementById("date").querySelector("p").textContent =
          item.date;
        document.getElementById("tag").querySelector("p").textContent =
          item.tag;
        // Populate images
        const imageContainer = document.getElementById("image-container");
        imageContainer.innerHTML = ""; // Clear any existing content

        item.sources.forEach((source) => {
          const imgElement = document.createElement("img");
          imgElement.className = "image-one"; // Use your CSS class
          imgElement.src = source; // Set the source URL
          imgElement.alt = "Image"; // Set an alt text (customize as needed)

          // Append the image element to the container
          imageContainer.appendChild(imgElement);
        });
      } else {
        console.error("Item not found");
      }
    })
    .catch((error) => console.error("Error loading the JSON data:", error));
});
