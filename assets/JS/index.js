$(document).ready(function(){
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDate);
})

var currentHour = moment().hour();

var checkTime = function() {
    $(".time-block").each(function(){
        var blockTime = parseInt($(this).attr("id").split("-")[1])
        
        if (blockTime < currentHour){
            $(this).addClass("past");
        } else if (blockTime === currentHour){
            $(this).removeClass("past")
            $(this).addClass("present")
        } else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    
    });
};

checkTime();
var blockCheck = setInterval(checkTime, 30000);

$(".saveBtn").on("click", function(){
    var description = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, description)
});
$("#nine", ".description").val(localStorage.getItem("nine"))
$("#ten", ".description").val(localStorage.getItem("ten"))
$("#eleven", ".description").val(localStorage.getItem("eleven"))
$("#twelve", ".description").val(localStorage.getItem("twelve"))
$("#one", ".description").val(localStorage.getItem("one"))
$("#two", ".description").val(localStorage.getItem("two"))
$("#three", ".description").val(localStorage.getItem("three"))
$("#four", ".description").val(localStorage.getItem("four"))
$("#five", ".description").val(localStorage.getItem("five"))