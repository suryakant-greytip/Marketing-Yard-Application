
document.querySelector(".button").addEventListener("click",function(){
    let email=document.querySelector(".email").value;
    
    if(email==""){
         alert("Please fill the input");
    }
    else if(!email.includes("@gmail.com")){
         alert("Please Enter Valid Email Id")
    }
    else{
        window.location="http://127.0.0.1:5500/day-2/Signup.html";
    }

})

document.querySelector(".button2").addEventListener("click",function(){
    let email=document.querySelector(".email2").value;
    
    if(email==""){
         alert("Please fill the input");
    }
    else if(!email.includes("@gmail.com")){
         alert("Please Enter Valid Email Id")
    }
    else{
        window.location="http://127.0.0.1:5500/day-2/Signup.html";
    }

})

document.querySelector("#blog").addEventListener("click",function(){
    window.location="http://127.0.0.1:5500/day-2/blog.html"
})

