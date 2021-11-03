var task = {};

var createTask = function(taskText, taskTime , taskList){
    var taskLi = $("<li>").addClass("list-group-item");
    var taskSpan = $("<span>").addClass("m-1").text(taskText);
    var taskP = $("<p>").addClass("m-1").text(taskText);
    taskLi.append(taskSpan, taskP);

    $("#list-" + taskList).append(taskLi);
}







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
