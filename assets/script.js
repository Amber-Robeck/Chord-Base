$.ajax({
    url:"https:api.uberchord.com/v1/chords/F_maj7",
    method: "GET"
}).then(function(response){
    console.log(response);
})
