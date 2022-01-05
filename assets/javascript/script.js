var userSelect = "";
var urlRoot = "https:api.uberchord.com/v1/chords/";
var button = $(".button")
var ddContent = $(".dropdown-content")


button.on("click", function () {
    var dditem = $(".dropdown-menu")
    dditem.toggle('is-active');
})


ddContent.on("click", function (event) {
    userSelect = event.target.innerText
    console.log(userSelect)

    $.ajax({
        url: urlRoot + userSelect,
        // url: "https:api.uberchord.com/v1/chords/F_maj7",
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })
})