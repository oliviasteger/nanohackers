$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function(){
        window.location.hash = hash;
      });
    }
  });
});
var userid = "";
function generateId() {
  userid = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 20);
}
var database = firebase.database();
function newAccount() {
  var name = document.getElementById('name').innerHTML;
  var email = document.getElementById('email').innerHTML;
  var password = document.getElementById('password').innerHTML;
  var passwordConfirm = document.getElementById('confirmpassword').innerHTML;
  var currency = document.getElementById('interest').innerHTML;
  var price = document.getElementById('price').innerHTML;
  if (password == passwordConfirm) {
    generateId();
    firebase.database().ref('users/' + email).set({
      Currency: currency,
      Email: email,
      Name: name,
      Password: password,
      Price : price
    });
    console.log("Done!");
    window.location.href= "account.html";
  } else {
    alert("Your passwords do not match!");
  }
}

function login() {
  window.location.href = "account.html";
}
