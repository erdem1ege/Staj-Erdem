function gorselDegistir() {
  let img = document.getElementById("modeImage");

  if (img.src.includes("sun-blasts-a-m66-flare.jpg")) {
    img.src = "images.jpeg";
  } else {
    img.src = "sun-blasts-a-m66-flare.jpg";
  }
}
