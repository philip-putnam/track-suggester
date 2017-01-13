$(document).ready(function() {
  $(".btn#submitForm").click(function(event) {
    var nameInput = $("input#name").val();
    var question1Input = $("input:radio[name=question1]:checked").val();
    var question2Input = $("#question2").val();

    $(".name").text(nameInput);
    $(".question1").text(question1Input);
    $(".question2").text(question2Input);

    $("#blank").removeClass();
    $("#blank").hide();

    $("#results").removeClass();
    $("#results").addClass(".shown");


    event.preventDefault();
  });
});
