function signup(e) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var pw = document.getElementById("pw").value;
  var mail = document.getElementById("mail").value;
  var sdt = document.getElementById("sdt").value;
  var user = {
    username: username,
    pw: pw,
    mail: mail,
    sdt: sdt,
  };
  var json = JSON.stringify(user);
  localStorage.setItem(username, json);
  alert("Dang ki thanh cong");
}
