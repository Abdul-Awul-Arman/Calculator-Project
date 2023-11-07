//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Hey this AbdulAwulArman i'm doing this Calculator(clone) Project for enhance my html,css and js knowledge.
// i tried my best to describe the important portion of this js code.
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

let update = "0";
let runningTotal=0;

let PreviousOperator=null;

let screen = document.querySelector(".screen");
//this function work for manipulate the number and symbol form HTML
function buttonClick(value) {
    if (isNaN(parseInt(value)) == false) {
        forNumber(value);
    } else {
        forSymbol(value);
    }

    //we put this function here because if any one click the any button that mean's he or she want to see the number in screen
    updateScreen();
}

function doingMath(value)
{
    //in this function mean's the second number for math operation.
  
    if(PreviousOperator==="+")
    {
       runningTotal+=value;
       
    }
    else if(PreviousOperator==="-")
    {
       runningTotal-=value;
    }
    else if(PreviousOperator==="×")
    {
       runningTotal*=value;
    }
    else if(PreviousOperator==="÷")
    {
       runningTotal/=value;
    }
}

 function handleMath(value){

    if(screen==="0")
    {
        return;
    }
    
    const tempUpdate=parseInt(update);
   
    if(runningTotal===0)
    {
        runningTotal=tempUpdate; 
    }
    else
    {
        doingMath(tempUpdate);
       
    }
    PreviousOperator=value;//Tracking the operator after take first the number for math operation
    update="0";
    console.log(runningTotal);
 }

//in this function we work with numbers
function forNumber(value) {
    if (update === "0") {
        update = value;
    } else {
        update += value;
    }
}
function forSymbol(value) {
    switch (value) {
        case "C": //this line mean's if(value==="C" or other symbol) and before the break statement we give the task to do.
            update = "0";
            break; //this is break statement.
        case "=":
            if(PreviousOperator===null)
            {
                return;
            }
            doingMath(parseInt(update));
            
            PreviousOperator=null;
            update=""+runningTotal;
            runningTotal=0;
            
            break;
        case "←":
            if(update.length===1)
            {
                update="0";
            }
            else
            {
                update=update.substring(0,update.length-1);
            }
            break;
        case "+":
        case "-":
        case "×":
        case "÷":
            handleMath(value)
            break;
    }
}

//mainFunction for grab the all number and symbol button
function mainFunction() {
    let allbutton = document.querySelector("#allbutton");
    allbutton.addEventListener("click", function (event) {
        buttonClick(event.target.innerText);
    });
}

//updateScreen work for update number in calculator screen
function updateScreen() {
    screen.innerText = update;
}

//in this portion i'm call the mainFunction
mainFunction();
