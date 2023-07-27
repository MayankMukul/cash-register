var amount = document.querySelector("#bill-amount");
var cash = document.querySelector("#cash");
var btn = document.querySelector("#btn-chk");
var outputvalue = document.querySelectorAll(".notesnumber") ; 
var message1 = document.querySelector("#error-message1");
var message2 = document.querySelector("#error-message2");
var notes= [2000,500,200,100,50,20,10,5,1];
var btnCheck = document.querySelector("#check-amount");
var afterchechk = document.querySelector(".aftercheck");
var notesnumber;

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
        showmessage1("*Enter Valid Amount");
    }else if (amount.value==0){
        showmessage1("*Bill Amount Zero Nothing To Cash");
    }else {
        deletemsg1();
        afterchechk.style.display="block";
        btnCheck.style.display="none";
    }
}

function check() {
    deletemsg2();
    if (amount.value < 0){
        showmessage2("*Enter Valid Bill Amount");
        return ;
    }else if (amount.value==0){
        showmessage2("*Bill Amount Zero")
    }
    if ((amount.value) <= (cash.value)){
        var balance = cash.value-amount.value;
        countnotes(balance);
    }else {
        showmessage2("Invalid Amount!   Need More Cash");
    }
}

function showmessage1(msg){
    message1.style.display ="block";
    message1.innerText = msg;
}

function showmessage2(msg){
    message2.style.display ="block";
    message2.innerText = msg;
}

function deletemsg1(){
    message1.style.display="none";
}

function deletemsg2(){
    message2.style.display="none";
}

function beforecheck(){
    afterchechk.style.display="none";
}

beforecheck();

btnCheck.addEventListener("click",checkAmount);
btn.addEventListener("click",check);