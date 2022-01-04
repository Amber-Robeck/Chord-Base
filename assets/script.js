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
