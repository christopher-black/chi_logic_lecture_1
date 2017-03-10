var numClicks = 0;
var hunger = 100;

$(document).ready(function(){
  $(".container").append("<button>Meow</button>");

  $(".container").on("click", "button", function(){
    numClicks += 1;

    if(numClicks%3 === 0){
      appendSushi();
    }
  });

  $(".container").on("click", ".sushi", function(){
      if(hunger > 0){
        $(this).remove();
        hunger -= 5;
        if(hunger <= 0){
          console.log("Yum");
        }
        console.log(hunger);
      }
  });
});

function appendSushi(){
  // $(".container").append("<div class='sushi'>" +
  //                           "<p>Sushi</p>" +
  //                        "</div>");
  $(".container").append("<div class='sushi'></div>");
  var element = $(".container").children().last();
  element.append("<p>Sushi</p>");
}
