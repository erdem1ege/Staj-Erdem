$(function () {
  let searchField = $("#query");
  let icon = $("#search-btn");

  searchField.animate({ width: "100%" }, 400);
  icon.animate({ right: "10px" }, 400);

  $("#search-form").submit(function (e) {
    e.preventDefault();
    search();
    console.log("Form submitted");
  });

  searchField.on("blur", function () {
    if (searchField.val() === "") {
      searchField.animate({ width: "45%" }, 400);
      icon.animate({ width: "45%" }, 400);
    }
  });
});

function search() {
  $("#results").html("");
  $("#buttons").html("");

  let q = $("#query").val();

  $.get(
    "https://www.googleapis.com/youtube/v3/search",
    {
      part: "snippet",
      q: q,
      type: "video",
      key: "AIzaSyBDNlSe4iNCx4F4B8MCm_5y1Vyz-7sa4PY",
    },
    function (data) {
      console.log(data);
      $.each(data.items, function (i, item) {
        let output = getOutput(item);
        $("#results").append(output);
      });
    }
  );
  change_background();
  function change_background() {
    $(".card-body").addClass("lemon-Chiffon");
    $("#results").addClass("lavender-mist");

    console.log($("iframe").length);

    console.log("heheheh");
  }
}

function getOutput(item) {
  let videoId = item.id.videoId;
  let title = item.snippet.title;
  let description = item.snippet.description;
  let thumb = item.snippet.thumbnails.high.url;
  let channelTitle = item.snippet.channelTitle;
  let videoDate = new Date(item.snippet.publishedAt).toLocaleDateString();

  let output = `
    <li class="mb-4 pastel-blue p-3 rounded shadow-sm">
      <div class="row">
        <div class="col-md-6">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/${videoId}" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
        </div>
        <div class="col-md-6">
          <h4>${title}</h4>
          <p><strong>Channel:</strong> ${channelTitle}</p>
          <p><strong>Published:</strong> ${videoDate}</p>
          <p>${description}</p>
        </div>
      </div>
    </li>
  `;
  return output;
}
