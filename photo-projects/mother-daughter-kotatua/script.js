document.addEventListener("DOMContentLoaded", function () {
  // Fetch the JSON data from an external file
  fetch("/../photo.json")
    .then((response) => response.json()) // Parse the JSON from the response
    .then((jsonData) => {
      // Find the specific entry where the title matches "Kost: Lakeisha's Room"
      const content = jsonData.find(
        (item) => item.title === "Mother & Daughter: Kota Tua"
      );

      if (content) {
        // Updating the title, date, tag, and description
        document.querySelector("header h1").textContent = content.title;
        document.querySelector(".one-column .box p").textContent =
          content.description;
        document.querySelectorAll(".two-columns-text .box p")[0].textContent =
          content.date;
        document.querySelectorAll(".two-columns-text .box p")[1].textContent =
          content.tag;

        // Clear out existing images and video from the two-column sections
        const twoColumnsContainer = document.querySelectorAll(
          ".two-columns .container"
        );
        twoColumnsContainer.forEach((container) => (container.innerHTML = ""));

        // Populate the images and video in the two-column sections
        content.sources.forEach((source) => {
          const boxDiv = document.createElement("div");
          boxDiv.classList.add("box");

          if (source.endsWith(".mp4")) {
            const video = document.createElement("video");
            video.setAttribute("autoplay", "");
            video.setAttribute("muted", "");
            video.setAttribute("loop", "");
            video.setAttribute("playsinline", "");
            video.style.width = "94%";
            video.style.height = "auto";
            video.controls = true;

            const sourceElement = document.createElement("source");
            sourceElement.src = source;
            sourceElement.type = "video/mp4";
            video.appendChild(sourceElement);

            boxDiv.appendChild(video);
          } else {
            const img = document.createElement("img");
            img.src = source;
            img.alt = "Image";
            img.style.width = "100%";
            img.style.height = "auto";
            img.style.objectFit = "cover";

            boxDiv.appendChild(img);
          }

          // Append to one of the .two-columns containers
          twoColumnsContainer[
            Math.floor(twoColumnsContainer.length / 2)
          ].appendChild(boxDiv);
        });
      } else {
        console.error(
          'No entry found with the title "Kost: Lakeisha\'s Room".'
        );
      }
    })
    .catch((error) => console.error("Error loading JSON:", error));
});
