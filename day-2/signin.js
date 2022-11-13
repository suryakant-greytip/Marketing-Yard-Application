
let callData=JSON.parse(localStorage.getItem("person-detail")) || [];
document.querySelector("#signin").addEventListener("click",function(){
    let uName=document.getElementById("email").value;
    let pass=document.getElementById("pass").value;

    if(uName=="" || pass==""){
        alert("Please fill the input");
        return;
    }
    
    for(let i=0; i<=callData.length-1; i++){
        if(uName==callData[i].username && pass==callData[i].password){
            alert("Login Successful");
            window.location="http://127.0.0.1:5500/day-2/homepage.html";
        }
        else if(uName!=callData[i].username || pass!=callData[i].password){
            alert("Wrong Credentials")
        }
    }
})
