function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (1800000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function gen(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;

    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

   return result;
}

function recaptcha_verification(form) {
    var v = grecaptcha.getResponse();

    if(v.length == 0){
        return false;
    } else {

    	setCookie('firewall_captcha', 'I8S8s29asdasdd3T94asdasdasdF8df2'+gen(10), 1);
    	location.reload();
        return true; 
    }
}
