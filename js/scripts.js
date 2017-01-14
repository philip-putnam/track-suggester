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

var phpDrupal = function(questionFour) {
  if (questionFour === "contentHeavy") {
    return true;
  }
};

var locale = function(questionFive) {
  if (questionFive === "Not yet") {
    return 0;
  } else if (questionFive === "Portland, OR") {
    return 1;
  } else if (questionFive === "Seattle, WA") {
    return 2;
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

    // $("#blank").removeClass();
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
    } else if (phpDrupal(question4Input)) {
      $("#php-drupal").removeClass();
      $("#php-drupal").addClass(".shown");
    } else {
      $("#other").removeClass();
      $("#other").addClass(".shown");
    }

    if (locale(question5Input) === 1 || locale(question5Input) === 2) {
      $("#location").removeClass();
      $("#location").addClass(".shown");
    }

    if (locale(question5Input) === 1) {
      $("#portland").removeClass();
      $("#portland").addClass(".shown");
    } else if (locale(question5Input) === 2) {
      $("#seattle").removeClass();
      $("#seattle").addClass(".shown");
    }

    event.preventDefault();
  });
});
