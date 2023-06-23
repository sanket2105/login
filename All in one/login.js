// function odd(){
//     var a=28;
//     if (a%2==1) {
//         document.write(a+" is odd number")
//     } else {
//         document.write(a+" is even number")
//     }
// }
// odd()

// alert("hello js")
// confirm("are you sure?")

// function even(){
//     var a=prompt("enter the number")
//     if (a%2==1) {
//         alert(a+" is odd number")
//     } else {
//         alert(a+" is even number")
//     }
// }
// even()


// function hhh(){
//     var a=document.getElementById("in").value
//     if (a%2==1) {
//         document.querySelector("#hh").innerHTML=a+" is odd number";
//     } else {
//         document.querySelector("#hh").innerHTML=a+" is even number";
//     }
// }
// setInterval(hhh,1000)




// function login(){
//     var a=document.getElementById("user").value
//     var b=document.getElementById("pass").value
//     if(a=="" &&b==""){
//         alert("pgl type the user name and password")
//     }
//     else if(a==""){
//         alert("Enter the user name")
//     }
//     else if(b==""){
//         alert("Enter the password")
//     }
//     else if(a=="sanker"&&b=="1234"){
//         alert("wellcome to the page")
//     }
//     else{
//         alert("invalid id or password")
//     }
// }


function signin(){
    var a=document.getElementById("user").value
    var b=document.getElementById("pass").value
    if(a==""&&b==""){
        document.getElementById("euser").innerHTML='pgl enter the user id'
        document.getElementById("epass").innerHTML='pgl enter the password'
        return false;
    }
    else if (a=="") {
        document.getElementById("euser").innerHTML='pgl enter the user id'
        return false;
    } 
    else if(b=="") {
        document.getElementById("epass").innerHTML='pgl enter the password'
        return false;
    }
  
    else if(a=="sanket"&&b=="1234"){
        alert("welcome to the page")
        return true;
    }
    else{
        document.getElementById("ebutton").innerHTML='invalid id or password'
        return false;
    }
}



































