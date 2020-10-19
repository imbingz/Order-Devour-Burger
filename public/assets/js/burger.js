//Wait for DOM is fully loaded before attaching controllers

$(function() {

  $(".devour-btn").on('click', function() {

    console.log('devour-btn clicked');

    let id = $(this).data("id");
    console.log(id);

    let devourState = {
      devoured: "true"
    };
    
    //send PUT request
    $.ajax("api/burgers/" + id, {
      type: "PUT",
      data: devourState
    }).then(function() {
      console.log('change devour state to: ', devourState.devoured);

      //reload the page to get the updated list 
      location.reload();
    });
  });
});
