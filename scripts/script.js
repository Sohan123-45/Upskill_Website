function form_submit(){
    var isValid=true;
    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    var confirmpassword=document.getElementById("confirmPassword");
    const emailregex=/^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    const passwordregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!emailregex.test(email.value)){
        email.value=""; 
        document.getElementById("emailerror").innerText = "Invalid Email";
        isValid=false;
    }
    if(!passwordregex.test(password.value)){
        password.value="";
        document.getElementById("passworderror").innerText = "Invalid Password";
        isValid=false;
    }
    if(password.value!==confirmpassword.value){
        isValid=false;
        document.getElementById("confirmpassworderror").innerText = "Enter same Password";
    }

    if(isValid){
        name.value="";
        email.value="";
        password.value="";
        confirmpassword.value="";
        let login_msg=document.getElementsByClassName("login-msg")[0];
        login_msg.style.visibility="visible";
        setTimeout(()=>{
            login_msg.style.visibility="hidden";
        },1000);
    }
}