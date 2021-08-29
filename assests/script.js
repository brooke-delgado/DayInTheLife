//Header Date
var today = moment().format('dddd,MMMM Do YYYY');
document.getElementById("currentDay").textContent = today;
console.log(moment)

//create var for hours in a day
var dayObj = {
9: $("#9"),
10: $("#10"),
11: $("#11"),
2: $("#12"),
1: $("#1"),
2: $("#2"),
3: $("#3"),
4: $("#4"),
5: $("#5"),
};

//past present future
$(".time-block").each(function() {
var hour = $(this).data("time");
if(hour === currentHour) {
    $(this).attr("class","present");
} else if (hour < currentHour) {
    $(this).attr("class", "past");
} else {
    $(this).attr("class", "future");
}
});

//save event on click
var saveBtn = save;
saveBtn.on("click",function() {
  localStorage.setItem("saved", $("textarea"));
});

if ($("<textarea>" === "saved")) {
    $("<button").text("saved");
}

dayObj.forEach(function (hour, i) {
   is (hour === "string"); {
        parseInt(hour);
    }
});





    
   