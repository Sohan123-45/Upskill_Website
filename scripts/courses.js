function enroll_submit(){
    var enroll=document.getElementsByClassName("enroll-msg")[0];
    enroll.style.visibility="visible";
    setTimeout(()=>{
        enroll.style.visibility="hidden";
    },1000);
}