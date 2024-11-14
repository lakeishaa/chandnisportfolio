document.addEventListener("DOMContentLoaded", function () {
  // Define the title you want to match in the JSON
  const targetTitle = "Mini Vlogs: Episode 2: Bandung Bound Baby"; // Change this to match the desired title

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
});
