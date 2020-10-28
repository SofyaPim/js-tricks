'use strict'

let form_popup = document.getElementsByClassName("form-request-popup");
let form_request = document.querySelector(".form-request-button-box");
let close_button = document.querySelector(".form-request-popup-close");
let content = document.querySelector(".form-request-popup-content");

form_request.onclick = function () {
    if (form_popup[0].className == "form-request-popup hidden") {
        form_popup[0].className = "form-request-popup see";
    } else if (form_popup[0].className == "form-request-popup see") {
        form_popup[0].className = "form-request-popup hidden";
    }
}

close_button.onclick = () =>{
    form_popup[0].className = "form-request-popup hidden";
}


