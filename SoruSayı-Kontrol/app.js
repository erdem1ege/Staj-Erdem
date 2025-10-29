$(document).ready(function () {
  const total = 5;
  let results = 0;

  const correctAnswers = {
    q1: "a",
    q2: "b",
    q3: "c",
    q4: "d",
    q5: "e",
  };

  $("#hehehe-btn").click(function () {
    results = 0;

    for (let i = 1; i <= total; i++) {
      const selected = $(`input[name="q${i}"]:checked`).val();
      if (selected === correctAnswers[`q${i}`]) {
        results++;
      }
    }

    alert("You scored " + results + "out of " + total);
  });
});
