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

  let action = [];
  $.getJSON("action.json", function (data) {
    action = data;
    renderAction(action.slice(0, 10));
  });
  function renderAction(movieList) {
    $("#movie-container1").empty();
    $.each(movieList, function (index, movie) {
      const card = `
      <div class="movie-card">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">Rating: ${movie.rating}</p>
            <p class="card-text">Çıkış tarihi:${movie.start_year}</p>
            <p class="card-text">Genre: ${movie.genre.join(", ")}</p>

          </div>
        </div>
      </div>
    `;

      $("#movie-container1").append(card);
    });
  }
  renderAction();
  $("#scroll-right").click(() => {
    $("#movie-container1").scrollLeft("+=" + 200);
  });
  $("#show-more1").on("click", function () {
    window.location.href = "show_action.html";
  });
  let dram = [];
  $.getJSON("drama.json", function (data) {
    dram = data;
    renderDram(dram.slice(0, 10));
  });

  function renderDram(dramList) {
    $("#dram-container").empty();
    $.each(dramList, function (index, dram) {
      const card = `
      <div class="movie-card">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${dram.title}</h5>
            <p class="card-text">Rating: ${dram.rating}</p>
            <p class="card-text">Çıkış tarihi:${dram.start_year}</p>
            <p class="card-text">Genre: ${dram.genre.join(", ")}</p>
          </div>
        </div>
      </div>
    `;
      $("#dram-container").append(card);
    });
  }

  // Bind scroll and button click OUTSIDE the render function
  $("#scroll-right").click(() => {
    $("#dram-container").scrollLeft("+=" + 200);
  });

  $("#show_dram").on("click", function () {
    window.location.href = "show_dram.html";
  });
  let adventure = [];
  $.getJSON("adventure.json", function (data) {
    adventure = data;
    renderAdventure(adventure.slice(0, 10));
  });
  function renderAdventure(adventureList) {
    $("#adventure-container").empty();
    $.each(adventureList, function (index, adventure) {
      const card = `
      <div class="movie-card">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${adventure.title}</h5>
            <p class="card-text">Rating: ${adventure.rating}</p>
            <p class="card-text">Çıkış tarihi:${adventure.start_year}</p>
            <p class="card-text">Genre: ${adventure.genre.join(", ")}</p>
          </div>
        </div>
      </div>
    `;
      $("#adventure-container").append(card);
    });
  }
  $("#scroll-right").click(() => {
    $("#adventure-container").scrollLeft("+=" + 200);
  });
  $("#show_adventure").on("click", function () {
    window.location.href = "show_adventure.html";
  });
  let comedy = [];
  $.getJSON("comedy.json", function (data) {
    comedy = data;
    renderComedy(comedy.slice(0, 10));
  });
  function renderComedy(comedylist) {
    $("#comedy-container").empty();
    $.each(comedylist, function (index, comedy) {
      const card = `
      <div class="movie-card">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${comedy.title}</h5>
            <p class="card-text">Rating: ${comedy.rating}</p>
            <p class="card-text">Çıkış tarihi:${comedy.start_year}</p>
            <p class="card-text">Genre: ${comedy.genre.join(", ")}</p>
          </div>
        </div>
      </div>
    `;
      $("#comedy-container").append(card);
    });
  }
  $("#scroll-right").click(() => {
    $("comedy-container").scrollLeft("+=" + 200);
  });
  $("#comedy_button").on("click", function () {
    window.location.href = "show_comedy.html";
  });
  let fantasy = [];
  $.getJSON("fantasy.json", function (data) {
    fantasy = data;
    renderFantasy(fantasy.slice(0, 10));
  });
  function renderFantasy(fantasyList) {
    $("fantasy-container").empty();
    $.each(fantasyList, function (index, fantasy) {
      const card = `
      <div class="movie-card">
        <div class="card ">
          <div class="card-body">
            <h5 class="card-title">${fantasy.title}</h5>
            <p class="card-text">Rating: ${fantasy.rating}</p>
                   <p class="card-text">Çıkış tarihi:${fantasy.start_year}</p>
            <p class="card-text">Genre: ${fantasy.genre.join(", ")}</p>
          </div>
        </div>
      </div>
    `;

      $("#fantasy-container").append(card);
    });
  }
  $("#scroll-right").click(() => {
    $("#fantasy-container").scrollLeft("=+" + 200);
  });
  $("#fantasy-button").on("click", function () {
    window.location.href = "show_fantasy.html";
  });
  let horror = [];
  $.getJSON("horror.json", function (data) {
    horror = data;
    renderHorror(horror.slice(0, 10));
  });
  function renderHorror(horrorList) {
    $("#horror-container").empty();
    $.each(horrorList, function (index, horrors) {
      const card = `
      <div class="movie-card">
        <div class="card ">
          <div class="card-body">
            <h5 class="card-title">${horrors.title}</h5>
            <p class="card-text">Rating: ${horrors.rating}</p>
                   <p class="card-text">Çıkış tarihi:${horrors.start_year}</p>
            <p class="card-text">Genre: ${horrors.genre.join(", ")}</p>
          </div>
        </div>
      </div>
    `;
      $("#horror-container").append(card);
    });
  }
  $("#scroll-right").click(() => {
    $("#horror-container").scrollLeft("=+" + 200);
  });
  $("#horror-button").on("click", function () {
    window.location.href = "show_horror.html";
  });
  let mystery = [];
  $.getJSON("mystery.json", function (data) {
    mystery = data;
    renderMystery(mystery.slice(0, 10));
  });
  function renderMystery(mysteryList) {
    $("#mystery-container").empty();
    $.each(mysteryList, function (index, mysteryS) {
      const card = `
      <div class="movie-card">
        <div class="card ">
          <div class="card-body">
            <h5 class="card-title">${mysteryS.title}</h5>
            <p class="card-text">Rating: ${mysteryS.rating}</p>
                   <p class="card-text">Çıkış tarihi:${mysteryS.start_year}</p>
            <p class="card-text">Genre: ${mysteryS.genre.join(", ")}</p>
          </div>
        </div>
      </div>
    `;
      $("#mystery-container").append(card);
    });
  }
  $("#scroll-right").click(() => {
    $("#mystery-container").scrollLeft("=+" + 200);
  });
  $("#button_mystery").on("click", function () {
    window.location.href = "show_mystery.html";
  });
  let romance = [];
  $.getJSON("romance.json", function (data) {
    romance = data;
    renderRomance(romance.slice(0, 10));
  });
  function renderRomance(romanceList) {
    $("#romance-container").empty();
    $.each(romanceList, function (index, romances) {
      const card = `
      <div class="movie-card">
        <div class="card ">
          <div class="card-body">
            <h5 class="card-title">${romances.title}</h5>
            <p class="card-text">Rating: ${romances.rating}</p>
                   <p class="card-text">Çıkış tarihi:${romances.start_year}</p>
            <p class="card-text">Genre: ${romances.genre.join(", ")}</p>
          </div>
        </div>
      </div>
    `;
      $("#romance-container").append(card);
    });
  }
  $("#scroll-right").click(() => {
    $("#romance-container").scrollLeft("=+" + 200);
  });
  $("#romance-button").on("click", function () {
    window.location.href = "show_romance.html";
  });
  let scifi = [];
  $.getJSON("sci-fi.json", function (data) {
    console.log("Loaded action data:", data);
    scifi = data;
    renderSCİFİ(scifi.slice(0, 10));
  });

  function renderSCİFİ(movieList) {
    $("#sci_fi-container").empty();
    $.each(movieList, function (index, scifi) {
      const card = `
      <div class="movie-card">
        <div class="card ">
          <div class="card-body">
            <h5 class="card-title">${scifi.title}</h5>
            <p class="card-text">Rating: ${scifi.rating}</p>
                   <p class="card-text">Çıkış tarihi:${scifi.start_year}</p>
            <p class="card-text">Genre: ${scifi.genre.join(", ")}</p>
          </div>
        </div>
      </div>
    `;

      $("#sci_fi-container").append(card);
    });
  }
  $("#scroll-right").click(() => {
    $("#sci_fi-container").scrollLeft("=+" + 200);
  });
  $("#sci_fi-btn").on("click", function () {
    window.location.href = "show_sci_fi.html";
  });
  let slice = [];
  $.getJSON("slice_of_life.json", function (data) {
    slice = data;
    renderSci_fi(slice.slice(0, 10));
  });
  function renderSci_fi(sliceList) {
    $("#sliceOfLife-container").empty();

    $.each(sliceList, function (index, slices) {
      const card = `
      <div class="movie-card">
        <div class="card ">
          <div class="card-body">
            <h5 class="card-title">${slices.title}</h5>
            <p class="card-text">Rating: ${slices.rating}</p>
                   <p class="card-text">Çıkış tarihi:${slices.start_year}</p>
            <p class="card-text">Genre: ${slices.genre.join(", ")}</p>
          </div>
        </div>
      </div>
    `;
      $("#sliceOfLife-container").append(card);
    });
  }
  $("#scroll-right").click(() => {
    $("#sliceOfLife-container").scrollLeft("=+" + 200);
  });
  $("#slice-btn").on("click", function () {
    window.location.href = "show_slice.html";
  });
  let greatest = [];
  $.getJSON("animes.json", function (data) {
    greatest = data;
    renderGreatest(greatest.slice(0, 10));
  });
  function renderGreatest(greatestList) {
    $("#movie-container").empty();
    $.each(greatestList, function (index, greatests) {
      const card = `
      <div class="movie-card">
        <div class="card ">
          <div class="card-body">
            <h5 class="card-title">${greatests.title}</h5>
            <p class="card-text">Rating: ${greatests.rating}</p>
            <p class="card-text">Genre: ${greatests.genre.join(", ")}</p>
          </div>
        </div>
      </div>
    `;
      $("#movie-container").append(card);
    });
  }
  $("#scroll-right").click(() => {
    $("#movie-container").scrollLeft("=+" + 200);
  });
  $("#show-more").on("click", function () {
    window.location.href = "show_goat.html";
  });
  let sports = [];
  $.getJSON("sports.js", function (data) {
    sports = data;
    renderSports(sports.slice(0, 10));
  });
  let spor = [];
  $.getJSON("sports.json", function (data) {
    console.log("Loaded action data:", data);
    spor = data;
    renderMovies(spor);
  });

  function renderMovies(movieList) {
    $("#sports-container").empty();
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

      $("#sports-container").append(card);
    });
  }
  $("#scroll-right").click(() => {
    $("#sports-container").scrollLeft("=+" + 200);
  });
  $("#sports-button").on("click", function () {
    window.location.href = "sports.html";
  });
  let Super = [];
  $.getJSON("supernatural.json", function (data) {
    Super = data;

    renderSuper(Super.slice(0, 10));
  });
  function renderSuper(superList) {
    $("#supernatural-container").empty();
    $.each(superList, function (index, supers) {
      const card = `
      <div class="movie-card">
        <div class="card ">
          <div class="card-body">
            <h5 class="card-title">${supers.title}</h5>
            <p class="card-text">Rating: ${supers.rating}</p>
                   <p class="card-text">Çıkış tarihi:${supers.start_year}</p>
            <p class="card-text">Genre: ${supers.genre.join(", ")}</p>
          </div>
        </div>
      </div>
    `;
      $("#supernatural-container").append(card);
    });
  }
  $("#scroll-right").click(() => {
    $("#supernatural-container").scrollLeft("=+" + 200);
  });
  $("#super-btn").on("click", function () {
    window.location.href = "super.html";
  });

  function applyDarkMode(isDark) {
    $("body").toggleClass("dark-mode", isDark);
    $("p").toggleClass("text-light");

    $("#side-bar").removeClass("btn-light").toggleClass("side-bar-dark");
    $("button").toggleClass("dark-mode");
    $(".offcanvas-body").toggleClass("dark-mode");
    $(".offcanvas-header").toggleClass("dark-mode");
    $("#popupBox").toggleClass("dark-mode");
    $(".result-card").toggleClass("dark-mode");
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
