var userSelect = "";
var button = $(".button")
var ddContent = $(".dropdown-content")
var userSelectBox = $("#userSelectBox")
var dditem = $(".dropdown-menu")
var instructionL = $("#instructionL")

//change location to instuction page on click
instructionL.on("click", function () {
    window.location.href = ("instruction.html")
});

//toggle list back to hidden
button.on("click", function () {
    dditem.toggle('is-active');
})

//click to save user content
ddContent.on("click", function (event) {
    userSelect = event.target.innerText
    userSelectId = event.target.id;
    dditem.toggle('is-active');
    saveLocalS(userSelect);
    // console.log(userSelect.slice(0, 1))
    var baseId = "#scapiobjid";

    // var chordAb = $('#scapiobjid1')


    // var chordA = $('#scapiobjid2')
    // .attr('chord', userSelect)
    // if (chords == userSelect) {
    // chords.toggle('is-block');


    //event.target on userselect
    // if (showedChord.show()) {
    //     showedChord.hide();
    // }

    console.log(userSelectId);
    var lastChord = (baseId + userSelectId);
    console.log(lastChord)

    var showedChord = $(baseId + userSelectId).show();




    // $(chordAb).show();
    // $(chords).css("display", "is-block")

    // } console.log(userSelect)

    // $("#soundButton").append(`<ins class="scales_chords_api" chord="${userSelect}" instrument="guitar" output="sound"></ins>`)

    // <ins class="scales_chords_api" chord="D#m(maj9)" instrument="guitar" output="sound"></ins>
    // var insBtn = $('#scapiobjid1').attr('chord', userSelect)
    // console.log($('#scapiobjid1').children())


    // https://www.scales-chords.com/chord-sounds/snd-guitar-chord-Dsm-maj9.mp3
    //TODO:Change source to current mp3 track
    getApi();
})

function getApi() {
    fetch("https://api.uberchord.com/v1/chords/" + userSelect)
        .then(function (response) {
            return response.json();

        }).then(function (data) {

            //adding api data to user screen
            //name of chord
            var name = $("#apiName");
            name.text("Chord:" + data[0].chordName);
            //what strings are being pressed on what fret down to make chord
            var strings = $("#apiStrings");
            strings.text("Strings: " + data[0].strings);
            //number of what finger to use on each string
            var fingering = $("#apiFingering");
            fingering.text("Fingering style: " + data[0].fingering);
            //Adding user select fingering diagram icon to page
            var chordIcon = $("#icon");
            $(chordIcon).attr("src", "assets/images/chordImg/" + userSelect + ".png");
            console.log(userSelect);
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
        // var saveChord = $("<div>");
        // saveChord.text("current saved " + getStorage[0]);
        // userSelectBox.append(saveChord)
        // console.log(typeof getStorage);
        // console.log(getStorage[0]);
        userSelect = JSON.parse(localStorage.getItem("FavChord"))
        getApi(userSelect);
    } else {
        userSelect = "C"
        getApi(userSelect);
        console.log("you don't have any favorites")
    }

}
getLocalS();

