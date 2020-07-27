
/******************************************Incomplete ***********************************/

var screen = document.getElementById("screen");
var buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {

    const element = buttons[i];
    
    element.addEventListener("click", function(){
        
        buttonText = event.formTarget.innerText;

        console.log(buttonText);



    });

    
}



