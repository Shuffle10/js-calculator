buttons = document.querySelectorAll(".btn");
screen = document.getElementsByClassName("main-screen")[0];
subScreen = document.getElementsByClassName("subscreen")[0];

let logged=false;
let elements = [];

buttons.forEach(e => {
    e.addEventListener('click', ()=>{  
        if(e.innerText !== "CLEAR" && e.innerText!== "DELETE"){


            if(e.classList.contains("operators")){
                elements.push(screen.innerText)

                if (e.innerText=="="){
                    if(elements.length==3){
                        subScreen.innerText = "";
                        screen.innerText = calculate();
                        elements = [];
                        logged = true;
                    }

                    else{
                        alert("error")
                    }
                }

                else{
                    if(elements.length==3){
                        screen.innerText = calculate();
                        elements = [];
                        elements.push(screen.innerText)
                    }
                    elements.push(e.innerText)
                    subScreen.innerText = screen.innerText + e.innerText;
                    logged = true;
                    console.log(elements)
            }
            }

            else{
                if (logged){
                    screen.innerText = ""
                    logged=false;
                }
                screen.innerText += e.innerText;
            }
        }

        else if(e.innerText=="DELETE"){
            screen.innerText = String(screen.innerText).slice(0,-1);
        }

        else{
            logged = false;
            elements = [];
            screen.innerText = ""
            subScreen.innerText = ""
        }
    });
});


function calculate(){
    switch(elements[1]){

        case "+":
            return addNumbers()

        case "-":
            return subtractNumbers()

        case "X":
            return multiplyNumbers()

        case "/":
            return divideNumbers()
    
    }
}

function addNumbers(){
    return parseFloat(elements[0]) + parseFloat(elements[2])
}

function subtractNumbers(){
    return parseFloat(elements[0]) - parseFloat(elements[2])
}

function multiplyNumbers(){
    return parseFloat(elements[0]) * parseFloat(elements[2])
}

function divideNumbers(){
    return parseFloat(elements[0]) / parseFloat(elements[2])
}