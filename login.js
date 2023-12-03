document.getElementById("button").addEventListener("click",submit)
function submit(){
    let name=document.getElementById("name").value;
    console.log(name);
    let age=document.getElementById("age").value;
    console.log(age)
    if(isNaN(age)==true){
        document.getElementById("check_age").style.display="block"
    }
    let phone_number=document.getElementById("phone_number").value;
    console.log(phone_number);
    if(isNaN(phone_number)==true){
        document.getElementById("check_phone_number").style.display="block"
    }
    if(document.getElementById("female").checked == true){
        console.log("NU")
    }
    if(document.getElementById("male").checked == true){
        console.log("NAM")
    }
    if(name=="" || age=="" || phone_number==""){
        document.getElementById("check_full").style.display="block"
    }
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    if(username=="hocsinhtranphu" && password=="12345678"){
        document.getElementById("next").style.display="block"
    }else{
        document.getElementById("wrong").style.display="block"
    }
}