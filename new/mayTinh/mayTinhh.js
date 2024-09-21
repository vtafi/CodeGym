function cong() {
    let number1 = +document.getElementById("n1").value;
    let number2 = +document.getElementById("n2").value;
    let result = Number(number1+number2);
    document.getElementById("result").innerHTML = result;
}function tru() {
    let number1 = document.getElementById("n1").value;
    let number2 = document.getElementById("n2").value;
    let result = Number(number1-number2);
    document.getElementById("result").innerHTML = result;
}function nhan() {
    let number1 = document.getElementById("n1").value;
    let number2 = document.getElementById("n2").value;
    let result = Number(number1*number2);
    document.getElementById("result").innerHTML = result;
}function chia() {
    let number1 = document.getElementById("n1").value;
    let number2 = document.getElementById("n2").value;
    let result = Number(number1/number2);
    document.getElementById("result").innerHTML = result;
}