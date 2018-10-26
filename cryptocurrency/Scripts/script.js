$(document).ready(function(){
  firebase.initializeApp({
    apiKey: 'AIzaSyCamhjxSFSqG-A1bxzaUkrc3PURk1Og5sI',
    authDomain: 'block-barter.firebaseapp.com',
    projectId: 'block-barter'
  });
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

function register() {
  var db = firebase.firestore();
  var name = $("#name").val();
  var email = $("#email").val();
  var password = $("#password").val();
  var interest = $("#interest option:selected").val();
  var price = $("#price option:selected").val();
  var emailChecked = email.replace(/\.@/g,'');
  console.log(name, email, password, interest, price);
  if ($("#password").value == $("#confirmPassword").value) {
    db.collection("users").doc(emailChecked).set({
        Currency: interest,
        Email: email,
        Name: name,
        Password: password,
        Price: price
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    var docRef = db.collection("users").doc(emailChecked);
    window.location.href = "account.html";
    } else {
    alert("Your passwords do not match.");
  }
}

function login() {
  var db = firebase.firestore();
  var username = $("#email").val();
  var password = $("password").val();
  var emailChecked = username.replace(/\.@/g,'');
  var docRef = db.collection("users").doc(emailChecked);
  docRef.get().then(function(doc) {
    if (doc.exists) {
        if (doc.data(Password) == password) {
          var name = doc.data(Name);
          console.log('trdrtyfugvhb');
          document.cookie = "name="+ username;
          document.cookie = "path=/";
          var table = document.getElementById("container");
          var row;
          var stocks = [];
          for (var i = 0; i < 4; i++) {
            if (doc.data(Price) == "one") {
              stocks = ["Ethereum", "Bytecoin", "Monero", "Zcash"];
            } else if (doc.data(Price) == "onefive") {
              stocks = ["Bitcoin", "Stellar", "Dogecoin", "EOS"];
            } else {
              stocks = ["Litecoin", "TRON", "Ethereum", "Cardano"];
            }
            document.cookie = "stocks" + stocks;
            window.location.href = "account.html";
          }
        } else {
          alert("Incorrect password entered");
        }
    } else {
        alert("There is no account under this username!");
    }
  }).catch(function(error) {
      alert("There is no account under this username!");
  });
  window.location.href = "account.html";
}
