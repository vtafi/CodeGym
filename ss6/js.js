let btn= document.getElementById("btn");

document.getElementById("btn").addEventListener("click",function () {
    btn.style.backgroundColor="green";
    btn.style.color="red";
    btn.innerText="Displike"
    let a =  +prompt("a");
    console.log(a);
    let b = +prompt("b");
    console.log(b);
    alert(a+b);
})
