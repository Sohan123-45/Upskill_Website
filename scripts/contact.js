function submitForm() {
    let name=document.getElementById("name");
    let email=document.getElementById("email");
    let message=document.getElementById("message");
    let error=document.getElementById("error");

    let emailregex=/^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

    if(name.value==""||email.value==""||message.value==""){
        error.innerText="All fields are required";
        return;
    }

    if(!emailregex.test(email.value)){
        email.value="";
        email.placeholder="Invalid Email";
        return;
    }

    error.innerText ="Form submitted successfully!";

    name.value="";
    email.value="";
    message.value="";
}