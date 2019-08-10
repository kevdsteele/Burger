
$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("burgerid");
    

    var newDevouredState = {
      "devoured": true
    };


    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed burger to devourd");
        
        location.reload();
      }
    );
  });



  $(".create-form").on("submit", function(event) {
    
    event.preventDefault();

    var newBurger = {
      name: $("#burger").val().trim(),
      restaurant_id: $("#restaurant").val().trim()
    };

    console.log("burger info to be submitted is " + newBurger.name + " " + newBurger.restaurant_id)

   
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        
        location.reload();
      }
    );
  });
});
