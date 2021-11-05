$(document).ready(function(){
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDate);
})

var currentHour = moment().hour();

$(".daily-task").on("click", "p", function(){
    var text = $(this)
    .text()
    .trim();
    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
})
