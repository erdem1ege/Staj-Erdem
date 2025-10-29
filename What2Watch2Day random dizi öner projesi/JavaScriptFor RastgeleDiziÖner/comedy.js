$(document).ready(function () {
  $("#search-toggle").click(function () {
    $("#search-form").slideDown("fast", function () {
      console.log("Search bar toggled");
      if ($(this).is(":visible")) {
        $(this).find("input").focus();
      }
    });
  });

  $(document).click(function (e) {
    if (!$(e.target).closest("#search-toggle, #search-form").length) {
      $("#search-form").slideUp("fast");
    }
  });

  $("#search-form").submit(function (e) {
    e.preventDefault();
    const query = $(this).find("input").val().trim();
    const queryToLower = query.toLowerCase();
    console.log("Searching for:", queryToLower);
  });
  let comedy = [];
  $.getJSON("comedy.json", function (data) {
    console.log("Loaded action data:", data);
    comedy = data;
    renderMovies(comedy.slice(0));
  });
  function renderMovies(movieList) {
    $("#movie-container").empty();
    $.each(movieList, function (index, movie) {
      const card = `
      <div class="movie-card">
        <div class="card ">
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">Rating: ${movie.rating}</p>
                   <p class="card-text">Çıkış tarihi:${movie.start_year}</p>
            <p class="card-text">Genre: ${movie.genre.join(", ")}</p>
          </div>
        </div>
      </div>
    `;

      $("#movie-container").append(card);
    });
  }

  $("#anasayfa-btn1").on("click", function () {
    window.location.href = "index.html";
  });
  $("#anasayfa-btn2").on("click", function () {
    window.location.href = "index.html";
  });
  function applyDarkMode(isDark) {
    $("body").toggleClass("dark-mode", isDark);
    $("p").toggleClass("text-light");
    $("#popupBox").toggleClass("dark-mode");
    $(".result-card").toggleClass("dark-mode");
    $("#side-bar").removeClass("btn-light").toggleClass("side-bar-dark");
    $("button").toggleClass("dark-mode");
    $(".offcanvas-body").toggleClass("dark-mode");
    $(".offcanvas-header").toggleClass("dark-mode");
    $("#dark-mode").attr(
      "src",
      isDark ? "Medium Brightness.png" : "Low Brightness.png"
    );
    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
  }

  $("#dark-toggle").on("click", function () {
    const isDark = !$("body").hasClass("dark-mode");
    applyDarkMode(isDark);
  });

  // On page load
  $(document).ready(function () {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "enabled") {
      applyDarkMode(true);
    }
  });
});
