var userSelect = "";
var button = $(".button")
var ddContent = $(".dropdown-content")
var userSelectBox = $("#userSelectBox")
var dditem = $(".dropdown-menu")
var instructionL = $("#instructionL")
var chordsListByUser = [];

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
    userSelect = event.target.innerText;
    userSelectId = event.target.id;
    // console.log(userSelect, userSelectId);
    dditem.toggle('is-active');
    saveLocalS(userSelect);
    var baseId = "scapiobjid";
    var lastChord = (baseId + userSelectId);

    chordsListByUser.push(lastChord)
    ///changing display of eachother item to none
    if ($("#scapiobjid1").attr('id') === lastChord) {
        // console.log("hello");
        $("#scapiobjid1").css("display", "block");
        $("#scapiobjid2").css("display", "none");
        $("#scapiobjid3").css("display", "none");
        $("#scapiobjid4").css("display", "none");
        $("#scapiobjid5").css("display", "none");
        $("#scapiobjid6").css("display", "none");
        $("#scapiobjid7").css("display", "none");
        $("#scapiobjid8").css("display", "none");
        $("#scapiobjid9").css("display", "none");
        $("#scapiobjid10").css("display", "none");
        $("#scapiobjid11").css("display", "none");
        $("#scapiobjid12").css("display", "none");
    }
    if ($("#scapiobjid2").attr('id') === lastChord) {
        // console.log("hello2");
        $("#scapiobjid1").css("display", "none");
        $("#scapiobjid2").css("display", "block");
        $("#scapiobjid3").css("display", "none");
        $("#scapiobjid4").css("display", "none");
        $("#scapiobjid5").css("display", "none");
        $("#scapiobjid6").css("display", "none");
        $("#scapiobjid7").css("display", "none");
        $("#scapiobjid8").css("display", "none");
        $("#scapiobjid9").css("display", "none");
        $("#scapiobjid10").css("display", "none");
        $("#scapiobjid11").css("display", "none");
        $("#scapiobjid12").css("display", "none");
    }
    if ($("#scapiobjid3").attr('id') === lastChord) {
        // console.log("hello3");
        $("#scapiobjid1").css("display", "none");
        $("#scapiobjid2").css("display", "none");
        $("#scapiobjid3").css("display", "block");
        $("#scapiobjid4").css("display", "none");
        $("#scapiobjid5").css("display", "none");
        $("#scapiobjid6").css("display", "none");
        $("#scapiobjid7").css("display", "none");
        $("#scapiobjid8").css("display", "none");
        $("#scapiobjid9").css("display", "none");
        $("#scapiobjid10").css("display", "none");
        $("#scapiobjid11").css("display", "none");
        $("#scapiobjid12").css("display", "none");
    }
    if ($("#scapiobjid4").attr('id') === lastChord) {
        // console.log("hello4");
        $("#scapiobjid1").css("display", "none");
        $("#scapiobjid2").css("display", "none");
        $("#scapiobjid3").css("display", "none");
        $("#scapiobjid4").css("display", "block");
        $("#scapiobjid5").css("display", "none");
        $("#scapiobjid6").css("display", "none");
        $("#scapiobjid7").css("display", "none");
        $("#scapiobjid8").css("display", "none");
        $("#scapiobjid9").css("display", "none");
        $("#scapiobjid10").css("display", "none");
        $("#scapiobjid11").css("display", "none");
        $("#scapiobjid12").css("display", "none");
    }
    if ($("#scapiobjid5").attr('id') === lastChord) {
        // console.log("hello5");
        $("#scapiobjid1").css("display", "none");
        $("#scapiobjid2").css("display", "none");
        $("#scapiobjid3").css("display", "none");
        $("#scapiobjid4").css("display", "none");
        $("#scapiobjid5").css("display", "block");
        $("#scapiobjid6").css("display", "none");
        $("#scapiobjid7").css("display", "none");
        $("#scapiobjid8").css("display", "none");
        $("#scapiobjid9").css("display", "none");
        $("#scapiobjid10").css("display", "none");
        $("#scapiobjid11").css("display", "none");
        $("#scapiobjid12").css("display", "none");
    }
    if ($("#scapiobjid6").attr('id') === lastChord) {
        // console.log("hello6");
        $("#scapiobjid1").css("display", "none");
        $("#scapiobjid2").css("display", "none");
        $("#scapiobjid3").css("display", "none");
        $("#scapiobjid4").css("display", "none");
        $("#scapiobjid5").css("display", "none");
        $("#scapiobjid6").css("display", "block");
        $("#scapiobjid7").css("display", "none");
        $("#scapiobjid8").css("display", "none");
        $("#scapiobjid9").css("display", "none");
        $("#scapiobjid10").css("display", "none");
        $("#scapiobjid11").css("display", "none");
        $("#scapiobjid12").css("display", "none");
    }
    if ($("#scapiobjid7").attr('id') === lastChord) {
        // console.log("hello7");
        $("#scapiobjid1").css("display", "none");
        $("#scapiobjid2").css("display", "none");
        $("#scapiobjid3").css("display", "none");
        $("#scapiobjid4").css("display", "none");
        $("#scapiobjid5").css("display", "none");
        $("#scapiobjid6").css("display", "none");
        $("#scapiobjid7").css("display", "block");
        $("#scapiobjid8").css("display", "none");
        $("#scapiobjid9").css("display", "none");
        $("#scapiobjid10").css("display", "none");
        $("#scapiobjid11").css("display", "none");
        $("#scapiobjid12").css("display", "none");
    }
    if ($("#scapiobjid8").attr('id') === lastChord) {
        // console.log("hello8");
        $("#scapiobjid1").css("display", "none");
        $("#scapiobjid2").css("display", "none");
        $("#scapiobjid3").css("display", "none");
        $("#scapiobjid4").css("display", "none");
        $("#scapiobjid5").css("display", "none");
        $("#scapiobjid6").css("display", "none");
        $("#scapiobjid7").css("display", "none");
        $("#scapiobjid8").css("display", "block");
        $("#scapiobjid9").css("display", "none");
        $("#scapiobjid10").css("display", "none");
        $("#scapiobjid11").css("display", "none");
        $("#scapiobjid12").css("display", "none");
    }
    if ($("#scapiobjid9").attr('id') === lastChord) {
        // console.log("hello9");
        $("#scapiobjid1").css("display", "none");
        $("#scapiobjid2").css("display", "none");
        $("#scapiobjid3").css("display", "none");
        $("#scapiobjid4").css("display", "none");
        $("#scapiobjid5").css("display", "none");
        $("#scapiobjid6").css("display", "none");
        $("#scapiobjid7").css("display", "none");
        $("#scapiobjid8").css("display", "none");
        $("#scapiobjid9").css("display", "block");
        $("#scapiobjid10").css("display", "none");
        $("#scapiobjid11").css("display", "none");
        $("#scapiobjid12").css("display", "none");
    }
    if ($("#scapiobjid10").attr('id') === lastChord) {
        // console.log("hello10");
        $("#scapiobjid1").css("display", "none");
        $("#scapiobjid2").css("display", "none");
        $("#scapiobjid3").css("display", "none");
        $("#scapiobjid4").css("display", "none");
        $("#scapiobjid5").css("display", "none");
        $("#scapiobjid6").css("display", "none");
        $("#scapiobjid7").css("display", "none");
        $("#scapiobjid8").css("display", "none");
        $("#scapiobjid9").css("display", "none");
        $("#scapiobjid10").css("display", "block");
        $("#scapiobjid11").css("display", "none");
        $("#scapiobjid12").css("display", "none");
    }
    if ($("#scapiobjid11").attr('id') === lastChord) {
        // console.log("hello11");
        $("#scapiobjid1").css("display", "none");
        $("#scapiobjid2").css("display", "none");
        $("#scapiobjid3").css("display", "none");
        $("#scapiobjid4").css("display", "none");
        $("#scapiobjid5").css("display", "none");
        $("#scapiobjid6").css("display", "none");
        $("#scapiobjid7").css("display", "none");
        $("#scapiobjid8").css("display", "none");
        $("#scapiobjid9").css("display", "none");
        $("#scapiobjid10").css("display", "none");
        $("#scapiobjid11").css("display", "block");
        $("#scapiobjid12").css("display", "none");
    }
    if ($("#scapiobjid12").attr('id') === lastChord) {
        // console.log("hello12");
        $("#scapiobjid1").css("display", "none");
        $("#scapiobjid2").css("display", "none");
        $("#scapiobjid3").css("display", "none");
        $("#scapiobjid4").css("display", "none");
        $("#scapiobjid5").css("display", "none");
        $("#scapiobjid6").css("display", "none");
        $("#scapiobjid7").css("display", "none");
        $("#scapiobjid8").css("display", "none");
        $("#scapiobjid9").css("display", "none");
        $("#scapiobjid10").css("display", "none");
        $("#scapiobjid11").css("display", "none");
        $("#scapiobjid12").css("display", "block");
    }
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
            // name.replace(",", "")
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
            // console.log(userSelect);
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
        userSelect = JSON.parse(localStorage.getItem("FavChord"))
        getApi(userSelect);
    } else {
        userSelect = "C"
        getApi(userSelect);
        // console.log("you don't have any favorites")
    }

}
getLocalS();

