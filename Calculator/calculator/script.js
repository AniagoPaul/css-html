
const inputValue= document.getElementById("user-input");
const number = document.querySelectorAll(".Number").forEach(function(item){
item.addEventListener("click",function(e){
if(inputValue.innerText === "NaN"){
inputValue.innerText ="";
}
if(inputValue.innerText === "0"){
    inputValue.innerText = "";
}
//inputValue.innerText += innerHTML.trim();
});
});

function mul(a,b){
    return a*b;
}
document.getElementById("user-input").innerHTML = mul(4,5);