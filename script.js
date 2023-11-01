var from = document.getElementById("form");

from.addEventListener("submit", (event) => {
  event.preventDefault();

  var name = document.getElementById("name");
  console.log(name);
  var email = document.getElementById("email");
  console.log(email);
  var phone = document.getElementById("phone");
  console.log(phone);
  var msg = document.getElementById("message");
  console.log(message);

  if (
    name.value == "" || email.value == "" || phone.value == "" || msg.value == "") {
    alert("Please Enter Detail");
  } else {
    alert("Thanks for Filling " + " : " + name.value);
    name.value = "";
  }
});
