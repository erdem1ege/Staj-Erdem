$(document).ready(function () {
  $("#openPopUp").on("click", function () {
    $("#popUpOverlay").css("display", "flex");
    $("#loadingGif").hide();
    $(".result-card").empty();

    $("#resultBox").html(`
      <button id="shuffleBtn">Shuffle</button>
      <div id="resultContent"></div>
    `);
  });

  $("#popUpOverlay").on("click", function (e) {
    if (e.target === this) {
      $(this).hide();
    }
  });

  function shuffleAndDisplay() {
    $("#loadingGif").show();

    $.getJSON("all_mixed.json", function (data) {
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

  $("#popUpOverlay").on("click", "#shuffleBtn, #reshuffleBtn", function () {
    shuffleAndDisplay();
  });
});
