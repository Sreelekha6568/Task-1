function Addnum(){
    let num1=document.getElementById('firstname').value
    let num2=document.getElementById('secondname').value
num1=parseInt(num1)
num2=parseInt(num2)
let h1=document.getElementById("result")
res=num1+num2
h1.innerHTML="Result:"+res
}
function Subnum(){
    let num1=document.getElementById('firstname').value
    let num2=document.getElementById('secondname').value
num1=parseInt(num1)
num2=parseInt(num2)
let h1=document.getElementById("result")
res=num1-num2
h1.innerHTML="Result:"+res
}
function Mulnum(){
    let num1=document.getElementById('firstname').value
    let num2=document.getElementById('secondname').value
num1=parseInt(num1)
num2=parseInt(num2)
let h1=document.getElementById("result")
res=num1*num2
h1.innerHTML="Result:"+res
}
function Divnum(){
    let num1=document.getElementById('firstname').value
    let num2=document.getElementById('secondname').value
num1=parseInt(num1)
num2=parseInt(num2)
let h1=document.getElementById("result")
res=num1/num2
h1.innerHTML="Result:"+res
}
function Pownum(){
    let num1=document.getElementById('firstname').value
    let num2=document.getElementById('secondname').value
num1=parseInt(num1)
num2=parseInt(num2)
let h1=document.getElementById("result")
res=num1**num2
h1.innerHTML="Result:"+res
}

