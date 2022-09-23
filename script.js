const fromInput=  document.getElementById("fromInput");
const toInput=  document.getElementById("toInput");
const departureInput=  document.getElementById("departureInput");
const returnInput=  document.getElementById("returnInput");

const firstClassInput=  document.getElementById("firstClassInput");
const firstClassPlus=  document.getElementById("firstClassPlus");
const firstClassMinus=  document.getElementById("firstClassMinus");

const economyInput=  document.getElementById("economyInput");
const economyPlus=  document.getElementById("economyPlus");
const economyMinus=  document.getElementById("economyMinus");

const subtotal=  document.getElementById("subtotal");
const vat=  document.getElementById("vat");
const total=  document.getElementById("total");

motherCount(firstClassPlus, firstClassMinus, firstClassInput, subtotal, vat, total, 150);
motherCount(economyPlus, economyMinus, economyInput, subtotal, vat, total, 100)
function motherCount(plusId, minusId , inputId, subtotal, vat, total, price){
    count(plusId, inputId, subtotal, vat, total, 1, price);
    count(minusId, inputId, subtotal, vat, total, -1, price);
}
function count(buttonId, inputId, subtotal, vat, total, multiplier, price){
    buttonId.addEventListener("click", function(){
        inputId.value= parseFloat(inputId.value) + multiplier;
        subtotal.innerText= parseFloat(subtotal.innerText) + price*multiplier;
        vat.innerText= parseFloat(subtotal.innerText) * 0.1;
        total.innerText= parseFloat(subtotal.innerText) + parseFloat(vat.innerText);
        displayNone(firstClassInput, firstClassMinus, "firstClassDisabled");
        displayNone(economyInput, economyMinus,"economyDisabled");
        function displayNone(inputId, minusId, disableId){
            if(parseFloat(inputId.value) < 1){
                minusId.style.display= "none";
                document.getElementById(disableId).style.display= "block";
            }
            else{
                minusId.style.display= "block";
                document.getElementById(disableId).style.display= "none";
            }
        }
    });
}


const submit= document.getElementById("submit");

submit.addEventListener("click", function(){
    document.getElementById("fromString").innerText= fromInput.value;
    document.getElementById("toString").innerText= toInput.value;
    document.getElementById("departureString").innerText= departureInput.value;
    document.getElementById("returnString").innerText= returnInput.value;
    document.getElementById("firstClassString").innerText= firstClassInput.value;
    document.getElementById("economyString").innerText= economyInput.value;
    document.getElementById("subtotalString").innerText= subtotal.innerText;
    document.getElementById("vatString").innerText= vat.innerText;
    document.getElementById("totalString").innerText= total.innerText;
    document.getElementById("form").style.display= "none";
    document.getElementById("ticket").style.display= "block";
});