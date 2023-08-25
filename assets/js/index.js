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