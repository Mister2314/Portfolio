function SendMail() {
var params = {
    name_id : document.getElementById("name_id").value,
    email_id : document.getElementById("email_id").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value,

}
emailjs.send("service_2gz7a1z", "template_vwf7v3v", params).then(function (res) {
    alert("Success!" + res.status)
    location.reload()
})
}


  function disableScroll() {
    window.addEventListener('scroll', preventDefault, { passive: false });
    window.addEventListener('wheel', preventDefault, { passive: false });
    window.addEventListener('touchmove', preventDefault, { passive: false });
    window.addEventListener('keydown', preventDefaultForScrollKeys, { passive: false });
}


function enableScroll() {
    window.removeEventListener('scroll', preventDefault, { passive: false });
    window.removeEventListener('wheel', preventDefault, { passive: false });
    window.removeEventListener('touchmove', preventDefault, { passive: false });
    window.removeEventListener('keydown', preventDefaultForScrollKeys, { passive: false });
}

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

var keys = {
    37: 1, 38: 1, 39: 1, 40: 1
};

window.addEventListener('load', function() {

    disableScroll();

    setTimeout(function() {
      
        document.getElementById('loadingScreen').classList.add('hidden');
       
        enableScroll();
    }, 1500); 
});