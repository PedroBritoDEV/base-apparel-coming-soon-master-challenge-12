var input = document.querySelector('.input');
var email = document.querySelector('#email');
var error_img = document.querySelector('.error-img');
var error_text = document.querySelector('.error-txt');

function send(){
    
    if(!email.checkValidity()){
        error_img.style.display = "inline" ;
        error_text.style.display = "inline" ;
        input.style.border = "solid 1px #f96262" ;
    }else{
        alert('thank you')
    };
     
};


function writing() {
    error_img.style.display = "none" ;
    error_text.style.display = "none" ;
    input.style.border = "solid 1px #ce9797" ;
}