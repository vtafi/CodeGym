function changMoney(){
    let Amount = document.getElementById("Amount").value;
    let FromC = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let Result;

    if (FromC == "USD" && To == "VND"){
        Result = "Result :" + (Amount*23000) + "Đ";
    }else if(FromC == "VND" && To == "USD"){
        Result = "Result :" + (Amount/23000) + "$"
    }else if(FromC == "VND" && To == "VND"){
        Result = "Khong cho doi";
    }else {
        Result = "Khong cho doi";
    }
    document.getElementById("Result").innerHTML = Result;
}