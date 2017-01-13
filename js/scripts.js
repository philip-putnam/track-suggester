$(document).ready(function() {
  $(".btn#submitForm").click(function(event) {
    var nameInput = $("input#name").val();

    $(".name").text(nameInput);


    event.preventDefault();
  });
});
