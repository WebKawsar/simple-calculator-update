/******************************************Complete ***********************************/

var history = document.getElementById("history");
var sign = document.getElementById("sign");
var result = document.getElementById("result");
var buttons = document.querySelectorAll("button");

let resultValue = "";
for (let i = 0; i < buttons.length; i++) {

    const element = buttons[i];
    element.addEventListener("click", function(){
        
        var history = document.getElementById("history");
        var sign = document.getElementById("sign");
        var result = document.getElementById("result");
        
        buttonText = event.target.innerText;
        if(buttonText === "AC") {

            history.innerText = "";
            sign.innerText = "";
            result.innerText = "";
            resultValue = "";

        }
        else if(buttonText == 0 || buttonText == 1 || buttonText == 2 || buttonText == 3 || buttonText == 4 || buttonText == 5 || buttonText == 6 || buttonText == 7 || buttonText == 8 || buttonText == 9){

            resultValue = resultValue + buttonText;
            result.innerText = resultValue;

        }
        else if(buttonText == "+" || buttonText == "-" || buttonText == "*" || buttonText == "/"){
                
                history.innerText = resultValue;
                sign.innerText = buttonText;
                result.innerText = "";
                resultValue = "";
                   
        }
        else if(buttonText == "=") {

                if(sign.innerText == "+"){
                    
                    historyValue = parseFloat(history.innerText);
                    resultValue =  parseFloat(result.innerText);
                    getValue = eval(historyValue + resultValue);
                    sign.innerText = getValue;
                    result.innerText = "";
                    history.innerText = "";
                    resultValue = "";

                }
                if(sign.innerText == "-"){

                    historyValue = parseFloat(history.innerText);
                    resultValue =  parseFloat(result.innerText);
                    getValue = eval(historyValue - resultValue);
                    sign.innerText = getValue;
                    result.innerText = "";
                    history.innerText = "";
                    resultValue = "";

                }

                if(sign.innerText == "*"){
                    
                    historyValue = parseFloat(history.innerText);
                    resultValue =  parseFloat(result.innerText);
                    getValue = eval(historyValue * resultValue);
                    sign.innerText = getValue;
                    result.innerText = "";
                    history.innerText = "";
                    resultValue = "";

                }

                if(sign.innerText == "/"){

                    historyValue = parseFloat(history.innerText);
                    resultValue =  parseFloat(result.innerText);
                    getValue = eval(historyValue / resultValue);
                    sign.innerText = getValue;
                    result.innerText = "";
                    history.innerText = "";
                    resultValue = "";

                }

        }
        
        
    });

}
