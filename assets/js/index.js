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

  // Kaydırmayı devre dışı bırakmak için fonksiyon
  function disableScroll() {
    window.addEventListener('scroll', preventDefault, { passive: false });
    window.addEventListener('wheel', preventDefault, { passive: false });
    window.addEventListener('touchmove', preventDefault, { passive: false });
    window.addEventListener('keydown', preventDefaultForScrollKeys, { passive: false });
}

// Kaydırmayı etkinleştirmek için fonksiyon
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
    // Kaydırma için kullanılan tuşlar
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

var keys = {
    37: 1, 38: 1, 39: 1, 40: 1
};

window.addEventListener('load', function() {
    // Kaydırmayı devre dışı bırak
    disableScroll();

    setTimeout(function() {
        // Yükleme ekranını gizle
        document.getElementById('loadingScreen').classList.add('hidden');
        // Kaydırmayı etkinleştir
        enableScroll();
    }, 1500); // 3 saniye bekle
});