$(document).ready(function () {
  // Check and apply saved theme
  if (localStorage.getItem("dark-mode") === "enabled") {
    $("body").addClass("dark-mode");
  }

  // Always attach the click handler
  $("#dark-mode-toggle").on("click", function () {
    $("body").toggleClass("dark-mode");
    if ($("body").hasClass("dark-mode")) {
      localStorage.setItem("dark-mode", "enabled");
      console.log("offff");
    } else {
      localStorage.setItem("dark-mode", "disabled");
    }
  });
});
