$(document).ready(function() {
  $(".btn#submitForm").click(function(event) {
    var nameInput = $("input#name").val();
    var question1Input = $("input:radio[name=question1]:checked").val();
    var question2Input = $("#question2").val();
    var question3Input = $("#question3").val();
    var question4Input = $("input:radio[name=question4]:checked").val();
    var question5Input = $("#question5").val();


    $(".name").text(nameInput);
    $(".question1").text(question1Input);
    $(".question2").text(question2Input);
    $(".question3").text(question3Input);
    $(".question4").text(question4Input);
    $(".question5").text(question5Input);

    $("#blank").removeClass();
    $("#blank").hide();

    $("#results").removeClass();
    $("#results").addClass(".shown");


    event.preventDefault();
  });
});
