buttons = document.querySelectorAll(".btn");
screen = document.getElementsByClassName("screen")[0];
let resultDisplayed=false;

buttons.forEach(e => {
    e.addEventListener('click', ()=>{  

        if (e.innerText!=="CLEAR" && e.innerText!=="DELETE" && e.innerText!=="="){

            if(resultDisplayed){
                screen.innerText = ""
                resultDisplayed = false; 
            }
            
            screen.innerText += `${e.innerHTML}`
        }

        if(e.innerText=="CLEAR"){
            screen.innerText = ""
        }

        if(e.innerText=="DELETE"){
            screen.innerText = String(screen.innerText).slice(0,-1)
        }

        if(e.innerText=="="){
            screen.innerText = calculate()
        }

        // if(e.classList.contains("operators")){
        //     temp = screen.innerText
        //     screen.innerText = ""
        //     screen.innerText = eval(temp)
        // }


    })
});

function calculate(){
    let temp = screen.innerText;
    screen.innerText = "";
    try {
        resultDisplayed = true;
        return eval(temp)
    }
    catch(err){
        alert("Invalid! Please check your input!")
        resultDisplayed = false;
        return temp
    }
}
