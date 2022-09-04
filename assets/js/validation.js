var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');



function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){

        nameError.innerHTML = 'Name is required';
        return false;

    }

    if(!name.match(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/)){

        nameError.innerHTML = 'Invalid name';
        return false;
    }
    else{
    nameError.innerHTML = '' ;
    return true ;
    }
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;


    // if (let .value = /^\d+$/.test(val)){
    //     phoneError.innerHTML = 'Only digits please';
    //     return false
    //     }
   
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone No. is required';
        return false;
    }

    if(phone.length !== 10){

        phoneError.innerHTML = 'Ph No. should be ten digits'
        return false;
    }
    
    if(phone.match(/^[789]\{9}$/)){
        phoneError.innerHTML = 'Only digits please';
        return false;
    }

    
   

        phoneError.innerHTML = '';
        return true;
    

}

function validateEmail(){

    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required'
        return false;
    }

    if(!email.match(/^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)){

        emailError.innerHTML = 'Email Invalid'
        return false;

    }

    emailError.innerHTML = '';
    return true;
}

function validateMessage(){

    var message = document.getElementById('contact-message').value;

    if(message.length==0){
        messageError.innerHTML='Some message is required'
        return false;
    }
    // var required = 15 ;
    // var left = required - message.length;

    // if(left>0){
    //     messageError.innerHTML = left + ' more characters required';
    //     return false;
    // }

    messageError.innerHTML = '';
    return true

}
function validateForm(){
    if(!validateName() && !validatePhone() && !validateEmail() && !validateMessage() ){
        submitError.style.direction = 'block';
        submitError.innerHTML = 'Please Fix the errors to submit'
        setTimeout(function(){submitError.style.display = 'none ';} , 3000)
        return false;
    }
}