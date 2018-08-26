//Objective 1
let button1 = $("<button></button>").text("Objective 1").attr("id", "myButton");
$("body").prepend(button1);

$("#myButton").click(function () {
    alert("You're getting it!");
})
//End Objective 1

//Objective 2
$("#obj2Butt").click(function () {
    event.preventDefault();
    let textBox = $("input[type*=text]").val();
    alert(textBox);
})
//End Objective 2

//Objective 3
let createDiv = $("<div></div>").text("Objective 3").attr("class", "divID");

$("body").append(createDiv)
$(document).ready(function () {
    $('.divID').hover(
        function () {
            $(this).css("background-color", "red");
        }, function () {
            $(this).css("background-color", "white");
        }
    )
});
//End Objective 3

//Objective 4
let createPara = $("<p></p>").text("This is a sentence for Objective 4");
$("body").append(createPara);
$(createPara).click(function () {
    $(createPara).click(function () {
        let colors = ["blue", "green", "red", "orange", "yellow"];
        let ranColor = colors[Math.floor(Math.random() * colors.length)];
        $(createPara).css({ "color": ranColor });
    });
});
//End Objective 4

//Objective 5
let button2 = $("<button />").text("Objective 5");
let div2 = $("<div></div>");
$("body").append(button2);
$("body").append(div2);

$(button2).click(function () {
    let createSpan = $("<span><span/>").text("Michael Stringer");
    $(div2).append(createSpan);
});
//End Objective 5

//Objective 6
let button3 = $("<button />").text("Objective 6");
let ul = $("<ul />").attr("id", "names")
let friendsNames = ["friend1", "friend2", "friend3", "friend4", "friend5", "friend6", "friend7", "friend8", "friend9", "friend10"];
$("body").append(button3);
$("body").append(ul);

$(button3).click(function () {
    
    for (let i = 0; i < friendsNames.length; i++) {
        let li = $("<li></li>");
        $(li).append(friendsNames[i]);
        $(ul).append(li);
    }
})