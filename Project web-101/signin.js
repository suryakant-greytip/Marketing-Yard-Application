
let callData=JSON.parse(localStorage.getItem("person-detail")) || [];
document.querySelector("#signin").addEventListener("click",function(){
    let uName=document.getElementById("email").value;
    let pass=document.getElementById("pass").value;
    
    for(let i=0; i<=callData.length-1; i++){
        if(uName==callData[i].username && pass==callData[i].password){
            alert("Login Successful")
        }
        else if(uName!=callData[i].username || pass!=callData[i].password){
            alert("Wrong Credentials")
        }
    }
})


console.log(callData);