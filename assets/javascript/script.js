$.ajax({
    url:"https:api.uberchord.com/v1/chords/F_maj7",
    method: "GET"
}).then(function(response){
    console.log(response);
})

var button = $(".button")
button.on("click", function(){
    console.log("working")

var dditem = $(".dropdown-menu")
dditem.toggle('is-active');
})
var ddContent = $(".dropdown-content")
ddContent.on("click", function(event){
    //event.target
    console.log(event.target.innerText)

    var dditem = $("dropdown-item")
    //console.log(dditem.val)


})