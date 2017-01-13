// Back-end, logic code, here:

var design = function(questionOne) {
  if (questionOne === "Front-end") {
    return true;
  }
};

var cSharp = function(questionTwo, questionThree) {
  if (questionTwo === "Enterprise companies, large businesses" && questionThree === "Business Software") {
    return true;
  }
};

var jsAndroid = function(questionThree, questionFour) {
  if (questionThree === "Android Applications" || questionFour === "androidInterface") {
    return true;
  }
};

var rubyRails = function(questionThree, questionFour) {
  if (questionThree === "Web Applications" || questionFour === "userInteractive") {
      return true;
  }
};


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


    if (design(question1Input)) {
      $("#css-design").removeClass();
      $("#css-design").addClass(".shown");
    } else if (cSharp(question2Input, question3Input)) {
      $("#cSharp-NET").removeClass();
      $("#cSharp-NET").addClass(".shown");
    } else if (jsAndroid(question3Input, question4Input)) {
      $("#java-android").removeClass();
      $("#java-android").addClass(".shown");
    } else if (rubyRails(question3Input, question4Input)) {
      $("#ruby-rails").removeClass();
      $("#ruby-rails").addClass(".shown");
    }

    event.preventDefault();
  });
});
