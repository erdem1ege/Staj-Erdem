function sendShout() {
  const message = document.getElementById("message").value;
  if (!message.trim()) return;

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "shout.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onload = function () {
    if (xhr.status === 200) {
      document.getElementById("message").value = "";
      loadShouts();
    }
  };
  xhr.send("message=" + encodeURIComponent(message));
}

function loadShouts() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "messages.txt", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      document.getElementById("shoutbox").innerHTML = xhr.responseText.replace(
        /\n/g,
        "<br>"
      );
    }
  };
  xhr.send();
}

// Load shouts every 2 seconds
setInterval(loadShouts, 2000);
window.onload = loadShouts;
