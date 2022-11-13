
let LSdata=JSON.parse(localStorage.getItem("person-detail")) || [];

document.querySelector(".signup").addEventListener("click",function(){
    let name=document.querySelector("#name").value;
    let username=document.querySelector("#email").value;
    let website=document.querySelector("#url").value;
    let password=document.querySelector("#pass").value;
    
    let flag2=true;
    if(website.includes("https",0) || website.includes("www.",0)){
        flag2=false;
    }
    if(flag2){
        alert("Please Enter Valid URL");
        console.log("plzz")
        return;
    }
    for(let i=0; i<=LSdata.length-1; i++){
        if(username==LSdata[i].username){
            alert("Your account already exist");
            return;
        }
    }

    let flag=true;

    if(username.includes("@gmail.com") && website.includes(".com")){
        flag=false;
    }

    if((name=="" || username=="" || website=="" || password=="")){
        alert("Please fill all details");
    }
    else if(flag){
        alert("Please add valid Username or Website");
    }
    else if(password.length<8){
        alert("Password should not be less than 8 characters")
    }
    else{
        let obj={
            name,
            username,
            website,
            password
        }
        LSdata.push(obj);
        localStorage.setItem("person-detail",JSON.stringify(LSdata));
        alert("Signup Successful");

        window.location="http://127.0.0.1:5500/day-2/signin.html";
    }

      
  
})