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
    saveLocalS(userSelect);
    var insBtn = $('#scapiobjid1').attr('chord', userSelect)

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

var local = [];
function saveLocalS(info) {
    local.push(info);
    localStorage.setItem("FavChord", JSON.stringify(local));
};

var getStorage = [];
function getLocalS() {
    if (localStorage.getItem("FavChord")) {
        var saveChord = $("<div>");
        var getStorage = JSON.parse(localStorage.getItem("FavChord"));
        userSelectBox.append(saveChord)
        saveChord.text("current saved " + getStorage[0]);
        console.log(typeof getStorage);
        console.log(getStorage[0]);
    } else {
        console.log("you don't have any favorites")
    }

}
getLocalS();

