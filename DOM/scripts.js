document.addEventListener("DOMContentLoaded", function () {

    //Objective 1
    let button = document.createElement("button");
    let buttonText = document.createTextNode("Objective 1");
    button.className = ("button");
    button.appendChild(buttonText);
    document.body.appendChild(button);

    button.addEventListener("click", function () {
        alert("You got it bro!");
    })
    //End objective 1


    //objective 2
    let button2 = document.getElementsByClassName("obj2Butt");
    // console.log(button2);


    button2[0].addEventListener("click", btnClick);

    function btnClick() {
        let message = document.getElementById("message").value;
        event.preventDefault();
        window.alert(message);
    };
    //End Objective 2

    //Ojbective 3

    let Objective3Div = document.getElementById("objective3Div");
    console.log(Objective3Div)

    Objective3Div.addEventListener("mouseenter", function () {
        this.style.backgroundColor = "red";
    })
    Objective3Div.addEventListener("mouseleave", function () {
        this.style.backgroundColor = "white";
    })


    //End Objective 3

    //Objective 4

    let paragraph = document.createElement("p");
    let paraText = document.createTextNode("This is the sentence for Objective 4");
    paragraph.appendChild(paraText);
    document.body.appendChild(paragraph);

    paragraph.id = "paragraphID"

    paragraph.addEventListener("click", changeClickColor);

    //Objective 4-----Part 1
    // function changeColor() {
    //     paragraph.style.color = "red";
    // }

    //Objective 4------Part 2
    const changeColor = () => {
        let r = Math.floor((Math.random() * 255) + 1);
        let g = Math.floor((Math.random() * 255) + 1);
        let b = Math.floor((Math.random() * 255) + 1);
        return `rgb(${r}, ${g}, ${b})`;
    };
    function changeClickColor() {
        paragraph.style.color = changeColor() //  () = invokes operators 
    };
    // End Objective 4

    //Objective 5

    let div = document.createElement("div");
    let button5 = document.createElement("button");
    let btnText5 = document.createTextNode("Objective 5");


    button5.appendChild(btnText5);
    document.body.appendChild(button5);
    document.body.appendChild(div);

    button5.addEventListener("click", createSpan);

    function createSpan() {
        let span = document.createElement("span");
        let myName = document.createTextNode("Michael Stringer");
        span.appendChild(myName);
        div.appendChild(span);
    }
    //End Objective 5

    //Objective 6
    let button6 = document.createElement("button");
    let button6Text = document.createTextNode("Objective 6");
    button6.appendChild(button6Text);
    document.body.appendChild(button6);

    let UL = document.createElement("ul");
    document.body.appendChild(UL);
    UL.className = "listItems";

    let friendsNames = ["friend1", "friend2", "friend3", "friend4", "friend5", "friend6", "friend7", "friend8", "friend9", "friend10"];
    
    button6.addEventListener('click', addToList);

    function addToList() {
        let list = document.getElementById("listItems");

        for (let i = 0; i < friendsNames.length; i++) {
            let LI = document.createElement("li");
            LI.innerHTML = friendsNames[i];
            UL.appendChild(LI);
        };
    };
    // End Objective 6
});




