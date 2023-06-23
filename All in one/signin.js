function signup(){
    var a=document.getElementById("first").value
    var b=document.getElementById("last").value
    var c=document.getElementById("mobile").value
    var d=document.getElementById("email").value
    var e=document.getElementById("pass").value
    var f=document.getElementById("cpass").value

    var regs=/^[a-zA-Z]{2,15}$/
    var regs1=/^[6-9][0-9]{9}$/
    var regs2=/^[0-9a-zA-Z!]{6,15}$/
    var k=true
    
    if(a==""){
        document.getElementById("efirst").innerHTML="Enter the first name "
        
        k =false
    }
    else if(regs.test(a)){
        document.getElementById("efirst").innerHTML=""
        
    }
    else{
        document.getElementById("efirst").innerHTML="Invalid first name "
        k= false
    }


    if(b==""){
        document.getElementById("elast").innerHTML="Enter the last name "
        k= false
    }
    else if(regs.test(b)){
        document.getElementById("elast").innerHTML=""
        
    }
    else{
        document.getElementById("elast").innerHTML="Invalid last name "
        k= false
    }


    if(c==""){
        document.getElementById("emobile").innerHTML="Enter the mobile number"
        k= false
    }
    else if(regs1.test(c)){
        document.getElementById("emobile").innerHTML=""
    }
    else{
        document.getElementById("emobile").innerHTML="Enter the valid mobile number"
        k= false;
    }


    if(d==""){
        document.getElementById("eemail").innerHTML="Enter the email"
        k= false
    }
    else{
        document.getElementById("eemail").innerHTML=""
        
    }


    if (e==""){
        document.getElementById("epass").innerHTML="Enter the password"
        k= false
    }
    else if(regs2.test(e)){
        document.getElementById("epass").innerHTML=""
        
    }
    else{
        document.getElementById("epass").innerHTML="enter the valid password"
        k= false
    }

    if (e==f) {
        document.getElementById("ecpass").innerHTML=""
    }
    else{
        document.getElementById("ecpass").innerHTML="enter the valid confirm password"
        k= false
    }

    if(k){
        return true
    }
    else{
        return false
    }

    
    
}
