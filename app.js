var ammount = document.querySelector("#bill-amount");
var cash = document.querySelector("#cash");
var btn = document.querySelector("#btn-chk");
var outputvalue = document.querySelector("#output"); 
var message = document.querySelector("#error-message");

function countnotes(balance) {
    var notes= [2000,500,200,100,50,20,10,1];
    var notesnumber;
    var rem = balance;
    for(i in  notes){
        notesnumber = rem/notes[i];
        console.log(notes[i] +","+ Math.trunc(notesnumber));
        rem = rem%notes[i];
        console.log(rem);
    }
}

function check() {
    console.log(ammount.value);
    console.log(cash.value);
    

    if (ammount.value < 0){
        console.log("invalid ammount");
        showmessage("invalid ammount");
    }

    if ((ammount.value) < (cash.value)){
        var balance = cash.value-ammount.value;
        console.log("ammount to be returned "+ balance);
        showmessage("amount to be returned"+balance);
        countnotes(balance);
    }else{
        console.log("Invalid Transaction");
        showmessage("Invalid aamount");
    }
}

function showmessage(msg){
    message.style.display ="block";
    message.innerText = msg;
}

btn.addEventListener("click",check);