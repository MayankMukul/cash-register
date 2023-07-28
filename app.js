var amount = document.querySelector("#bill-amount");
var cash = document.querySelector("#cash");
var btn = document.querySelector("#btn-chk");
var outputvalue = document.querySelectorAll(".notesnumber") ; 
var message = document.querySelector("#error-message");

var notes= [2000,500,200,100,50,20,10,5,1];
var btnCheck = document.querySelector("#check-amount");
var afterchechk = document.querySelector(".aftercheck");
var notesnumber;
var table = document.querySelector(".table")

function countnotes(balance) {
    var rem = balance;
   
    for(i in  notes){
        notesnumber = rem/notes[i];
        outputvalue[i].innerText = Math.trunc(notesnumber);
        rem = rem%notes[i];    
    }
}

function checkAmount(){
    if (amount.value < 0){
        showmessage("*Enter Valid Amount");
    }else if (amount.value==0){
        showmessage("*Bill Amount Zero Nothing To Cash");
    }else {
        deletemsg();
        afterchechk.style.display="block";
        btnCheck.style.display="none";
    }
}

function check() {
    deletemsg();
    table.style.display="block";
    if (amount.value < 0){
        showmessage("*Enter Valid Bill Amount");
        return ;
    }else if (amount.value==0){
        showmessage("*Bill Amount Zero")
    }
    if ((amount.value) <= (cash.value)){
        var balance = cash.value-amount.value;
        countnotes(balance);
    }else {
        showmessage("Invalid Amount!   Need More Cash");
    }
}

function showmessage(msg){
    message.style.display ="block";
    message.innerText = msg;
}

function deletemsg(){
    message.style.display="none";
}

function beforecheck(){
    afterchechk.style.display="none";
}

beforecheck();
table.style.display="none";
btnCheck.addEventListener("click",checkAmount);
btn.addEventListener("click",check);