var ammount = document.querySelector("#bill-amount");
var cash = document.querySelector("#cash");
var btn = document.querySelector("#btn-chk");

function countnotes(balance) {
    var notes= [2000,500,200,100,50,20,10,1];
    var notesnumber;
    var rem = balance;
    for(i in  notes){
        notesnumber = rem/notes[i];
        
        console.log(notes[i] +","+ Math.floor(notesnumber));
        rem = balance%notes[i];
    }
}

function check() {
    console.log(ammount.value);
    console.log(cash.value);
    if ((ammount.value) < (cash.value)){
        var balance = cash.value-ammount.value;
        console.log("ammount to be raturned "+ balance);
        countnotes(balance);
    }else{
        console.log("Invalid Transaction");
    }
}

btn.addEventListener("click",check);