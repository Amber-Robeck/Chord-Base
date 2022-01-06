var userSelect = "";
var button = $(".button")
var ddContent = $(".dropdown-content")
var userSelectBox = $("#userSelectBox")
var dditem = $(".dropdown-menu")

// $(<"p">)
userSelectBox.text("It's working")

button.on("click", function () {
    dditem.toggle('is-active');
})


ddContent.on("click", function (event) {
    userSelect = event.target.innerText
    console.log(userSelect)
    dditem.toggle('is-active');

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
            //Adding user select fingering diagram icon to page
            var chordIcon = $("#icon")
            $(chordIcon).attr("src", "https://chordify.net/img/diagrams/guitar/" + userSelect + ".png");

        })
})

