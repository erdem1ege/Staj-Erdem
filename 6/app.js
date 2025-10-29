$(document).ready(function () {
  const $accordion = $(".accordion");
  const $questions = $(".question");

  // Toggle FAQ visibility
  $("#show-faq").on("click", function () {
    $accordion.toggleClass("hidden");
    $(this).text($accordion.hasClass("hidden") ? "Show FAQ" : "Hide FAQ");
  });

  // Accordion logic
  $questions.on("click", function () {
    $(".answer").slideUp(); // Close all
    const $answer = $(this).next(".answer");
    if (!$answer.is(":visible")) {
      $answer.slideDown();
    }
  });
});
