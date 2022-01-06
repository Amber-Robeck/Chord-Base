var userSelect = "";
var button = $(".button")
var ddContent = $(".dropdown-content")
var userSelectBox = $("#userSelectBox")
var dditem = $(".dropdown-menu")
var instructionL = $("#instructionL")

// $(<"p">)
userSelectBox.text("It's working")

instructionL.on("click", function () {
    window.location.href = ("instruction.html")

});

button.on("click", function () {
    dditem.toggle('is-active');
})


ddContent.on("click", function (event) {
    userSelect = event.target.innerText
    console.log(userSelect)
    dditem.toggle('is-active');
    saveLocalS(userSelect);
    var insBtn = $('#scapiobjid1').attr('chord', userSelect)
    getApi();

    // fetch("https://api.uberchord.com/v1/chords/" + userSelect.slice(0, 1))
    //     .then(function (response) {
    //         return response.json();
    //         // console.log(response.json());
    //     }).then(function (data) {
    //         console.log(data)
    //         //number of what finger to use on each string
    //         console.log(data[0].fingering)
    //         //what strings are being pressed on what fret down to make chord
    //         console.log(data[0].strings)
    //         //adding api data to user screen
    //         userSelectBox.text("Fingering style: " + data[0].fingering + " Strings: " + data[0].strings)
    //         //Adding user select fingering diagram icon to page
    //         // var chordIcon = $("#icon")
    //         // $(chordIcon).attr("src", "https://chordify.net/img/diagrams/guitar/" + userSelect + ".png");
    //         var chordIcon = $("#icon")
    //         $(chordIcon).attr("src", "assets/images/chordImg/" + userSelect.slice(0, 1) + ".png");


    //     })
})

function getApi() {



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
            // var chordIcon = $("#icon")
            // $(chordIcon).attr("src", "https://chordify.net/img/diagrams/guitar/" + userSelect + ".png");
            var chordIcon = $("#icon")
            $(chordIcon).attr("src", "assets/images/chordImg/" + userSelect.slice(0, 1) + ".png");


        })
}

var local = [];
function saveLocalS(info) {
    if (localStorage.getItem("FavChord")) {
        local.splice(0, 1, info);
        localStorage.setItem("FavChord", JSON.stringify(local[0]));
    } else {
        local.push(info);
        localStorage.setItem("FavChord", JSON.stringify(local[0]));
    }
};

var getStorage = [];
function getLocalS() {
    if (localStorage.getItem("FavChord")) {
        var getStorage = JSON.parse(localStorage.getItem("FavChord"));
        var saveChord = $("<div>");
        saveChord.text("current saved " + getStorage[0]);
        userSelectBox.append(saveChord)
        // console.log(typeof getStorage);
        // console.log(getStorage[0]);
        userSelect = JSON.parse(localStorage.getItem("FavChord"))
        getApi(userSelect);
    } else {
        userSelect = "C"
        getApi(userSelect);
        // var saveChord = $("<div>");
        // saveChord.text("current saved " + getStorage[0]);
        console.log("you don't have any favorites")
    }

}
getLocalS();

