// Back-end, logic code, here:

var design = function(questionOne) {
  if (questionOne === "Front-end") {
    return true;
  }
}


// Front-end code effecting what the user will see here:

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

    if (design(question1Input) === true) {
      $("#css-design").removeClass();
      $("#css-design").addClass(".shown");
    }

    event.preventDefault();
  });
});
