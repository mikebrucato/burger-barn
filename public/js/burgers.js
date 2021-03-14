$(function() {
    $(".devour-burger").on("click", function(event) {
      event.preventDefault()
      var id = $(this).data("id");
      
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-burger").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#add").val().trim(),
        devoured: 1
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger!");
          // Reload the page to get the updated list
          location.reload();
      
        }
      );
    })
  })