document.addEventListener("DOMContentLoaded", function () {
    const garageHeader = document.querySelector(".garage-header");
    const titles = document.querySelector(".titles");

    function toggleTitles() {
      titles.style.display = (titles.style.display === "none" || titles.style.display === "") ? "flex" : "";
    }

    function handleResize() {
      if (window.innerWidth <= 768) {
        garageHeader.addEventListener("click", toggleTitles);
      } else {
        garageHeader.removeEventListener("click", toggleTitles);
        titles.style.display = ""; // Reset titles to an empty string
      }
    }

    // Initial setup
    handleResize();

    // Listen for window resize and update the click event accordingly
    window.addEventListener("resize", handleResize);
  });