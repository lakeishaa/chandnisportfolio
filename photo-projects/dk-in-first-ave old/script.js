document.addEventListener("DOMContentLoaded", function () {
  // Load the JSON file
  fetch("/../content.json")
    .then((response) => response.json())
    .then((data) => {
      // Find the specific entry by title
      const item = data.find((entry) => entry.title === "Kost: Vanya's Room");

      // Check if item is found
      if (item) {
        // Populate the title
        document.getElementById("mainTitle").textContent = item.title;

        // Populate the description
        document.getElementById("description").querySelector("p").textContent =
          item.description;

        // Populate the date and tag
        document.getElementById("date").querySelector("p").textContent =
          item.date;
        document.getElementById("tag").querySelector("p").textContent =
          item.tag;

        // Populate audio
        const audioSource = document.getElementById("audio-source");
        audioSource.src = item.sources[0]; // Assuming the first source is the audio file

        // Load the audio
        const audioElement = document.querySelector("audio");
        audioElement.load();
      } else {
        console.error("Item not found");
      }
    })
    .catch((error) => console.error("Error loading the JSON data:", error));
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
