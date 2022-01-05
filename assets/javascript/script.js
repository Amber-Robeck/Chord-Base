var userSelect = "";
// var urlRootEl = "https:api.uberchord.com/v1/chords/";
var button = $(".button")
var ddContent = $(".dropdown-content")
var userSelectBox = $("#userSelectBox")

// $(<"p">)
userSelectBox.text("It's working")

button.on("click", function () {
    var dditem = $(".dropdown-menu")
    dditem.toggle('is-active');
})


ddContent.on("click", function (event) {
    userSelect = event.target.innerText
    console.log(userSelect)

    fetch("https://api.uberchord.com/v1/chords/" + userSelect.slice(0, 1))
        .then(function (response) {
            return response.json();
            // console.log(response.json());
        }).then(function (data) {
            console.log(data)
            //number of what finger to use on each string
            console.log(data[0].fingering)
            //what strings are being pressed on what fret down to make chord
            console.log(data[0].strings)
            //adding api data to user screen
            userSelectBox.text("Fingering style: " + data[0].fingering + " Strings: " + data[0].strings)
            //adding userselect to img currently only working on c and f as they are the only img this site has
            //TODO: find a source for all images
            var chordIcon = $("#icon")
            // $(chordIcon).attr("src", "https://api.uberchord.com/examples/" + userSelect + ".svg");
            $(chordIcon).attr("src", "https://chordify.net/img/diagrams/guitar/" + userSelect + ".png");
            // https://chordify.net/img/diagrams/guitar/A_maj.png

            //alert(userSelect.slice(0, 1));
            // alert(userSelect.substring(1));
        })
})

