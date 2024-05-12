const showPassword = document.querySelector("[data-showpassword]");
const password = document.querySelector("#password");
const email = document.querySelector("#email");

showPassword.addEventListener("click",function(e){
    if(showPassword.previousElementSibling.type === "password"){
        showPassword.previousElementSibling.type = "text";
        showPassword.classList.value = "fa-solid fa-eye-slash";
    }else{
        showPassword.previousElementSibling.type = "password";
        showPassword.classList.value = "fa-solid fa-eye";
    }
})

password.addEventListener("change",function(e){
    showPassword.nextElementSibling.style.opacity = (e.target.value != "Duckpool@12345")? "1":"0";
    password.style.boxShadow = (e.target.value != "Duckpool@12345")? "0 0 0 3px hsl(0, 100%, 60%,0.8)":"0 0 0 3px hsl(100, 100%, 50%, 0.5)";
})
email.addEventListener("change",function(){
    email.nextElementSibling.style.opacity = (email.checkValidity())? "1":"0";
    email.style.boxShadow = (email.checkValidity() != true)? "0 0 0 3px hsl(0, 100%, 60%,0.8)":"0 0 0 3px hsl(100, 100%, 50%, 0.5)";
})








// const memory = navigator.deviceMemory;
// console.log(`This device has at least ${memory}GiB of RAM.`);

// const bluetooth = navigator.bluetooth;
// console.log(navigator.virtualKeyboard);

// bluetooth.requestDevice().then(devices => console.log(devices)).catch(error => console.log(error));



