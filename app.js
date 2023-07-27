var ammount = document.querySelector("#bill-amount");
var cash = document.querySelector("#cash");
var btn = document.querySelector("#btn-chk");
var outputvalue = document.querySelectorAll(".notesnumber") ; 
var message = document.querySelector("#error-message");

function countnotes(balance) {
    var notes= [2000,500,200,100,50,20,10,1];
    var notesnumber;
    var rem = balance;
    for(i in  notes){
        notesnumber = rem/notes[i];
        outputvalue[i].innerText = Math.trunc(notesnumber);
        console.log(notes[i] +","+ Math.trunc(notesnumber));
        rem = rem%notes[i];
        
    }
}

function check() {
    deletemsg();
    if (ammount.value <= 0){
        console.log("invalid amount");
        showmessage("invalid amount");
        return ;
    }
    if ((ammount.value) <= (cash.value)){
        var balance = cash.value-ammount.value;
        
        countnotes(balance);
    }else {
        showmessage("Invalid amount need  more cash");
    }
}

function showmessage(msg){
    message.style.display ="block";
    message.innerText = msg;
}

function deletemsg(){
    message.style.display="none";
}

btn.addEventListener("click",check);