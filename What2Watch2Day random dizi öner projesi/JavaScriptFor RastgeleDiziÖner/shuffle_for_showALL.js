$(document).ready(function () {
  // Show popup when openPopup button is clicked
  $("#openPopUp1").on("click", function () {
    $("#popUpOverlay").css("display", "flex");
    $("#loadingGif").hide();
    $(".result-card").empty();

    // Always show the Shuffle button
    $("#resultBox").html(`
      <button id="shuffleBtn">Shuffle</button>
      <div id="resultContent"></div>
    `);
  });

  // Hide popup when clicking outside the popup box
  $("#popUpOverlay").on("click", function (e) {
    if (e.target === this) {
      $(this).hide();
    }
  });

  // Shuffle logic
  function shuffleAndDisplay() {
    $("#loadingGif").show();

    $.getJSON("animes.json", function (data) {
      const randomItem = data[Math.floor(Math.random() * data.length)];

      setTimeout(function () {
        $("#loadingGif").hide();

        const title = randomItem.title || "Unknown Title";
        const rating = randomItem.rating || "N/A";
        const genre = randomItem.genre || "Unknown Genre";

        $("#resultContent").html(`
          <div class="result-card">
            <h3>${title}</h3>
            <p><strong>Rating:</strong> ${rating}</p>
            <p><strong>Genre:</strong> ${genre}</p>
            
          </div>
        `);
      }, 1500);
    });
  }

  // Delegate both shuffle and reshuffle clicks
  $("#popUpOverlay").on("click", "#shuffleBtn, #reshuffleBtn", function () {
    shuffleAndDisplay();
  });
});
