
 let screen="0";

function buttonClick(value) {
  if(isNaN(parseInt(value))==false)
  {
      forNumber(value);
  }
  else
  {
      forSymbol(value);
  }
}

function forNumber(value)
{
    
}
function forSymbol(value)
{
    
}

function mainFunction() {
  let allbutton=document.querySelector("#allbutton");
    allbutton.addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}
mainFunction();
